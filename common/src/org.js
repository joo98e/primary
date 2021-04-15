// 이미지용 객체
var imageArr = new Image();

// 들여쓸 단위(px)
var orgParagraphLevel = 20;

// 제목 불릿
var orgMainBullet = {
    // 불릿 사용 여부(true 이미지 / false 문자형 / null 없음)
    use: 'image',
    src: '../common/img/org/bullet_main.png'
}
// 세부 내용 단계별 이미지 불릿
var orgSubBullet = {
    // 불릿 사용 여부(true 이미지 / false 문자형 / null 없음)
    use: 'char',
    src: [
        '../common/img/org/bullet_01.png',
        '../common/img/org/bullet_02.png',
        '../common/img/org/bullet_03.png',
    ]
}

// 단계별 문자형 불릿
var orgBulletChar = [
    // 숫자 사용 여부, 뒤에 올 문자열
    [true, '. '],
    [false, '- '],
    [true, '· '],
];

var org = {
    create: function () {
        // 최상단
        var elemArr = '<div id="orgTextWrap">';
        var organizeWrap = document.createElement('div');
        organizeWrap.id = "organizeWrap";

        // 페이지만큼 반복
        for (var i = 0; i < orgInfo.length; i++) {

            // 페이지의 정리하기 단락만큼 반복
            for (var j = 0; j < orgInfo[i].length; j++) {

                elemArr += '<ul class="orgInfo_' + textSet.set(j + 1) + '">';

                // 메인 제목 생성
                if (orgMainBullet.use.toLowerCase() === 'image') {
                    // 이미지
                    imageArr.className = 'bullet mainBullet';
                    imageArr.src = orgMainBullet.src;
                    elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + imageArr.outerHTML + '<span>' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
                } else if (!orgMainBullet.use.toLowerCase() === 'char') {
                    // 문자(숫자 등)
                    elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' +  + '<span>' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
                } else if (orgMainBullet.use === null) {
                    // 사용하지 않음
                    elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + '<span>' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
                } else {
                    visual.msgToggle('ERROR', '불릿 정보를 수정해주세요.<br/>' + 'orgMainBullet use : ' + orgMainBullet.use);
                    return;
                }

                // 세부 내용 있을 경우
                if (orgInfo[i][j].contents !== undefined) {
                    var target = orgInfo[i][j].contents;
                    for (var k = 0; k < target.length; k++) {

                        // 내용
                        if (orgSubBullet.use.toLowerCase() === 'image') {
                            // 이미지
                            imageArr.className = 'subBullet';
                            imageArr.src = orgSubBullet.src[target[k].level];

                            elemArr += '<li class="orgContent orgContent_' + textSet.set(k + 1) + '">' + imageArr.outerHTML + '<span>' + textSet.substitutionChar(target[k].content) + '</span></li>'
                        } else if (orgSubBullet.use.toLowerCase() === 'char') {
                            // 문자(숫자 등)

                        } else if (orgSubBullet.use === null) {
                            // 사용하지 않음
                            elemArr += '<li class="orgContent orgContent_' + textSet.set(k + 1) + '"><span>' + textSet.substitutionChar(target[k].content) + '</span></li>'
                        } else {
                            visual.msgToggle('ERROR', '불릿 정보를 수정해주세요.<br/>' + 'orgSubBullet.use : ' + orgSubBullet.use);
                            return;
                        }
                    }
                }

                elemArr += '</ul>';
            }
        }

        elemArr += '</div>'
        organizeWrap.innerHTML = elemArr;
        document.getElementById('page').appendChild(organizeWrap);
        console.log(elemArr)

    },

    // 등장 씬
    appear: function () {
        if (vod.currentTime >= vod.duration - 3) {
            $('#orgTextWrap').fadeIn();
        }
    },

}

// // 치환 전 문자열
                // beforeArr = orgInfo[i][j];
                // // 치환 후 문자열
                // afterArr;

                // // 특정 문자 및 한자 치환
                // beforeArr[1] = textSet.substitutionChar(beforeArr[1]);

                // if (orgBulletBoolean) {
                //     // 이미지형 불릿 추가
                //     afterArr = '<img class="bulletImg bullet_' + textSet.set(beforeArr[0]) + '" src="' + orgBulletSrc[(beforeArr[0]) - 1] + '" alt="정리하기 ' + (j + 1) + '번 내용" />' + beforeArr[1];
                // } else {
                //     // 문자형 불릿 추가
                //     if (orgBulletChar[(beforeArr[0]) - 1][0]) { // 숫자 사용 여부
                //         afterArr = '<h4 class="bulletText bullet_' + textSet.set(beforeArr[0]) + '">' + (j + 1) + orgBulletChar[(beforeArr[0]) - 1][1] + '</h4>' + beforeArr[1];
                //     } else {
                //         afterArr = orgBulletChar[(beforeArr[0]) - 1][1] + beforeArr[1];
                //     }
                // }

                // // 결과값 문자열 담기
                // elemArr += '<span class="orgInfo orgInfo_' + textSet.set(i + 1) + '_' + textSet.set(j + 1) + '" style="margin-left:' + (orgInfo[i][j][0] * orgParagraphLevel) + 'px">' + afterArr + '</span>' + '\n'