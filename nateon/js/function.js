$(function () {
	// PC
	const $service = $('.nateon-service>ul>li');
	const $container = $('.slides-container>.cont');
	const $nateon = $('.nateon-container>li');
	let nowIdx = 0;

	// 페이드 함수
	fadeFn = function () {
		$service.eq(0).fadeOut(4000);
		$service.eq(1).fadeIn(4000);
		$service.eq(1).fadeOut(4000);
		$service.eq(0).fadeIn(4000);
	};

	// 자동 페이드 배너
	setInterval(function () {
		fadeFn();
	}, 8000);

	fadeFn();

	// 페이드 슬라이드

	// 이전버튼 이벤트
	$('.slides-container>.prev>a').on('click', function (evt) {
		$container.eq(nowIdx).stop().fadeOut();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 3;
		}

		$container.eq(nowIdx).stop().fadeIn();

		evt.preventDefault();
	});

	// 다음버튼 이벤트
	$('.slides-container>.next>a').on('click', function (evt) {
		$container.eq(nowIdx).stop().fadeOut();

		if (nowIdx < 3) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		$container.eq(nowIdx).stop().fadeIn();

		evt.preventDefault();
	});

	// 페이드 슬라이드2
	$('.nateon>.prev>a').on('click', function (evt) {
		$nateon.eq(nowIdx).stop().fadeOut();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 2;
		}

		$nateon.eq(nowIdx).stop().fadeIn();

		evt.preventDefault();
	});

	$('.nateon>.next>a').on('click', function (evt) {
		$nateon.eq(nowIdx).stop().fadeOut();

		if (nowIdx < 2) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		$nateon.eq(nowIdx).stop().fadeIn();

		evt.preventDefault();
	});

	// mobile

	// 메뉴 버튼 이벤트
	$('.more>a').on('click', function (evt) {
		$('header>.sub').show();
		$('.close').show();
		evt.preventDefault();
	});

	$('.menu>a').on('click', function (evt) {
		$('header>nav').show();
		$('.close').show();
		evt.preventDefault();
	});

	$('.close').on('click', function (evt) {
		$('header>.sub').hide();
		$('header>nav').hide();
		$('.close').hide();
	});

	// 아이패드 이미지 크기 맞추기
	let width_size = window.outerWidth;

	if (width_size == 768) {
		$('.gif').css({
			left: '28%',
			top: '50%',
			width: '20%'
		});
	}
});
