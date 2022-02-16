$(document).ready(function () {

	function modal() {
		//모달 열기 클릭 이벤트
		$('.open_pop').on('click', function (e) {
			e.preventDefault();
			$('.wrap').addClass('not_scroll');

			//모달 닫기를 클릭한 경우 보내질 포커스를 변수에 저장
			var $tg = $(this);
			var $modalCnt = $($(this).attr('href'));//#modal1 => $('#modal1')
			var $closeBtn = $modalCnt.find('.close_btn ');
			//1) 마스크만 동적생성
			$(this).after('<div id="mask"></div>');
			//2) 열려진 브라우저 가운데 모달이 위치하도록 좌표지정
			$(window).on('resize', function () {
				var topPos = ($(this).height() - $modalCnt.outerHeight()) / 2;
				var leftPos = ($(this).width() - $modalCnt.outerWidth()) / 2;
				console.log(leftPos)
				$modalCnt.css({ top: topPos, left: leftPos });
			});
			$(window).trigger('resize');
			var $mask = $('#mask');
			$mask.add($modalCnt).stop().fadeIn('fast');
			$closeBtn.on('click', function () {
				$('.wrap').removeClass('not_scroll');
				$mask.add($modalCnt).stop().fadeOut('fast', function () {
					$mask.remove();
					$tg.focus();
				});
			});
			$mask.on('click', function () {
				$closeBtn.click();
			});
		});
	}
	modal();



$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	showMonthAfterYear: true,
	yearSuffix: '년'
});

$(function () {
	$("#datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6, #datepicker7, #datepicker8").datepicker();
});




