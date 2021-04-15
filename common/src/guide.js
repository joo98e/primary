var guide = {
    create: function () {
        // 가이드
        var guideArea = document.createElement('div');
        guideArea.className = 'guideArea';
        guideArea.title = '콘텐츠 학습 목표 영역';

        // 탑 영역
        var guideTopArea = document.createElement('div');
        guideTopArea.className = 'guideTopArea';
        // 바텀 영역
        var guideBottomArea = document.createElement('div');
        guideBottomArea.className = 'guideBottomArea';
        var guideTopVerticalWrap = document.createElement('div');
        guideTopVerticalWrap.className = 'VerticalWrap transY';
        var guideBottomVerticalWrap = document.createElement('div');
        guideBottomVerticalWrap.className = 'VerticalWrap transY';

        for (var cnt = 0; cnt < guideInfo.top.length; cnt++) {
            var guideTopTextWrap = document.createElement('div');
            guideTopTextWrap.className = 'textWrap';
            var guideBottomTextWrap = document.createElement('div');
            guideBottomTextWrap.className = 'textWrap';

            // 탑 불릿
            var guideTopBullet = document.createElement('img');
            guideTopBullet.className = 'bullet';
            guideTopBullet.src = srcPath + 'img/guide/guideTop_' + textSet.set(cnt + 1) + '.png';
            guideTopBullet.alt = (cnt + 1) + '번 ';
            // 바텀 불릿
            var guideBottomBullet = document.createElement('img');
            guideBottomBullet.className = 'bullet';
            guideBottomBullet.src = srcPath + 'img/guide/guideBottom_' + textSet.set(cnt + 1) + '.png';
            guideBottomBullet.alt = (cnt + 1) + '번 ';

            // 탑 텍스트
            var guideTopText = document.createElement('span');
            guideTopText.innerText = guideInfo.top[cnt];
            // 바텀 텍스트
            var guideBottomText = document.createElement('span');
            guideBottomText.innerText = guideInfo.bottom[cnt];

            guideTopTextWrap.appendChild(guideTopBullet);
            guideTopTextWrap.appendChild(guideTopText);
            guideTopVerticalWrap.appendChild(guideTopTextWrap);
            guideTopArea.appendChild(guideTopVerticalWrap);
            guideBottomTextWrap.appendChild(guideBottomBullet);
            guideBottomTextWrap.appendChild(guideBottomText);
            guideBottomVerticalWrap.appendChild(guideBottomTextWrap);
            guideBottomArea.appendChild(guideBottomVerticalWrap);
        }

        // 결과
        guideArea.appendChild(guideTopArea);
        guideArea.appendChild(guideBottomArea);
        document.getElementById('page').appendChild(guideArea);
    },

    // 등장 씬
    appear: function () {
        // fadeIn 시점
        if (vod.currentTime >= 2) {
            $('.guideTopArea').fadeIn();
        } else {
            $('.guideTopArea').hide();
        }

        if (vod.currentTime >= 5) {
            $('.guideBottomArea').fadeIn();
        } else {
            $('.guideBottomArea').hide();
        }
    }
}