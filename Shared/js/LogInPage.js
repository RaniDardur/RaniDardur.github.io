(function ($) {
    var $dropdownElem = $("#lang-dropdown");
    var locale = getCurrentLanguage();

    $dropdownElem.tl_dropdown({
        position: 'left',
        selected: locale,
        className: 'lang-dropdown',
        items: [{ "Value": "ru", "Label": "Русский", "Url": "" },
            { "Value": "en", "Label": "English", "Url": "" },
            { "Value": "fr", "Label": "Français", "Url": "" },
            { "Value": "uk", "Label": "Українська", "Url": "" },
            { "Value": "pl", "Label": "Polski", "Url": "" },
            { "Value": "ka", "Label": "ქართული", "Url": "" },
            { "Value": "bg", "Label": "Български", "Url": "" }
        ],
        onCreateItem: function(index, item) {
            var lang = item.Value;
            var $elem = $('<div class="lang-dropdown-item"></div>').append(
                $('<div class="flag-icon"></div>').addClass('flag-' + lang)
            ).attr('title', item.Label);
            $elem.append($('<span/>').text(item.Label));
            return [lang, $elem];
        },
        onRefresh: function($cont, itemData, $item) {
            $cont.empty().append($item.find('div.flag-icon').clone(false));
        },
        onChange: function(event, value, item) {
            if (locale != value) {
                changeLang(value);
            }
        }
    });

    function changeLang(value) {
        var locationUrl = window.location.href.split('?')[0] + "?lng=" + value;
        window.location = locationUrl;
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function getCurrentLanguage() {
        var defaultLanguage = 'en';

        var lng = getParameterByName('lng');
        if (lng !== "") {
            return lng;
        }

        lng = $.cookie('login_form_lng');
        if (typeof lng !== 'undefined') {
            return lng;
        }

        if (document.domain === "www.travelline.ua" || document.domain === "travelline.ua") {
            return "uk";
        } else if (document.domain === "secure.travelline.pro") {
            return "en";
        }

        return defaultLanguage;
    }
})(jQuery);
