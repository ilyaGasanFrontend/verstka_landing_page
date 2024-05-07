
$( document ).ready(function() {
    const qwes = $('.qwes_el')
    const class_toogle_li = 'qwes_el--active'
    const class_toogle_answer = 'answer_block--active'
    let current_active = $('.qwes_el--active')
    let current_index = 0
    let window_width = 0
    const hamburger =  $('.header_navbar--mobile')
    $('.wrapper_mobile_menu').on('click', e => {
        console.log(hamburger)
        $(hamburger).toggleClass('invisible')
    }) 

    if (window.innerWidth < 440) {
        console.log('hi')
            // Получаем список элементов карусели
            const carouselList = document.querySelector('.carousel_list');
    
            // Получаем ширину карусели
            const carouselWidth = document.querySelector('.container_carousel').offsetWidth;
    
            // Устанавливаем начальное значение сдвига
            let offset = 0;
    
            // Функция для скролла карусели
            function scrollCarousel() {
                offset -= 1; // Изменяем сдвиг на 1 пиксель влево
                if (offset <= -carouselWidth) { // Если достигнут конец карусели
                    offset = 0; // Возвращаемся в начало
                }
                carouselList.style.transform = `translateX(${offset}px)`; // Применяем сдвиг
            }
    
            // Устанавливаем интервал для автоматического скролла карусели
            setInterval(scrollCarousel, 10); // Изменяйте значение интервала по вашему усмотрению
    }
    $('.toggle_icon').click(function() {
        $('.header_navbar').slideToggle();
    });

    $(qwes).on('click', function(e){
        let p = NaN
        let currentindex = $(this)
        if ($(window).width() > 990) {

            if (current_index != $(this).index()){
                $(this).attr("class");
                $(current_active).toggleClass(class_toogle_li)
                p = $(current_active).find( '.answer_block' )
                $(p).toggleClass(class_toogle_answer)
                p = $(current_active).find('.button_icon')
                $(p).toggleClass('button_icon--active')
                p = $(current_active).find('.wrapper_el')
                $(p).toggleClass('wrapper_el--active')

            }
            
            
            $(this).toggleClass(class_toogle_li);
            p = $(this).find( '.answer_block' )
            console.log(p)
            $(p).toggleClass(class_toogle_answer)
            console.log(typeof(myClass));
            p = $(this).find('.button_icon')
            $(p).toggleClass('button_icon--active')
            p = $(this).find('.wrapper_el')
            $(p).toggleClass('wrapper_el--active')

            current_active = $(this)
            current_index = $(this).index()
        }
        else {
            $.each(qwes, function (indexInArray, valueOfElement) { 
                

                if  ($(currentindex).index() != indexInArray) {
                    $(valueOfElement).toggleClass('invisible')
                    
       
                }
                else {
                    $(currentindex).toggleClass(class_toogle_li);

                    p = $(currentindex).find( '.answer_block' )
                    console.log(p)
                    $(p).toggleClass(class_toogle_answer)
                    console.log(typeof(myClass));
                    p = $(currentindex).find('.button_icon')
                    $(p).toggleClass('button_icon--active')
                    p = $(currentindex).find('.wrapper_el')
                    $(p).toggleClass('wrapper_el--active')
                }
            });
            
        }
        
        
    })});