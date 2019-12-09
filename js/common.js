
Vue.directive('init', {
  bind: function(el, binding /*, vnode*/) {
  }
});
new Vue({
  el: '#app',
  data: {
    calcPriceShow: false,
    pricesType: 'complex',
    examplesCurrent: {},
    isWorkTime: true,
    forms: {
      calc: 'Рассчет стоимости ремонта',
      call: 'Заявка на звонок',
      smetchik: 'Пригласите сметчика сегодня',
      rasschet: 'Получите расчет прямо сейчас',
      zamershik: 'Заявка на вызов замерщика',
      price: 'Заявка на прайс-лист',
      rassrochka: 'Заявка на рассрочку',
      design: 'Закажите дизайн-проект',
      person: 'Написать сотруднику'
    },
    formData: {
      id: '',
      name: '',
      phone: '',
      message: '',
      person: '',
      sent: false,
      urlparams: '',
    },
    calcDictionary: {
      vp: [
        {code: 'kv', title: 'Квартира'},
        {code: 'km', title: 'Комната'},
        {code: 'vn', title: 'Ванная комната'},
        {code: 'dm', title: 'Дом'},
        {code: 'of', title: 'Офис'}
      ],
      vr: [
        {code: 'ks', title: 'Косметический'},
        {code: 'kp', title: 'Капитальный'},
        {code: 'ev', title: 'Евро'},
        {code: 'dz', title: 'Дизайнерский'}
      ],
      tn: [
        {code: 'ns', title: 'Новостройка'},
        {code: 'vt', title: 'Вторичная'}
      ]
    },
    calcRangesDictionary: [[0, 45], [45, 80], [80, 100], [100, 150], [150, 1000000]],
    calcModels: {
      select: {
        vp: 'kv',
        vr: 'ks',
        tn: 'ns',
      },
      area: 10
    },
    calcScheme: {
      kv_vt_ks: {price: 3162, ranges: [[14, 30], [30, 50], [50, 80], [80, 100], [100]]},
      kv_vt_kp: {price: 5113, ranges: [[28, 44], [44, 64], [64, 94], [94, 114], [114]]},
      kv_vt_ev: {price: 6821, ranges: [[34, 50], [50, 70], [70, 100], [100, 120], [120]]},
      kv_vt_dz: {price: 7811, ranges: [[34, 50], [50, 70], [70, 100], [100, 120], [120]]},

      kv_ns_ks: {price: 2977, ranges: [[20, 35], [35, 60], [60, 90], [90, 110], [110]]},
      kv_ns_kp: {price: 4833, ranges: [[34, 49], [49, 74], [74, 104], [104, 134], [124]]},
      kv_ns_ev: {price: 6855, ranges: [[40, 55], [55, 80], [80, 100], [110, 130], [130]]},
      kv_ns_dz: {price: 7801, ranges: [[40, 55], [55, 80], [80, 100], [110, 130], [130]]},

      km_ks: {price: 2610, ranges: [[5, 10]]},
      km_kp: {price: 4243, ranges: [[10, 14]]},
      km_ev: {price: 5821, ranges: [[10, 16]]},
      km_dz: {price: 6822, ranges: [[10, 18]]},

      vn_ks: {price: 13380, ranges: [[5, 10]]},
      vn_kp: {price: 22140, ranges: [[14, 19]]},
      vn_ev: {price: 26450, ranges: [[16, 21]]},
      vn_dz: {price: 31210, ranges: [[16, 21]]},

      dm_vt_ks: {price: 3975, ranges: [[14, 30], [30, 50], [50, 80], [80, 100], [100]]},
      dm_vt_kp: {price: 5945, ranges: [[28, 44], [44, 64], [64, 94], [94, 114], [114]]},
      dm_vt_ev: {price: 7511, ranges: [[34, 50], [50, 70], [70, 100], [100, 120], [120]]},
      dm_vt_dz: {price: 8233, ranges: [[34, 50], [50, 70], [70, 100], [100, 120], [120]]},

      dm_ns_ks: {price: 4214, ranges: [[20, 35], [35, 60], [60, 90], [90, 110], [110]]},
      dm_ns_kp: {price: 6131, ranges: [[34, 49], [49, 74], [74, 104], [104, 134], [124]]},
      dm_ns_ev: {price: 7055, ranges: [[40, 55], [55, 80], [80, 100], [110, 130], [130]]},
      dm_ns_dz: {price: 7904, ranges: [[40, 55], [55, 80], [80, 100], [110, 130], [130]]},

      of_ks: {price: 3337, ranges: [[14, 30], [30, 50], [50, 80], [80, 100], [100]]},
      of_kp: {price: 4323, ranges: [[28, 44], [44, 64], [64, 94], [94, 114], [114]]},
      of_ev: {price: 5021, ranges: [[34, 50], [50, 70], [70, 100], [100, 120], [120]]},
      of_dz: {price: 5921, ranges: [[34, 50], [50, 70], [70, 100], [100, 120], [120]]},
    },

    utmSources: {
      'yd': 'Яндекс.Директ',
      'ads.instagram': 'Инст.Таргет',
      'google': 'Google.Ads',
      'yd_poisk': 'Директ.Поиск',
      'yd_rsy': 'Директ.РСЯ',
      'yd_retargeting': 'Директ.Ретаргет',
      'google_poisk': 'Adword.Поиск',
      'google_kms': 'Adword.КМС',
      'ads.instagram': 'Ads.inst'
    },
    utmSourceName: ''
  },
  computed: {
    priceResult: function() {
      // km vn of
      var models = this.calcModels.select;

      if (models.vp == 'km' || models.vp == 'vn' || models.vp == 'of') {
        var stringScheme = models.vp + '_' + models.vr;
      } else {
        var stringScheme = models.vp + '_' + models.tn + '_' + models.vr;
      }

      if (this.calcScheme[stringScheme]) {
        return this.calcScheme[stringScheme].price * this.calcModels.area;
      } else {
        return 0;
      }
    },
    datesResult: function() {
      var models = this.calcModels.select;

      // var stringScheme = models.vp + '_' + models.tn + '_' + models.vr;
      if (models.vp == 'km' || models.vp == 'vn' || models.vp == 'of') {
        var stringScheme = models.vp + '_' + models.vr;
      } else {
        var stringScheme = models.vp + '_' + models.tn + '_' + models.vr;
      }

      var stringResult = '';
      if(models.vp == 'km' || models.vp == 'vn') {
        var range = this.calcScheme[stringScheme].ranges[0];
        stringResult = 'от ' + range[0] + ' до ' + range[1] + ' дней';
      } else {
        this.calcRangesDictionary.forEach((valueDict, keyDict) => {
          if(this.calcModels.area >= valueDict[0] && this.calcModels.area < valueDict[1]) {
            var range = this.calcScheme[stringScheme].ranges[keyDict];
            stringResult = 'от ' + range[0];
            if(range[1]) {
              stringResult = stringResult + ' до ' + range[1];
            }
            stringResult = stringResult + ' дней';
          }
        });
      }
      return stringResult;
    },
  },
  methods: {
    scrollTo(scrollToClass) {
      if(this.formData.sent) {
        this.formData = {
          id: '', name: '', phone: '', message: '', person: '', sent: false,
        };
        setTimeout(function(){
          $('html, body').animate({scrollTop: $('.' + scrollToClass).offset().top - 50}, 700);
        },200);
      } else {
        $('html, body').animate({scrollTop: $('.' + scrollToClass).offset().top - 50}, 700);
      }
    },
    modalOpen(modalId, personName) {
      this.formData.id = modalId;
      if (modalId == 'person') {
        // this.formData.person = person.name;
        this.formData.person = personName;
        $('#modalEmployee').modal();
      } else {
        $('#modalCommonForm').modal();
      }
    },
    modalVideoOpen(src) {
      $('.modal-video iframe').attr('src', src);
      $('#modalVideo').modal();
    },
    modalImageOpen(src) {
      $('.modal-image img').attr('src', src);
      $('#modalImage').modal();
    },
    onlyNumber($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 43 && keyCode !== 61) {
         $event.preventDefault();
      }
    },
    getUniq(arr) {
      let result = [];
      for (let str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
      return result;
    },
    getSelectTitle(prop) {
      var title = "";
      this.calcDictionary[prop].forEach((value) => {
        if(value.code == this.calcModels.select[prop]) {
          title = value.title;
        }
      });
      return title;
    },

    modalCarouselCertificatesOpen(ind) {
      $('#modalCarouselCertificates').modal();
      setTimeout(function(){
        var owlCarousel = $('#modalCarouselCertificates .owl-carousel');
        owlCarousel.owlCarousel({
          items: 1,
          nav: true,
          lazyLoad:true
        });
        if(ind !== undefined) {
          owlCarousel.trigger('to.owl.carousel', ind);
        }
        $('#modalCarouselCertificates').find('.modal-close').fadeIn();
      },500);
    },
    modalCarouselInstaOpen(ind) {
      $('#modalCarouselInsta').modal();
      setTimeout(function(){
        var owlCarousel = $('#modalCarouselInsta .owl-carousel');
        owlCarousel.owlCarousel({
          items: 1,
          nav: true,
          lazyLoad:true,
          autoHeight: true
        });
        if(ind !== undefined) {
          owlCarousel.trigger('to.owl.carousel', ind);
        }
        $('#modalCarouselInsta').find('.modal-close').fadeIn();
      },500);
    },
  },
  mounted() {

    $('.order-carousel .owl-carousel').owlCarousel({
      dots: true,
      loop: true,
      items: 1,
      lazyLoad:true,
      autoplay: true,
      nav: true,
    });

    this.examplesCurrent = this.examples[0];
    var owlExamples = $('.examples-carousel .owl-carousel');
    owlExamples.owlCarousel({
      // nav: true,
      // margin: 10,
      // navText: ["",""],
      // center: true,
      dots: true,
      // loop: true,
      items: 1,
      lazyLoad:true,
      // autoplay: true,
      nav: true,
      autoHeight:true
    });
    owlExamples.on('changed.owl.carousel', (e) => {
      // console.log("current: ",e.relatedTarget.current());
      var ind = e.relatedTarget.current();
      this.examplesCurrent = this.examples[ind];
      // console.log("current: ",e.item.index) //same
      // console.log("total: ",e.item.count)   //total
    });

    $('.discounts-carousel').owlCarousel({
      dots: true,
      loop: true,
      items: 1,
      lazyLoad:true,
      autoplay: true,
      nav: true,
    });
  }
})
