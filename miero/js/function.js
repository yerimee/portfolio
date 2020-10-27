$(function () {
	const $slides = $('.slides-container>li');
	const $indicator = $('.pagination>li>a');
	let nowIdx = 0;

	// swiper 플러그인
	let swiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	// 메뉴 활성화
	$('.gnb > li').on('mouseenter',function(){

		$(this).find('.lnb').stop().fadeIn('fast');
		
	});

	$('.gnb > li ').on('mouseleave',function(){
		$(this).find('.lnb').stop().fadeOut('fast');
	});

	//초기화작업
	$slides.eq(nowIdx).addClass('on').show();
	$indicator.eq(nowIdx).parent().addClass('on');

	// 페이지 전환 함수
	const fadeFn = function() {
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slides.filter('.on').stop().fadeOut('slow').removeClass('on');
		$slides.eq(nowIdx).stop().fadeIn('fast').addClass('on');
	};

	//자동재생 함수
	const autoPlay = function() {
		intervalID = setInterval(function() {
			nextIdx();
			fadeFn();
		}, 4000);
	};

	//재생정지 함수
	const autoStop = function() {
		clearInterval(intervalID);
	};

	autoPlay();

	//다음 슬라이드의 인덱스번호 추출함수
	const nextIdx = function() {
		if (nowIdx < 2) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}
	};

	//다음버튼 클릭이벤트 등록
	$('.next').on('click', function(evt) {
		autoStop();
		nextIdx();
		fadeFn();
		evt.preventDefault();
	});

	//이전버튼 클릭이벤트 등록
	$('.prev').on('click', function(evt) {
		autoStop();
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 2;
		}
		fadeFn();
	});

	//인디케이터 클릭 이벤트등록
	$indicator.on('click', function(evt) {
		autoStop();
		nowIdx = $indicator.index(this);
		fadeFn();
		evt.preventDefault();
	});

	// question 이벤트
	$('.question>li>a').on('click',function(evt){
		nowIdx=0;
		$(this).parent().eq(nowIdx).addClass('on').siblings().removeClass('on');
		
		evt.preventDefault();
	});

	// top 버튼
	$(window).on('scroll',function(){
		let scrollTop = $(this).scrollTop();

		if(scrollTop>0){
			$('.top').stop().fadeIn('fast');
		}else{
			$('.top').stop().fadeOut();
		}

	});

	$('.top').on('click',function(evt){
		evt.preventDefault();

		$('html, body').stop().animate(
			{
				scrollTop: 0,
			},
			'easeInOutCubic'
		);
	});

	// mobile

	// 메뉴 버튼
	$('header>i.menu_btn').on('click',function(){
		$(this).stop().hide();
		$('header>i.close_btn').stop().show();
		$('header>nav').stop().show();
	});

	$('header>i.close_btn').on('click',function(){
		$(this).stop().hide();
		$('header>i.menu_btn').stop().show();
		$('nav').stop().hide();
	});

	// 모바일 버전 변환 시
	let width_size = window.outerWidth;

	if (width_size <= 768) {
		$('.long-cont').on('click',function(evt){
			$('.fiber').css({
				height: 1200,
				'background-position': '0 860px'
			});

			evt.preventDefault();
		});
	}
	
	// ipad
	if(width_size == 768){

		$('.fiber > .question > li:nth-child(3) > div > .fruit').css({
			'background-size': '80%',
			'background-position': 'center 10px'
		});

		$('.fiber > .question > li:nth-child(3) > div > .fruit > p').css({
			'margin-left': '12%',
		});

		$('.fiber > .question > li:nth-child(3) > div > .fruit4 > p:nth-child(4)').css({
			'margin-left': '10%'
		});

		$('.fiber').css({
			'background-size': '60%',
		  'background-position': 'center 550px'
		});

		$('.miero-fiber > ul > li').css({
			'background-size': '40%',
			'background-position': 'center -30px'
		});
	}

	// 
	if(width_size == 320){
		$('article>h2').css({
			'font-size': '22px'
		});

		$('article h3').css({
			'font-size': '20px'
		});

		$('article p').css({
			'font-size': '11px'
		});
	}

});                                                         
