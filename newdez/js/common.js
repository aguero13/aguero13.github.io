$(function () {
    /*Фиксированное меню сайта*/
    $(window).scroll(function(event) {
        if($(this).scrollTop() > 100) {
            $(".fix").addClass('fixed-menu').show();
        }else{
            $(".fix").removeClass('fixed-menu').hide();
            $('.fix-list-menu-line').hide();
        }
    });
    $('#open_menu').click( function(){
        $('.fix-list-menu-line').slideToggle();
    });
    
    
    /*Прокрутка по нажатию к следующей секции*/
    $(document).ready(function(){
        $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('body').animate({ scrollTop: $(scroll_el).offset().top }, 300); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
        });
    });
    
   /* Accordion Sidebar Menu*/
    var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
    
    $(".owl-carousel-callform").owlCarousel({
        items: 1,
    });
    
    $(".owl-carousel-clients").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true
    });
    
    /* Модальное окно Нового заказа*/
    
    $("#modal").iziModal({
        title: 'ОБРАТНЫЙ ЗВОНОК',
        subtitle: 'МЫ ВАМ ПЕРЕЗВОНИМ В ТЕЧЕНИИ 15 МИНУТ',
        headerColor: '#e0d139',
    });
    
    $(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});
 
});

