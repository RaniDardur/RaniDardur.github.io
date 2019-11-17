/*
https://www.remontexpress.ru/
https://sknebo.ru/
http://newsite.sknebo.ru/
*/
Vue.directive('init', {
  bind: function(el, binding /*, vnode*/) {
    // console.log(binding.value); //# This line is optional, of course.
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
    sendForm(formId) {

      // isWorkTime
      var date = new Date();
      var hours = date.getHours();
      this.isWorkTime = hours > 8 && hours < 22 ? true : false;
      // this.isWorkTime = false;

      var phone = this.formData.phone;
      var errorText = '';

      var phoneInt = parseInt(phone.replace(/\D+/g,""));
      var phoneParts = phoneInt ? phoneInt.toString().slice(1).split("") : Array();
      if(phoneParts.length < 10) {
        errorText = 'Необходимо заполнить поле "телефон"';
      } else {
        if(phoneParts[0] == 7 || phoneParts[0] == 8) {
          errorText = 'Первая цифра кода оператора не должна быть "7" или "8"';
        }
        if(this.getUniq(phoneParts).length == 1) {
          errorText = 'Введен некорректный номер';
        }
      }

      if(!errorText) {
        this.formData.id = formId;
        var sendData = {
          form: this.forms[formId],
          phone: this.formData.phone,
        }
        if(formId == 'calc') {
          sendData.vp = this.getSelectTitle('vp');
          sendData.vr = this.getSelectTitle('vr');
          sendData.tn = this.getSelectTitle('tn');
          sendData.area = this.calcModels.area;
          sendData.calcDates = this.datesResult;
          sendData.calcPrice = this.priceResult;
        } else {
          sendData.name = this.formData.name;
        }
        if (formId == 'person') {
          sendData.person = this.formData.person;
          sendData.message = this.formData.message;
        } else {
          this.formData.person = '';
          this.formData.message = '';
        }

        // var url = window.location.href;
        // var parts = url.split('?');
        // if(parts[1]) {
        //   sendData.urlparams = parts[1];
        // }
        if(this.utmSourceName){
          sendData.utmsource = this.utmSourceName;
        }

        /* send calltouch */
        try {
          var fio = '', phone = '', mail = '', comment = formId;
          if (sendData.name){ fio = sendData.name; }
          if (sendData.person){ fio = sendData.person; }
          if (sendData.phone){ phone = sendData.phone; }
          var ct_site_id = '27849';
          var sub = formId;
          if (sendData.form){ sub = sendData.form; }
          var ct_data = {             
            fio: fio,
            phoneNumber: phone,
            email: mail,
            subject: sub,
            comment: comment,
            sessionId: window.call_value 
          };
          $.ajax({  
            url: 'https://api-node9.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/', 
            dataType: 'json', type: 'POST', data: ct_data
          });
        } catch(e) { }
        /* send calltouch */
    
        if(!this.formData.sent) {
          axios({
            method: 'POST',
            headers: { 
              // 'Content-Type': 'multipart/form-data'
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            // url: 'http://mgbgadm.beget.tech/wp-content/themes/sknebo/resources/php/mailsend.php',
            // url: 'https://sknebo.ru/resources/php/mailsend.php',
            url: 'https://sknebo.ru/wp-content/themes/sknebo/resources/php/mailsend.php',
            data: sendData
          })
          .then((response) => {
            // console.log(response);
            YandexSubmitEvents(formId);
            $('.modal').modal('hide');
            this.formData.sent = true;
            setTimeout(function(){
              $('html, body').animate({scrollTop: $('.header').offset().top - 50}, 700);
            },200);
          })
          .catch((error) => {
            console.log(error);
          });
        }

      } else {
        alert(errorText);
      }
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

    getReviewInstaWidth(twoCols) {
      var winWidth = window.innerWidth;
      if(winWidth && winWidth > 992) {
        return {
          width: twoCols ? '600px' : '298px',
        }
      }else{
        return {}
      }
    }
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

    var winWidth = window.innerWidth;
    $('.reviews-insta-carousel').owlCarousel({
      dots: true,
      // loop: true,
      items: 4,
      lazyLoad:true,
      // autoplay: true,
      autoplayTimeout: 6000,
      nav: true,
      autoHeight: true,
      responsive:{
        0: {
            items: 1,
        },
        700: {
          items: 2
        },
        1200: {
            items: 4
        },
      },

      autoWidth: winWidth && winWidth > 992 ? true : false
      // autoWidth: true
    });
    $('.reviews-video-carousel').owlCarousel({
      dots: true,
      loop: true,
      items: 3,
      lazyLoad:true,
      autoplay: true,
      autoplayTimeout: 7000,
      nav: true,
      autoHeight: true,
      responsive:{
        0: {
            items: 1,
        },
        1200: {
            items: 3
        },
      }
    });

    // $('.phone,.phoneCalc').blur(()=>{
    //   $('.phone,.phoneCalc').val(this.formData.phone);
    // });

    $(".phone-masked").inputmask({"mask": "+7 (999) 999-99-99"});
    $('.phone-masked').each((index, element)=>{
      $(element).blur(()=>{
        this.formData.phone = $(element).val();
      });
    });

    $('#modalVideo').on('hidden.bs.modal', function (e) {
      $('#modalVideo iframe').attr('src', '');
    })

    var urlParams = new URLSearchParams(window.location.search);
    var utmSourceCode = urlParams.get('utm_source');
    
    if(utmSourceCode){
      var utmSourceName = this.utmSources[utmSourceCode]
      // console.log(utmSourceName);
      this.utmSourceName = utmSourceName
    }
    
    var show = urlParams.get('show');
    if(show){
      setTimeout(function(){
        $('html, body').animate({scrollTop: $('.' + show).offset().top - 50}, 700);
      },1000);
    }

  }
})