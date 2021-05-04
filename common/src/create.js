var indexCurrentWidth;


// 공통으로 생성하는 요소

var create = {
    control: function control() {
        // control_bar 아이콘 추가
        var elem = '';
        // 인덱스
        elem += '<span class="controlPanel control_index" title="목차"></span>';

        // 게이지
        if (gaugePositionBol) elem += '<div class="controlGauge gaugeWrap gaugeTop nonTab"><div class="gaugeBar positionTop"></div></div>';
        else elem += '<div class="controlGauge gaugeWrap gaugeInner nonTab"><div class="gaugeBar positionInner"></div></div>';

        // 비디오 동작
        elem += '<div class="control_vod nonTab" title="">';
        elem += '<span class="controlPanel control_play" title="재생 버튼"></span>';
        elem += '<span class="controlPanel control_pause" title="일시정지 버튼"></span>';
        elem += '<span class="controlPanel control_replay" title="되감기 버튼"></span>';
        elem += '<div class="controlPanel control_volume" title="볼륨 켜기, 끄기"></div>';
        // TODO 풀스크린 기능
        elem += '<div class="controlPanel control_fullScreen" title="전체화면 켜기, 끄기"></div>';
        elem += '</div>';

        // 비디오 시간
        elem += '<div class="time nonTab">';
        elem += '   <span class="now" title="현재 재생 시간">00 : 00</span>';
        elem += '   <span class="end" title="전체 재생 시간">00 : 00</span>';
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

        vod.src = vodPath + textSet.set(courseChasi) + '_' + textSet.set(coursePage) + '.' + object;

        // 학습목표 페이지
        if (curPage == guidePage) vod.src = '../media/guide' + '.' + object;

        if (curPage == quizPage) {
            vod.src = '../media/quiz_' + textSet.set(quizInfo.length) + '.' + object;
        }

        if (curPage == orgPage) vod.src = '../media/organize' + '.' + object;
        if (curPage == pageTotal) vod.src = '../media/outro_' + courseChasi + '.' + object;

        vod.addEventListener('ended', function () {
            if (playIconToggleBol) $('.control_vod .control_pause').hide();
            if (playIconToggleBol) $('.control_vod .control_play').show();
        });

        vod.addEventListener('error', function () {
            this.src = '../media/error.mp4';
            throw "No video on this page.";
        });

        // 미디어 재생 가능
        vod.addEventListener('canplay', function () {
            vod.addEventListener('timeupdate', mCtrl.update);

            var durationM = textSet.set(Math.floor(vod.duration / 60));
            var durationS = textSet.set(Math.floor(vod.duration % 60));

            $('.time .end').text(durationM + ' : ' + durationS);

            // 기본 볼륨
            volumeLevel = getCookie('volumeLevel') === null ? 0.5 : Number(getCookie('volumeLevel'));
            $('video, audio').prop('volume', volumeLevel);
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

    msg: function () {
        var modalWrap = document.createElement('div');
        modalWrap.id = "modalWrap";
        modalWrap.className = 'nonTab fadeBox';

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
    },

    index: function () {
        var elem = document.createElement('div');
        elem.id = 'indexWrap';

        var elemStr = '';
        elemStr += '<div id="indexWrap" class="fadeBox">';
        elemStr += '<div id="indexPosition">';

        // 차시명 추가(ref:common.js, 없을 시 생성하지 않음)
        if (chasiName[curChasi - 1] !== undefined) {
            elemStr += '<div id="indexChasiName" style="border-bottom: 1px solid ' + indexActiveBorderColor + ';">';
            elemStr += '<h3 style="color:' + indexActiveTextColor + '">' + indexChasiBullet + chasiName[curChasi - 1] + '</h3>';
            elemStr += '</div>';
        }
        
        // TODO
        // 페이지 번호를 받아와서 이동하는 것, 마우스 올렸을 때 호버 되는 것, 액티브 활성화하는 것

        // 인덱스 목차 생성
        for (var i = 0; i < indexInfo.length; i++) {
            // 타이틀 생성
            elemStr += '<div class="indexSiblingWrap sibling_' + textSet.set(i + 1) + '">'
            elemStr += '<span class="indexTitle move" data-page-num=' + indexInfo[i].pageNum + '>' + indexTitleBullet + indexInfo[i].title + '</span>';

            // 서브 타이틀 있을 경우 생성
            if (indexInfo[i].subTitle) {
                elemStr += '<div class="indexSubTitleWrap">';
                for (var j = 0; j < indexInfo[i].subTitle.length; j++) {
                    elemStr += '<span class="indexSubTitle indexSubTitle_' + textSet.set(j + 1) + ' move" data-page-num=' + indexInfo[i].subTitle[j].pageNum + '>' + indexSubTitleWrapBullet + indexInfo[i].subTitle[j].subTitleName + '</span>';
                }
                elemStr += '</div>';
            } 
            elemStr += '</div>'
        }

        elemStr += '</div>';
        elemStr += '</div>';
        
        // 인덱스 콘텐츠에 추가
        $('#content').append(elemStr);

        // 타이틀 active 추가
        $('.indexTitle').each(function () {
            if (Number($(this).attr('data-page-num')) === curPage) $(this).addClass('active');
        });
        // 서브 타이틀 active 추가
        $('.indexSubTitle').each(function () {
            if (Number($(this).attr('data-page-num')) === curPage) {
                $(this).addClass('active');
                $(this).parent().prev().addClass('active');
            }
        });

        // 인덱스 animate를 위한 left 값 저장
        indexCurrentWidth = Number($('#indexPosition').css('width').replace(/\D/g, ''));
        
        // 인덱스 생성 후 하이드
        $('#indexWrap').hide();

    },

    volume: function () {
        var elem = '';

        if (NewVolumeBol) {
    
            elem += '<div class="volume_gaugeWrap nonTab">';
            elem += '   <span class="volume_gauge transY nonTab">';
            elem += '      <span class="volume_nowGauge nonTab"></span>';
            elem += '      <span class="volume_dragBall nonTab"></span>';
            elem += '   </span>';
            elem += '   <div class="volumePanel_wrap">';
            elem += '       <span class="controlPanel volume_mute">mute</span>';
            elem += '       <span class="controlPanel volume_close"></span>';
            elem += '   </div>';
            elem += '</div>';
    
            $('#control').append(elem);
        } else {
            elem += '';
        }
    },

    soundContainer: function () {
        var elem = '';

        elem = '<div id="soundContainer"></div>';
        $('#page').append(elem);
    }
};

