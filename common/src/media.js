var isMovingVolume = false;
var isMovingVod = false;
var volumePoint = Number;

var mCtrl = {

    playToggle: function () {
        $('#ready').hide();
        
        if (vod.ended) return;
        
        if (vod.paused) {
            vod.play();
            if (playIconToggleBol) $('.control_vod .control_pause').show();
            if (playIconToggleBol) $('.control_vod .control_play').hide();
        } else {
            vod.pause();
            if (playIconToggleBol) $('.control_vod .control_pause').hide();
            if (playIconToggleBol) $('.control_vod .control_play').show();
        }

    },

    replay: function () {
        vod.currentTime = 0;
        vod.play();
    },

    // 시간 단위로 함수 실행
    update: function (event) {
        // ready 하이드
        $('#ready').hide();

        // 시간 삽입(현재)
        var currentM = textSet.set(Math.floor(vod.currentTime / 60));
        var currentS = textSet.set(Math.floor(vod.currentTime % 60));

        $('.time .now').text(currentM + ' : ' + currentS);

        // gauge width 값 조절
        mCtrl.gaugeMove(event);

        // 학습목표 페이지 등장 씬
        if (curPage == guidePage) guide.appear();

        // 퀴즈 페이지 등장 씬
        if (curPage == quizPage) quiz.appear();

        // 정리하기 페이지 등장 씬
        if (curPage == orgPage) org.appear();

    },

    gaugeMove: function (event) {

        if (event.type == 'click') {

            // 클릭할 지점 재생
            var _thisPosition = this.getBoundingClientRect();
            var _parentVal = window.getComputedStyle(document.getElementsByClassName('controlGauge')[0]);
            var point = Number(event.clientX - Number(_thisPosition.left));
            var movePoint = Number;

            // 재생 비율
            var percent = point / Number(_parentVal.getPropertyValue('width').replace(/\D/g, ''));

            movePoint = vod.duration * percent;
            vod.currentTime = movePoint;
            vod.play();
            // 클릭시에는 바로 가게 하기
            $('.gaugeBar').css('width', movePoint)

        }
        
        var widthVal = vod.currentTime / vod.duration * 100 + '%';
        
        $('.gaugeBar').css({
            'width': widthVal,
            'transition': '0.3s',
            'transition-timing-function' : 'linear',
        });
        
    },

    volumeControl: function (event) {

        var _thisPosition = this.getBoundingClientRect();
        var _parentVal = window.getComputedStyle(document.getElementsByClassName('volume_gauge')[0]);
        var point;

        // ------------------------------------------------------ mute
        if (event.target.className.indexOf('mute') != -1) {
            volumePoint = 0;
            $('video, audio').prop('volume', volumePoint);
        }

        // ------------------------------------------------------ 닫기
        else if (event.target.className.indexOf('close') != -1) {
            visual.volumeAnimate();
        }
            
        // ------------------------------------------------------ 드래그
        else if (event.type == 'mousedown') {
            isMovingVolume = true;

            point = Number(event.clientX - Number(_thisPosition.left));
            volumePoint = point / Number(_parentVal.getPropertyValue('width').replace(/\D/g, ''));
        }
        else if (isMovingVolume && event.type == 'mousemove') {

            point = Number(event.clientX - Number(_thisPosition.left));
            volumePoint = point / Number(_parentVal.getPropertyValue('width').replace(/\D/g, ''));
        }
            
        else if (event.type == 'mouseup' || event.type == 'mouseleave') {
            isMovingVolume = false;
        }


        // ------------------------------------------------------ 결과
        if (volumePoint > 1) volumePoint = 1;
        if (volumePoint < 0) volumePoint = 0;
        $('.volume_nowGauge').css('width', (volumePoint * 100) + '%');
        $('video, audio').prop('volume', volumePoint);
    }
};

// gaugeMove
// if (event.type == 'mousedown') {
//     moveFlag = true;
//     console.log('down');


// }

// if (event.type == 'mouseup') {
//     moveFlag = false;
//     console.log('mouseUp');

//     if (!moveFlag) {
//         // 클릭할 지점 재생
//         var _thisPosition = this.getBoundingClientRect();
//         var _parentVal = window.getComputedStyle(document.getElementsByClassName('controlGauge')[0]);
//         var point = Number(event.clientX - Number(_thisPosition.left));
//         var movePoint = Number;

//         // 재생 비율
//         var percent = point / Number(_parentVal.getPropertyValue('width').replace(/\D/g, ''));

//         movePoint = vod.duration * percent;
//         vod.currentTime = movePoint;
//         vod.play();
//         // 클릭시에는 바로 가게 하기
//         $('.gaugeBar').css('width', movePoint)
//     }
// }

// if (event.type == 'mousemove') {
//     console.log('mouseMove');
// }

// var widthVal = vod.currentTime / vod.duration * 100 + '%';

// $('.gaugeBar').css({
//     'width': widthVal,
//     'transition': '0.3s',
//     'transition-timing-function': 'linear',
// });