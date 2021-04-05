// media : m
var indexState = false;

var mCtrl = {

    playToggle: function () {
        $('#ready').hide();
        
        if (vod.ended) return;
        
        if (vod.paused) {
            vod.play();
            if (playIconToggle) $('.control_vod .control_pause').show();
            if (playIconToggle) $('.control_vod .control_play').hide();
        } else {
            vod.pause();
            if (playIconToggle) $('.control_vod .control_pause').hide();
            if (playIconToggle) $('.control_vod .control_play').show();
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
        var currentM = numSet.set(Math.floor(vod.currentTime / 60));
        var currentS = numSet.set(Math.floor(vod.currentTime % 60));

        $('.time .now').text(currentM + ' : ' + currentS);

        // gauge width 값 조절
        mCtrl.gaugeMove(event);

        // 학습목표 페이지
        if (curPage == guidePage) guide.appear();

        // 퀴즈 페이지
        if (curPage == quizPage) quiz.appear();

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

        } 

        var widthVal = vod.currentTime / vod.duration * 100 + '%';
        $('.gaugeBar').css('width', widthVal);
        
    },
};