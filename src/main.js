
$( document ).ready(function() {
    const qwes = $('.qwes_el')
    const class_toogle_li = 'qwes_el--active'
    const class_toogle_answer = 'answer_block--active'
    let current_active = $('.qwes_el--active')


    $(qwes).on('click', function(e){
        let myClass = $(this).attr("class");
        $(this).attr("class");
        $(current_active).toggleClass(class_toogle_li)
        let p = $(current_active).find( '.answer_block' )
        $(p).toggleClass(class_toogle_answer)
        p = $(current_active).find('.button_icon')
        $(p).toggleClass('button_icon--active')
        p = $(current_active).find('.wrapper_el')
        $(p).toggleClass('wrapper_el--active')

        
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
    })});