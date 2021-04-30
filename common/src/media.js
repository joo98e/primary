// 볼륨
var volumeLevel = Number;
// 오디오 컨테이너
var soundContainer = new Array();

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
            'transition-timing-function': 'linear',
        });

    },

    volumeControl: function (event) {
        // ------------------------------------------------------ mute
        if (event.target.className.indexOf('mute') != -1) {
            volumeLevel = 0;
            $('video, audio').prop('volume', volumeLevel);
            $('.volume_nowGauge').css('width', '0');
            $('.volume_dragBall').css('left', '0');
        }

        // ------------------------------------------------------ 닫기
        else if (event.target.className.indexOf('close') != -1) {
            visual.volumeAnimate();
        }
    },

    volumeDraggable: function () {
        volumeLevel = getCookie('volumeLevel') === null ? 0.5 : volumeLevel = getCookie('volumeLevel');
        $('video, audio').prop('volume', volumeLevel);
        
        if (getCookie('volumeLevel') === null) {
            $('.volume_nowGauge').css('width', '45%');
            $('.volume_dragBall').css('left', '45%');
        } else {
            $('.volume_nowGauge').css('width', 'calc(' + (Number(volumeLevel) * 100) + '%' + ' - 12px)');
            $('.volume_dragBall').css('left', 'calc(' + (Number(volumeLevel) * 100) + '%' + ' - 12px)');
        }
        
        $('.volume_gaugeWrap').draggable({
            scroll: false,
            containment: "#page",
        });

        $('.volume_dragBall').draggable({
            axis: "x",
            scroll: false,
            containment: ".volume_gauge",
            start: function () {

            },
            drag: function () {
                var volumeWidth = Number(window.getComputedStyle(document.getElementsByClassName('volume_dragBall')[0], null).width.split("px")[0]);
                var volumeLeft = Number(window.getComputedStyle(document.getElementsByClassName('volume_dragBall')[0], null).left.split("px")[0]);
                var volumeWrapWidth = Number(window.getComputedStyle(document.getElementsByClassName('volume_gauge')[0], null).width.split("px")[0]) - volumeWidth;
                volumeLevel = (volumeLeft / volumeWrapWidth).toFixed(2);
                $('video, audio').prop('volume', volumeLevel);
                $('.volume_nowGauge').css('width', (volumeLevel * 100) + 'px');
                setCookie('volumeLevel', volumeLevel);
            },
            stop: function () {

            }
        });

    },

    audio: function (a) {
        this.prototype = {
            init: function (fileName) {
                this.path = '../common/sound/';
                this.type = '.mp3';

                this.elem = $('<audio class="sound_' + textSet.set(soundContainer.length + 1) + '"width="0" height="0">Your browser does not support HTML5 video.</audio>');
                this.elem.controls = false;

                $('#soundContainer').append(this.elem);
                soundContainer.push(this.elem);

                var audioElem = document.getElementsByClassName('sound_' + textSet.set(soundContainer.length))[0];

                // 할당
                audioElem.volume = 0.5;
                audioElem.src = this.path + fileName + this.type;
                audioElem.play();

                // 종료
                audioElem.onended = function () {
                    $(this).remove();
                    soundContainer.pop();
                }
            }
        }
    },


};

var soundEffect = function (fileName) {
    fileName = fileName.toLowerCase();
    var effect = new mCtrl.audio();
    effect.prototype.init(fileName);
}