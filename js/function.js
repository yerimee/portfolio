/////////////////////////////////////////////////

$(function () {
	const $mnu = $('header > nav > .gnb > li > a');
	const $article = $('article');
	const arrTopVal = [];
	let nowIdx = 0;

	// 로딩 이벤트
	// $(window).load(function () {
	// 	$('.loader').delay(3000).fadeOut();
	// 	$('.bg').delay(3000).fadeOut();
	// });

	// swiper 슬라이드
	let swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});

	// 스크롤 탑 이벤트
	const goTopFn = function () {
		$('html, body').stop().animate(
			{
				scrollTop: 0,
			},
			'easeInOutCubic'
		);
	};

	// 타이핑 이벤트
	setTimeout(function () {
		let typingB = false;
		let typingIdx = 0;
		let typingTxt = $('.typing-txt').text();
		let typingVal = setInterval(typing, 150);

		typingTxt = typingTxt.split('');

		if (typingB == false) {
			typingB = true;
		}

		function typing() {
			if (typingIdx < typingTxt.length) {
				$('.typing').append(typingTxt[typingIdx]);
				typingIdx++;
			} else {
				clearInterval(typingVal);
			}
		}
	}, 100);
	// setTime 로딩이벤트때문에 부여

	// 백그라운드 컬러
	$article.filter(':odd').css({
		backgroundColor: '#A389BD',
	});

	// 로고 클릭시 스크롤 탑
	$('.logo').on('click', function (evt) {
		goTopFn();
		evt.preventDefault();
	});

	goTopFn();

	// 메뉴 이벤트
	for (let i = 0; i < $mnu.length; i++) {
		arrTopVal[i] = $('article').eq(i).offset().top;
	}

	$mnu.on('click', function (evt) {
		nowIdx = $mnu.index(this);

		$('html, body').stop().animate(
			{
				scrollTop: arrTopVal[nowIdx],
			},
			'easeInOutCubic'
		);

		evt.preventDefault();
	});

	// 메뉴 스크롤, 활성화 이벤트
	$(window).on('scroll', function () {
		let scrollTop = $(this).scrollTop();

		// 상단 메뉴 고정, 메뉴 활성화
		for (let i = 0; i <= $mnu.length; i++) {
			if (scrollTop >= arrTopVal[i] - 80) {
				$('header>nav').addClass('h-fixed');
				$('.logo').addClass('h-fixed');
				$mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
			} else if (scrollTop < arrTopVal[0] - 80) {
				$('header>nav').removeClass('h-fixed');
			}

			if (scrollTop < arrTopVal[0] - 80) {
				$mnu.parent().removeClass('on');
			}
		}

		// 별 효과
		if (scrollTop > arrTopVal[0] - 80) {
			$('.star>img').animate(
				{
					'margin-left': 210,
				},
				500,
				'easeInOutBounce'
			);
		}

		// 다음 작업물 강조 효과
		if (scrollTop > arrTopVal[0] + 200) {
			$('.next-skill').animate(
				{
					'margin-left': -240,
				},
				1000,
				'easeInOutCubic'
			);
		}

		// 그래프 차오르는 효과
		if (scrollTop > arrTopVal[1] - 80) {
			$('.graph').show();
			$('.grph1>span').css({
				animation: 'grph1 2s',
				'background-color': '#4c3d5b',
				color: 'rgba(225,225,225,1)',
			});
			$('.grph2>span').css({
				animation: 'grph2 2s',
				'background-color': '#4c3d5b',
				color: 'rgba(225,225,225,1)',
			});
			$('.grph3>span').css({
				animation: 'grph3 2s',
				'background-color': '#4c3d5b',
				color: 'rgba(225,225,225,1)',
			});
			$('.grph4>span').css({
				animation: 'grph4 2s',
				'background-color': '#4c3d5b',
				color: 'rgba(225,225,225,1)',
			});
		}
	});

	// 마우스엔터, 마우스리브 이미지 변경 효과
	$('.cont0>img').on('mouseenter', function () {
		$(this).attr('src', './images/about-change.png');
	});
	$('.cont0>img').on('mouseleave', function () {
		$(this).attr('src', './images/about.png');
	});
	
	// 모바일 버전 이벤트
	$('.mobile>a').on('click', function (evt) {
		evt.preventDefault();

		$('.ver-pop-wrap').stop().fadeIn();
	});

	$('.ver-pop-close').on('click', function (evt) {
		evt.preventDefault();

		$('.ver-pop-wrap').stop().fadeOut();
	});

	// popup 이벤트
	$('.close-pop').on('click',function(evt){
		evt.preventDefault();

		$('.popup-wrap').stop().fadeOut();
		$('.pop-cont').stop().hide();
	});

	$('.slide1 .detail').on('click',function(evt){
		evt.preventDefault();

		$('.popup-wrap').stop().fadeIn();
		$('.popup>.p-cont1').stop().fadeIn();
	});

	$('.slide2 .detail').on('click',function(evt){
		evt.preventDefault();

		$('.popup-wrap').stop().fadeIn();
		$('.popup>.p-cont2').stop().fadeIn();
	});

	$('.slide3 .detail').on('click',function(evt){
		evt.preventDefault();

		$('.popup-wrap').stop().fadeIn();
		$('.popup>.p-cont3').stop().fadeIn();
	});

	$('.slide4 .detail').on('click',function(evt){
		evt.preventDefault();

		$('.popup-wrap').stop().fadeIn();
		$('.popup>.p-cont4').stop().fadeIn();
	});

	$('.slide4 .view-cont').on('click',function(evt){
		evt.preventDefault();

		$('.popup-wrap').stop().fadeIn();
		$('.popup>.p-cont4-2').stop().fadeIn();
	});

	// 갤러리 팝업
	$('.g_p_close').on('click',function(evt){
		evt.preventDefault();

		$('.g_pop_wrap').stop().fadeOut();
		$('.g_pop_cont').stop().hide();
	});

	$('.gallery .pht1').on('click',function(evt){
		evt.preventDefault();

		$('.g_pop_wrap').stop().fadeIn();
		$('.g_pop>.g_p_1').stop().fadeIn();
	});

	$('.gallery .pht2').on('click',function(evt){
		evt.preventDefault();

		$('.g_pop_wrap').stop().fadeIn();
		$('.g_pop>.g_p_2').stop().fadeIn();
	});

	$('.gallery .pht3').on('click',function(evt){
		evt.preventDefault();

		$('.g_pop_wrap').stop().fadeIn();
		$('.g_pop>.g_p_3').stop().fadeIn();
	});




	// 모바일 버전 변환 시
	let width_size = window.outerWidth;

	// small size
	if (width_size == 320){
		$('article>h2').css({
			'font-size':15
		});
		
		$('article h3').css({
			'font-size':14
		});

		$('	section > .cont0 > .Profile').css({
			left: '15%',
			width: '70%'
		});

		$('.swiper-slide > div.view').css({
			top: '78%'
		});

		$('.swiper-slide > div.view > a').css({
			height: '30px',
			'line-height': '30px',
			'font-size': 14
		});

		$('.letter>p').css({
			'font-size': 12
		});

		$('.swiper-slide>div>.minus_small').remove();

		$('section > .cont4 > .famous_saying').css({
			bottom: 20
		});
	}

	// all
	if (width_size <= 768) {
		$('.slide1').css({
			'background-image': "url(./images/nateon-m.png)"
		});
		$('.slide2').css({
			'background-image': "url(./images/miero-m.png)"
		});
		$('.slide3').css({
			'background-image': "url(./images/philips-m.png)"
		});
		$('.slide4').css({
			'background-image': "url(./images/uiux-m.png)"
		});

		$('.swiper-slide>div>.minus').remove();

		$('.ver').remove();
		$('<p>모바일 버전입니다 :)</p>').appendTo('.letter3');
		
		$('.mobile>a').on('click', function (evt) {
			evt.preventDefault();

			$('.ver-pop-wrap').stop().hide();
			alert('모바일 버전입니다 :)');
		});
	}

	// ipad
	if (width_size == 768){

		$('	section > .cont0 > p.star').css({
			left: '14%',
		});

		$('	section > .cont0 > img.me').css({
			left: '30%',
			width: '40%'
		});

		$('	section > .cont0 > .Profile').css({
			left: '35%'
		});

		$('section > .cont1 > .skill').css({
			left: '25%',
			width: '50%'
		});

		$('	section > .cont0 > p.star > img').css({
			width: '80%'
		});

		$('.swiper-slide > div.view > a').css({
			width: '22%'
		});

		$('.swiper-slide > div.view > a:nth-child(1)').css({
			'margin-left': '25%'
		});

		$('section > .cont3 > ul > li > a > .frame > p.img').css({
			left: '40%',
			width: '20%'
		});

		$('	section > .cont3 > ul > li > a > div.letter2').css({
			top: '51%'
		});

		$('	section > .cont3 > ul > li > a > div.letter3').css({
			top: '88%'
		});

		$('section > .cont4 > .gallery').css({
			height: '60%'
		});

		$('	section > .cont4 > .gallery > li').css({
			'background-position': 'center center'
		});
	}
});
