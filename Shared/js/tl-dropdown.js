(function($, undefined){

    var document = window.document;

    var PLUGIN_NAME = 'tl_dropdown';
    var API = PLUGIN_NAME + 'API';
    var EVENT_ONCHANGE = 'change.' + PLUGIN_NAME;

    var defaults = {
        position: 'right',
        className: null,
        selected: null,
        items: null,
        showArrow: true,
        onRefresh: null,
        onCreateItem: null,
        onChange: null
    };

    var type = $.type;

    var sliceArgs = function(args, from) {
         return Array.prototype.slice.call(args, from || 0);
    };

    var ensureType = function(val, expectedType, defValue) {
        return type(val) === expectedType ? val : defValue;
    };

    var isNullOrUndefined = function(val) {
        return val === null || typeof(val) === 'undefined';
    };

    var setter = function(fn) {
        return function() {
            var args = arguments;
            return this.each(function() {
                fn.apply(this, args);
            });
        };
    };

    var each = setter;

    var getter = function(fn) {
        return function() {
            if (this.size() > 0) {
                return fn.apply(this[0], arguments);
            }
        };
    };

    var getter_setter = function(fn) {
        return function() {
            var args = arguments;
            if (args.length == 0) {
                if (this.size() > 0) {
                    return fn.apply(this[0], args);
                }
            } else {
                return this.each(function() {
                    fn.apply(this, args);
                });
            }
        };
    };

    var hasAPI = function(fn, noApiCallback) {
        return function() {
            if ($(this).data(API)) {
                return fn.apply(this, arguments);
            }
            return noApiCallback ? noApiCallback.call(this) : this;
        };
    };

    var apiCall = function(method) {
        return function() {
            var api = $(this).data(API);
            return api ? api[method].apply(this, arguments) : undefined;
        };
    };

    var prop = function(getter, setter) {
        return function() {
            var args = arguments;
            if (args.length == 0) {
                return getter && getter();
            } else {
                return setter && setter.apply(this, args);
            }
        };
    };

    var createDropDown = function(options) {
        var $this = $(this);
        if ($this.data(API)) {
            return;
        }

        var opts = $.extend({}, defaults, options);
        var items = opts.items = ensureType(opts.items, 'array', []);
        var onCreateItem = opts.onCreateItem = ensureType(opts.onCreateItem, 'function', null);
        var onRefresh = opts.onRefresh = ensureType(opts.onRefresh, 'function', null);

        var $cont, $currentCont, $currentInnerCont, $list, $sourceList, $arrowCont;
        var $items = $();
        var $selectedItem = null;
        var selectedValue = opts.selected;

        var init = function() {
            createContainer();

            if (opts.onChange) {
                onChange(opts.onChange);
            }

            if ($sourceList.length) {
                decorateList();
            } else {
                createList();
            }

            bindEvents();
            setupAPI();
        };

        var createContainer = function() {
            $sourceList = $this.find('ul').detach();
            $this.empty().append(
                $cont = $('<div class="tl-dropdown"></div>').append(
                    $('<div class="tl-dropdown-inner"></div>').append(
                        $currentCont = $('<div class="tl-dropdown-current"></div>').append(
                            $currentInnerCont = $('<div class="tl-dropdown-current-inner"></div>'),
                            $arrowCont = $('<div class="tl-dropdown-arrow">▼</div>')
                        ),
                        $list = $('<ul class="tl-dropdown-list"></ul>')
                    )
                )
            );
            $cont.addClass(opts.position == 'right' ? 'tl-dropdown-right' : 'tl-dropdown-left').addClass(opts.className);
            $arrowCont.toggle(!!opts.showArrow);
        };

        var decorateList = function() {
            items = $sourceList.children('li');
            createList_($sourceList.map(function(index, el) {
                return [el, el.getAttribute('data-value'), true];
            }));
        };

        var createList = function() {
            var _items = [];
            $.each(items, function(index, item) {
                var $elem = null;
                var value = item;
                var selectable = true;

                if (onCreateItem) {
                    var res = onCreateItem.call($this[0], index, item);
                    if (res && type(res) == 'array' && res.length >= 2) {
                        value = res[0];
                        var el = res[1];
                        if (res.length >= 3) {
                            selectable = res[2];
                        }
                        if (el.jquery) {
                            $elem = el;
                        } else if (type(el) == 'string') {
                            item = {label: el, value: value};
                        }
                    }
                }

                if (!$elem) {
                    var label = null;
                    // если отображаемый в свернутом виде текст отличается от развернутого
                    if (type(item) == 'object' && item.Label) {
                        label = String(item.Label);
                        if (!isNullOrUndefined(item.Value)) {
                            value = String(item.Value);
                        }
                    } else if (type(item) == 'string' || type(item) == 'number') {
                        label = String(item);
                    }
                    if (label) {
                        $elem = $('<span/>').text(label);
                        if (type(item.hint) == 'string') {
                            $elem.attr('title', item.hint);
                        }
                    }
                }

                if ($elem) {
                    _items.push([$elem[0], value, selectable]);
                }
            });

            createList_(_items);
        };

        var createList_ = function(_items) {
            $list.empty();
            $list.delegate('li', 'click', function(e) {
                e.preventDefault();
                var $li = $(e.target).closest('li.tl-dropdown-item');
                if ($li.is('.non-selectable')) {
                    return;
                }
                var changed = $li[0] != $selectedItem[0];
                selectItem($li);
                hide();
                if (changed) {
                    notifyOnChange();
                }
            });
            var f = document.createDocumentFragment();
            $.each(_items, function(index, item) {
                var el = item[0];
                var value = item[1];
                var selectable = item[2];
                var li = document.createElement('li');
                li.className = 'tl-dropdown-item' + (selectable ? '' : ' non-selectable');
                li.setAttribute('data-index', String(index));
                li.setAttribute('data-value', String(value));
                li.appendChild(el);
                f.appendChild(li);
            });
            $list.append(f);
            $items = $list.children();

            var _selectedValue = selectedValue;
            $selectedItem = selectedValue = null;
            selectItem($items.eq(0));
            selectItem(findItemByValue(_selectedValue));
        };

        var findItemByValue = function(value) {
            var $item = $items.filter(function() {
                return $(this).data('value') == value;
            });
            return $item.length == 0 ? null : $item.first();
        };

        var selectItem = function($item) {
            if ($item && $item.length == 1) {
                var itemData = items[$item.data('index')];
                if (onRefresh) {
                    onRefresh.call($this[0], $currentInnerCont, itemData, $item);
                } else {
                    if (itemData.ShortLabel) {
                        var shortElem = $('<span/>').text(itemData.ShortLabel);
                        if (type(itemData.hint) == 'string') {
                            shortElem.attr('title', itemData.hint);
                        }
                        $currentInnerCont.empty().append(shortElem);
                    } else {
                        $currentInnerCont.empty().append($item.children().clone(false));
                    }
                }

                if ($selectedItem) {
                    $selectedItem.removeClass("tl-dropdown-selected");
                }

                $selectedItem = $item;
                $selectedItem.addClass("tl-dropdown-selected");
                selectedValue = $item.data('value');
            }
        };

        var isExpanded = function() {
            return $cont.is('.tl-dropdown-expanded');
        };

        var isFittedToScreen = function($elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.outerHeight();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };

        var show = function() {
            $list.css('opacity', 0);
            $cont.addClass('tl-dropdown-expanded');
            var cwidth = $currentCont.outerWidth();
            var lwidth = $list.outerWidth();
            if (cwidth > lwidth) {
                $list.width(cwidth - (lwidth - $list.width()));
            }

            //if (!isFittedToScreen($list)) { // expand list to top
            //    $cont.addClass('tl-dropdown-expanded-top');
            //    var contHeight = $list.outerHeight() + $cont.outerHeight() - 1;
            //    $list.css('margin-top', '-' + contHeight + 'px');
            //} else { // or bottom
                $cont.addClass('tl-dropdown-expanded-bottom');
                $list.css('margin-top', '-1px');
            //}

            $list.scrollTop(0);
            $list.scrollTop($selectedItem.position().top); // scroll list to selected item
            $list.animate({opacity: 1}, 200);
        };

        var hide = function() {
            $list.animate({opacity: 0}, 200, function() {
                $cont.removeClass('tl-dropdown-expanded')
                .removeClass('tl-dropdown-expanded-top')
                .removeClass('tl-dropdown-expanded-bottom');
                $list.css('margin-top', '0');
            });
        };

        var toggle = function() {
            isExpanded() ? hide() : show();
        };

        var bindEvents = function() {
            $currentCont.bind('click', function(ev) {
                ev.preventDefault();
                toggle();
            });

            var focusTimeout = null;
            $cont.bind('mouseenter', function() {
                if (focusTimeout) {
                    clearTimeout(focusTimeout);
                    focusTimeout = null;
                }
            }).bind('mouseleave', function() {
                if (!focusTimeout) {
                    focusTimeout = setTimeout(function() {
                        focusTimeout = null;
                        hide();
                    }, 500);
                }
            });
        };

        var onChange = function(fn) {
            $cont.bind(EVENT_ONCHANGE, fn);
        };

        var notifyOnChange = function() {
            $cont.trigger(EVENT_ONCHANGE, [getSelectedValue(), getSelectedItem()]);
        };

        var getSelectedValue = function() {
            return $selectedItem ? $selectedItem.data('value') : null;
        };

        var setSelectedValue = function(value) {
            selectItem(findItemByValue(value));
            notifyOnChange();
        };

        var getSelectedItem = function() {
            return $selectedItem ? items[$selectedItem.data('index')] : null;
        };

        var setupAPI = function() {
            $this.data(API, {
                show: show,
                hide: hide,
                toggle: toggle,
                isExpanded: isExpanded,
                onChange: onChange,
                selectedValue: prop(getSelectedValue, setSelectedValue),
                selectedItem: prop(getSelectedItem, null)
            });
        };

        init();
    };

    var methods = {
        init : each(function(options) {
            createDropDown.call(this, options);
        }),
        show: each(apiCall('show')),
        hide: each(apiCall('hide')),
        toggle: each(apiCall('toggle')),
        isExpanded: getter(apiCall('isExpanded')),
        onChange: setter(apiCall('onChange')),
        value: getter_setter(apiCall('selectedValue')),
        selectedItem: getter_setter(apiCall('selectedItem'))
    };

    $.fn[PLUGIN_NAME] = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, sliceArgs(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.' + PLUGIN_NAME);
        }
        return null;
    };

    $.fn[PLUGIN_NAME].defaults = defaults;

})(jQuery);
