// 이미지용 객체
var imageArr = new Image();

// 페이지 넘김 방법(slide, ShowHide) ──────────────────────────────────────────── 
// 1 : slide
// 2 : ShowHide
// 3 : Fade
var pagingTech = 1;

// 페이지 넘버링 처리(true / 페이징 있음, false / 페이징 없음(버튼만)) ───────────
var pagingNumbering = true;
// 현재 정리 페이지
var orgCurPage = Number;
orgCurPage = 1;

// 들여쓸 단위(px) ──────────────────────────────────────────────────────────────
var orgParagraphLevel = 20;

// 제목 불릿 ────────────────────────────────────────────────────────────────────
var orgMainBullet = {
    // 'image' : 이미지 / 'char' : 문자형 / null 없음
    use: 'char',
    src: '../common/img/org/bullet_main.png',
    char: {
        // 숫자 사용 여부, 숫자 뒤에 올 문자열
        number: true,
        bullet: '.'
    }
}
// 세부 내용 단계별 이미지 불릿 ──────────────────────────────────────────────────
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
            '· ',
            '- ',
            '* ',
            '=> ',
            ' * ',
            ' ** ',
        ]
    }
}
// 프린트 ───────────────────────────────────────────────────────────────────────
var printSettings = {
    logo: true,
    chasiName: true,
    background: {
        use: true,
        src: '',
        color: ''
    },
    fontFamily: '',

}



var org = {
    // 정리하기 컨텐츠 생성 ─────────────────────────────────────────────────────
    create: function () {
        // 최상위
        var elemArr = '<div id="orgTextWrap">';
        var organizeContainer = document.createElement('div');
        organizeContainer.id = "organizeContainer";

        elemArr += '<div class="orgEqList">';
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
                        console.log(textSet.substitutionChar(orgInfo[i][j].title));
                        elemArr += '<li class="orgTitle orgTitle_' + textSet.set(i + 1) + '">' + textSet.spanning(String((j + 1)).concat(orgMainBullet.char.bullet), 'mainBullet') + '<span> ' + textSet.substitutionChar(orgInfo[i][j].title) + '</span></li>';
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

            elemArr += '    </div>';

        }

        elemArr += '    </div>'
        elemArr += '</div>'
        // 페이징 처리───────────────────────────────────────────────────────
        elemArr += '<div class="org_pagingContainer transX noSelect">';
        elemArr += '    <ul>';
        elemArr += '        <li class="org_moveBtn org_pasing_prev"></li>';
        if (pagingNumbering) {
            elemArr += '        <li class="orgPage">';
            elemArr += '            <span class="orgCurPage"></span>';
            elemArr += '            <span class="orgBoundary">/</span>';
            elemArr += '            <span class="orgTotalPage"></span>';
            elemArr += '        </li>';
        }
        elemArr += '        <li class="org_moveBtn org_pasing_next"></li>';
        elemArr += '    </ul>';
        elemArr += '</div>';
        // ────────────────────────────────────────────────────────────────── 
        organizeContainer.innerHTML = elemArr;

        document.getElementById('page').appendChild(organizeContainer);

        org.event();
        org.pagingTechPlate();
    },

    // 정리하기 등장 씬 ─────────────────────────────────────────────────────
    appear: function () {
        if (vod.currentTime >= vod.duration - 3 && !$('#orgTextWrap').is(':visible')) {
            $('#orgTextWrap').fadeIn();
            $('.org_pagingContainer').fadeIn();
        }
    },

    event: function () {
        // 초기 페이지 삽입
        $('.orgCurPage').text(orgCurPage);
        $('.orgTotalPage').text(orgInfo.length);

        // TODO 페이지 이동 변경 버튼 클릭
        $('.org_pasing_prev').on('click', org.pageMove);
        $('.org_pasing_next').on('click', org.pageMove);
    },

    pageMove: function () {
        var state = $(this).attr('class').indexOf('next') === -1 ? true : false;
        if (state) {
            // 이전
            org.pageAnimation($('.orgEq_' + textSet.set(orgCurPage)), $('.orgEq_' + textSet.set(orgCurPage - 1)), state);
        } else {
            // 다음
            org.pageAnimation($('.orgEq_' + textSet.set(orgCurPage)), $('.orgEq_' + textSet.set(orgCurPage + 1)), state);
        }
    },

    pageAnimation: function (cur, will, state) {
        // ──────────────────────────────────────────────────────────────────
        // pagingTech        : 페이지 애니메이션 타입
        // cur               : 현재 페이지
        // will              : 보여질 페이지
        // state             : true 이전 페이지로 / false 다음 페이지로
        // ──────────────────────────────────────────────────────────────────

        if ($('.orgEqList').is(':animated')) return;

        if (state) {
            // 이전
            if (orgCurPage === 1) {
                visual.msgToggle('정리하기', '첫 페이지입니다.');
                return;
            }
            orgCurPage--;
        } else {
            // 다음
            if (orgCurPage === orgInfo.length) {
                visual.msgToggle('정리하기', '마지막 페이지입니다.');
                return;
            }
            orgCurPage++;
        }

        $('.orgCurPage').text(orgCurPage);

        // ────────────────────────────────────────────────────────────────── Slide
        if (pagingTech === 1) {
            $('.orgEqList').animate({
                'left': -(100 * (orgCurPage - 1)) + '%'
            });
        }
        // ────────────────────────────────────────────────────────────────── Show and Hide
        else if (pagingTech === 2) {
            will.siblings().hide();
            will.show();
        }
        // ────────────────────────────────────────────────────────────────── Fade
        else if (pagingTech === 3) {
            will.siblings().hide();
            will.fadeIn();
        }

        soundEffect('click');
    },

    pagingTechPlate: function () {
        // ┌───────────────────────────────────────────┐
        //     페이지 이동 애니메이션에 따라 CSS 조정
        // └───────────────────────────────────────────┘
        switch (pagingTech) {
            case 1:
                // ────────────────────────────────────────────────────────────────── Slide
                $('#orgTextWrap')
                $('.orgEq').css({
                    'position': 'absolute',
                    'display': 'block',
                    'width': '100%',
                    'height': '100%',
                    'transition': '1s',
                });

                $('.orgEq').each(function (idx, elem) {
                    $(this).css('left', (idx * 100) + '%');
                });

                break;

            case 2:
                // ────────────────────────────────────────────────────────────────── Show and Hide

                break;

            case 3:
                // ────────────────────────────────────────────────────────────────── Fade

                break;
        }
    },

    printCreate: function () {
        // ┌──────────────────────────────────────────────────────────────────┐
        //   TODO print 안의 세팅을 이용해서 수정하기                          
        // └──────────────────────────────────────────────────────────────────┘
        var printContain = document.getElementsByClassName('orgEqList')[0];
        var printWindow = window.open("", "_blank", "width=600, height=800");

        // printWindow.$('.orgEq').css({
        //     'position': 'relative',
        //     'display': 'block',
        //     'width': '210mm',
        //     'height': '297mm',
        // });
        printWindow.document.$('.orgEq').css('background', '#000000')
        printWindow.document.write(
            '<!DOCTYPE html>' +
            '<html lang="KO">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<link href="../common/css/print.css" rel="stylesheet" data-original-title="프린트 전용">' +
            '<script language="javascript" src="../common/src/Library/jquery-1.12.3.js" data-original-title="프린트 라이브러리"></script>' +
            // '<script language="javascript" src="../common/src/Library/jquery.PrintArea.js" data-original-title="프린트 라이브러리"></script>' +
            '<title>' + chasiName[courseChasi - 1] + '</title>' +
            '</head>' +
            '<body>' +
            printContain.innerHTML +
            '</body>' +
            '</html>'
        );
    },
}
