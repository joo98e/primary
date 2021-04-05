
// 공통으로 생성하는 요소

var create = {
    control: function control() {
        // control_bar 아이콘 추가
        var elem = '';
        // 인덱스
        elem += '<span class="controlPanel control_index nonTab"></span>';

        // 게이지
        // 컨트롤바 위에 있을 경우 true
        var gaugeposition = true;
        if (gaugeposition) elem += '<div class="controlGauge gaugeWrap gaugeTop nonTab"><div class="gaugeBar positionTop"></div></div>';
        else elem += '<div class="controlGauge gaugeWrap gaugeInner nonTab"><div class="gaugeBar positionInner"></div></div>';

        // 비디오 동작
        elem += '<div class="control_vod nonTab" title="">';
        elem += '<span class="controlPanel control_play" title="재생 버튼"></span>';
        elem += '<span class="controlPanel control_pause" title="일시정지 버튼"></span>';
        elem += '<span class="controlPanel control_replay" title="되감기 버튼"></span>';
        elem += '</div>';
        
        // 비디오 시간
        elem += '<div class="time nonTab">';
        elem += '<span class="now" title="현재 재생 시간">00 : 00</span>';
        elem += '<span class="end" title="전체 재생 시간"></span>';
        elem += '</div>';

        // 페이징
        elem += '<div class="control_paging nonTab">';
        elem += '<span class="controlPanel control_prev" title="이전 페이지 버튼"></span>';
        elem += '<span class="controlPanel control_currentP" title="현재 페이지"></span>';
        elem += '<span class="controlPanel control_pageDivision nonTab">/</span>';
        elem += '<span class="controlPanel control_totalP" title="전체 페이지"></span>';
        elem += '<span class="controlPanel control_next" title="다음 페이지 버튼"></span>';
        elem += '</div>';

        // 컨트롤 아이콘 추가
        document.getElementById('control').innerHTML = elem;
    },
    
    media: function media(object) {
        
        // 미디어 정하기
        if (object == 'mp4') {
            var media = '<video id="media" autoplay playsinline webkitplaysinline oncontextmenu="return false" onselectstart="return false" ondragstart="return false" title="콘텐츠 영상"></video>'
        } else { 
            var media = '<audio id="media" autoplay playsinline webkitplaysinline oncontextmenu="return false" onselectstart="return false" ondragstart="return false" title="콘텐츠 음성"></audio>'
        }
        // 미디어 추가
        document.getElementById('page').innerHTML = media;

        // 미디어 변수 및 이벤트 할당
        vod = document.getElementById('media');

        vod.src = vodPath + numSet.set(courseChasi) + '_' + numSet.set(coursePage) + '.' + object;

        // 학습목표 페이지
        if (curPage == guidePage) vod.src = '../media/guide' + '.' + object;

        if (curPage == quizPage) { 
            vod.src = '../media/quiz_' + numSet.set(quizInfo.length) + '.' + object;
        }
        
        if (curPage == orgPage) vod.src = '../media/organize' + '.' + object;
        if (curPage == pageTotal) vod.src = '../media/outro_' + courseChasi + '.' + object; 
        
        vod.addEventListener('ended', function () {
            if (playIconToggle) $('.control_vod .control_pause').hide();
            if (playIconToggle) $('.control_vod .control_play').show();
        });

        vod.addEventListener('error', function () {
            this.src = '../media/error.mp4';
            throw "No video on this page"
        });

        // 미디어 재생 가능
        vod.addEventListener('canplay', function () {
            vod.addEventListener('timeupdate', mCtrl.update);

            var durationM = numSet.set(Math.floor(vod.duration / 60));
            var durationS = numSet.set(Math.floor(vod.duration % 60));

            $('.time .end').text(durationM + ' : ' + durationS);
        });

    },

    top: function top() { 
        // 로고와 차시 생성
        var logoSrc = srcPath + 'img/top/course_logo.png';
        var chasiSrc = srcPath + 'img/top/chasi_' + courseChasi + '.png';

        var target = $('#head');

        var elem = '';
        elem += '<img class="top_logo" src="' + logoSrc + '" alt="과정 로고">';
        elem += '<img class="top_chasi" src="' + chasiSrc + '" alt="' + chasiName[curChasi - 1] + '">';
        target.html(elem);
    },

    
    fadeBox: function () {
        var elem = document.createElement('div');
        elem.id = 'onlyModal';
        document.getElementById('content').appendChild(elem);
    },

    msgCreate: function () {
        try {
            var modalWrap = document.createElement('div');
            modalWrap.id = "modalWrap nonTab";

            var elem = '';
            elem += '<div id="modalAlert" class="translate">';
            elem += '   <div class="modal-header">';
            elem += '       <h5></h5>';
            elem += '   </div>';
            elem += '   <div class="modal-body">';
            elem += '       <h6></h6>';
            elem += '   </div>';
            elem += '</div>';
    
            modalWrap.innerHTML = elem;
            document.getElementById('content').appendChild(modalWrap);

        } catch (error) {
            console.error();
        }
    },

    indexCreate: function () {
        var elem = document.createElement('div');
        var elemStr = '';
        elemStr += '<div id="indexWrap">';
        elemStr += '    ';
        elemStr += '</div>';
    }
};