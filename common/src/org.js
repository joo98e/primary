// 이미지용 객체
var imageArr = new Image();

// 페이지 넘김 방법(slide, fade, ShowHide)
// TODO
var pagingTechnic = 'slide';
var orgCurPage = Number;

// 들여쓸 단위(px)
var orgParagraphLevel = 20;

// 제목 불릿
var orgMainBullet = {
    // 'image' : 이미지 / 'char' : 문자형 / null 없음
    use: 'char',
    src: '../common/img/org/bullet_main.png',
    char: {
        // 숫자 사용 여부, 뒤에 올 문자열
        number: true,
        bullet: '.'
    }
}
// 세부 내용 단계별 이미지 불릿
var orgSubBullet = {
    // 불릿 사용 여부('image' : 이미지 / 'char' : 문자형 / null 없음)
    use: 'char',
    src: [
        '../common/img/org/bullet_01.png',
        '../common/img/org/bullet_02.png',
        '../common/img/org/bullet_03.png',
        '../common/img/org/bullet_04.png'
    ],
    char: {
        // 뒤에 올 문자열
        bullet: [
            '.',
            '-',
            '*',
            '=>',
        ]
    }
}


var org = {
    // ------------------------------------ 정리하기 컨텐츠 생성 
    create: function () {
        // 최상단
        var elemArr = '<div id="orgTextWrap">';
        var organizeWrap = document.createElement('div');
        organizeWrap.id = "organizeWrap";

        // 페이지만큼 반복
        for (var i = 0; i < orgInfo.length; i++) {
            elemArr += '<div class="orgEq orgEq_' + textSet.set(i + 1) + '">';

            // 페이지의 정리하기 단락만큼 반복
            for (var j = 0; j < orgInfo[i].length; j++) {
                elemArr += '<ul class="orgInfo_' + textSet.set(j + 1) + '">';

                // 메인 제목 생성
                if (orgMainBullet.use.toLowerCase() === 'image') {

                    // 이미지
                    imageArr.className = 'bullet mainBullet';
                    imageArr.src = orgMainBullet.src;
                    elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + imageArr.outerHTML + '<span>' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';

                } else if (orgMainBullet.use.toLowerCase() === 'char') {

                    // 문자(숫자 등)
                    if (orgMainBullet.char.number === true) {
                        elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + textSet.spaning(String((j + 1)).concat(orgMainBullet.char.bullet), 'mainBullet') + '<span> ' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
                    } else {
                        elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + orgMainBullet.char.bullet + '<span>' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
                    }

                } else if (orgMainBullet.use === 'null') {
                    // 사용하지 않음
                    elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + '<span>' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
                } else {
                    visual.msgToggle('ERROR', '불릿 정보를 수정해주세요.<br/>' + 'orgMainBullet use : ' + orgMainBullet.use);
                    return;
                }

                // 세부 내용 있을 경우
                if (orgInfo[i][j].contents !== undefined) {
                    // 페이지별 세부 내용
                    var target = orgInfo[i][j].contents;
                    for (var k = 0; k < target.length; k++) {

                        // 내용
                        if (orgSubBullet.use.toLowerCase() === 'image') {

                            // 이미지
                            imageArr.className = 'subBullet';
                            imageArr.src = orgSubBullet.src[target[k].level - 1];
                            elemArr += '<li class="orgContent orgContent_' + textSet.set(k + 1) + '" style="margin-left:' + (target[k].level * orgParagraphLevel) + 'px;">' + imageArr.outerHTML + '<span>' + textSet.substitutionChar(target[k].content) + '</span></li>'

                        } else if (orgSubBullet.use.toLowerCase() === 'char') {
                            elemArr += '<li class="orgContent orgContent_' + textSet.set(k + 1) + '" style="margin-left:' + (target[k].level * orgParagraphLevel) + 'px;">' + orgSubBullet.char.bullet[(target[k].level) - 1] + '<span>' + textSet.substitutionChar(target[k].content) + '</span></li>'

                        } else if (orgSubBullet.use === 'null') {
                            // 사용하지 않음
                            elemArr += '<li class="orgContent orgContent_' + textSet.set(k + 1) + '" style="margin-left:' + (target[k].level * orgParagraphLevel) + 'px;"><span>' + textSet.substitutionChar(target[k].content) + '</span></li>'
                        } else {
                            visual.msgToggle('ERROR', '불릿 정보를 수정해주세요.<br/>' + 'orgSubBullet.use : ' + orgSubBullet.use);
                            return;
                        }
                    }
                }

                elemArr += '</ul>';
            }

            elemArr += '</div>';
        }

        elemArr += '</div>'
        organizeWrap.innerHTML = elemArr;
        document.getElementById('page').appendChild(organizeWrap);
        console.log(elemArr)

    },

    // ------------------------------------ 정리하기 등장 씬
    appear: function () {
        if (vod.currentTime >= vod.duration - 3) {
            $('#orgTextWrap').fadeIn();
        }
    },

}
