$(document).ready(function() {

// -------- выбор дилера -----------------------------------------------------------------------------

    var dealers = {
        "holpi":['+375 (29) 201-01-01', 'г. Минск дер. Боровая, д. 2', 'mazda'],
        "mashinostroiteley":['+375 (29) 340-04-00', 'г. Минск, ул. Машиностроителей, 26', 'vw'],
        "sukharevo":['+375 (29) 506-02-06', 'г. Минск, ул. Шаранговича, 22', 'vw'],
        "uruchye":['+375 (29) 331-11-11', ' Минск, пр. Независимости, 202', 'vw'],
        "nezavisimosti":['+375 (29) 563-40-20','г. Минск, пр. Независимости, 202/3', 'kia'],
        "borovaya":['+375 (29) 266-44-44', 'Минский р-н, д. Боровая, 2', 'ford']
    };

    $( "#dealer" ).change(function() {
        var val = $("#dealer option:selected").val();
        var marka = dealers[val][2];

        // смена номера и телефона
        $('.contact h3').text(dealers[val][0]);
        $('.contact p').text(dealers[val][1]);

        // смена иконок в зависимости от выбранного дилера
        $('.select img').each(function () {
            if($(this).attr("class") == 'icons active'){
                $(this).removeClass("active");
            }
        } );
        $('#'+marka).addClass("active");
    });

// ---------------------------------------------------------------------------------------------------

// ---------- menu -----------------------------------------------------------------------------------
   var arr={
       'newcar':['img/newcar.png','Новые автомоблили'],
       'usedcar':['img/usedcar.png','Автомобили с пробегом'],
       'credit':['img/credit.png','Финансовые услуги'],
       'service':['img/service.png','Услуги сервиса'],
       'parts':['img/parts.png','Запасные части'],
       'wheel':['img/wheel.png','Дополнительное оборудование']
   };

    $('.divide').each(function () {
        var val = $(this).attr('id');
        $(this).children().css('backgroundImage', 'url('+arr[val][0]+')');
        $(this).children().children().text(arr[val][1]);
    });

//----------------------------------------------------------------------------------------------------


// ------------ offers -------------------------------------------------------------------------------
    var offers = {
        "mazda":['Mazda', '8 спецпредложений'],
        "vw":['Volkswagen', '7 спецпредложений'],
        "kia":['KIA', '14 спецпредложений'],
        "ford":['Ford', '12 спецпредложений']
    };

    $('.offers .row div').each(function () {
        var val = $(this).attr('class').split(' ');
        var a = $(this).children().children();
        $(a[0]).attr("src","img/"+val[0]+".png");
        $(a[1]).text(offers[val[0]][0]);
        $(a[2]).text(offers[val[0]][1]);

    });

// ---------------------------------------------------------------------------------------------------

// ------ news --------------------------------------------------------------------------------------

        var news = [
        ['img/car.jpg', 'Финальное предложение года от Mazda', 'Таких цен Вы ждали очень долго! Только до 31 января 2017 года приглашаем Вас в автоцентр Атлант-М Холпи, где Вас ждут самые привлекательные условия покупки автомобилей Mazda:'],
        ['img/car.jpg', 'Идеальный момент для покупки. Распродажа склада Volkswagen.', 'Volkswagen в Беларуси объявляет большую распродажу склада автомобилей 2016 года выпуска! Только в январе действует выгода до 2600 рублей на модели Polo, Jetta и Tiguan.'],
        ['img/car.jpg', 'Грандиозная распродажа склада 2016 года выпуска!', 'Такой распродажи у марки Ford в Беларуси не было давно!  Автоцентр «Атлант-М Боровая» предлагает автомобили Ford 2016 года выпуска по беспрецедентно низким ценам. '],
        ['img/car.jpg', 'Выгодные предложения предложение года KIA', 'Скидка до 2тыс руб на новые авто 1. Выгода на Rio - 1000 рублей и Sportage 2000 рублей. 2. Дополнительная выгода до 1000 рублей на ограниченную партию Рио с АКПП '],
        ['img/car.jpg', 'Финальное предложение года от Mazda', 'Таких цен Вы ждали очень долго! Только до 31 января 2017 года приглашаем Вас в автоцентр Атлант-М Холпи, где Вас ждут самые привлекательные условия покупки автомобилей Mazda: '],
        ['img/car.jpg', 'Финальное предложение года от Mazda', 'Таких цен Вы ждали очень долго! Только до 31 января 2017 года приглашаем Вас в автоцентр Атлант-М Холпи, где Вас ждут самые привлекательные условия покупки автомобилей Mazda: ']
    ];

    for(var i=0; i < news.length; i++){

       $('.news').append('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">' +
                            '<img src="'+ news[i][0]+'"/>' +
                            '<p>'+ news[i][1]+'</p>'+
                            '<p>'+news[i][2]+'</p>'+
                            '<button class="btn btn-default">Подробнее</button>'+
                        '</div>');
    }
// --------------------------------------------------------------------------------------------------

// ----скрывающееся и появляющееся меню ------------------------------------------------------------
   $(document).on('click', '.menuInner button', function (e) {

       $('.secondaryMenu').toggle();

    })



});
