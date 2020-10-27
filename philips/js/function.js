$(function () {
	const $customer = $('.sub>.customer-service>a');
	const $health = $('.sub>.health-light>a');
	const $myphilips = $('.sub>.myphilips>a');
	let nowIdx = 0;

	// sub 메뉴
	$customer.on('click', function (evt) {
		$(this).addClass('on');
		$health.removeClass('on');
		$('.sub>.customer-service>ul').addClass('on');
		$('.sub>.health-light>ul').removeClass('on');
		$('.sub>.myphilips>ul').removeClass('on');

		evt.preventDefault();
	});

	$health.on('click', function (evt) {
		$(this).addClass('on');
		$customer.removeClass('on');
		$('.sub>.health-light>ul').addClass('on');
		$('.sub>.customer-service>ul').removeClass('on');
		$('.sub>.myphilips>ul').removeClass('on');

		evt.preventDefault();
	});

	$myphilips.on('click', function (evt) {
		$customer.removeClass('on');
		$health.removeClass('on');
		$('.sub>.myphilips>ul').addClass('on');
		$('.sub>.health-light>ul').removeClass('on');
		$('.sub>.customer-service>ul').removeClass('on');

		evt.preventDefault();
	});

	// gnb 메뉴
	$('.gnb>li').on('mouseover', function () {
		$('.gnb>li').find('ol').hide();
		$(this).find('ol').stop().fadeIn();
	});

	$('.gnb>li').on('mouseout', function () {
		$('.gnb>li').find('ol').stop().fadeOut();
	});

	// 자동 재생
	setInterval(function () {
		// nowIdx = $('.pagination>li>a').index(this);

		if (nowIdx == 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}

		$('.pagination>li>a').eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$('.slides-container')
			.stop()
			.animate({ left: -100 * nowIdx + '%' },600);
	}, 3000);

	// 인디케이터
	$('.pagination>li>a').on('click', function (evt) {
		nowIdx = $('.pagination>li>a').index(this);

		$(this).parent().addClass('on').siblings().removeClass('on');

		$('.slides-container')
			.stop()
			.animate({ left: -100 * nowIdx + '%' }, 400);

		evt.preventDefault();
	});
});
