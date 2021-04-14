
// ['치환전', '치환후']
var orgReplaceListUp = [
    ['★', '<span style="font-weight:bold">'],
    ['☆', '</span>'],
    ['◆', ''],
    ['◇', ''],
];
// 들여쓸 단위(px)
var orgParagraphLevel = 20;
// 불릿 사용 여부(true 이미지 / false 문자형)
var orgBulletBoolean = false;
// 단계별 이미지 불릿
var orgBulletSrc = [
    '../common/img/org/bullet_01.png',
    '../common/img/org/bullet_02.png',
    '../common/img/org/bullet_03.png',
];
// 단계별 문자형 불릿
var orgBulletChar = [
    // 숫자 사용 여부, 뒤에 올 문자열
    [true, '. '],
    [false, '- '],
    [true, '· '],
];
// 한자 감지
var hanja = new RegExp(/[一-龥]/gi);


var org = {
    create: function () {
        // 최상단
        var elemArr = '<div id="orgTextWrap">';
        var organizeWrap = document.createElement('div');
        organizeWrap.id = "organizeWrap";

        // 페이지만큼 반복
        for (var i = 0; i < orgInfo.length; i++) {
            // 페이지의 정리하기 데이터만큼 반복
            for (var j = 0; j < orgInfo[i].length; j++) {
                var resultArr;
                // 불릿 생성 및 특정 문자 치환
                for (var l = 0; l < orgReplaceListUp.length; l++) {
                    // 특정 문자 치환
                    orgInfo[i][j][1] = orgInfo[i][j][1].replace(orgReplaceListUp[l][0], orgReplaceListUp[l][1]);
                }

                // 한자 치환
                if (orgInfo[i][j][1].match(hanja)) {
                    // 태그 속성
                    var tagArrFirst = '<span style="display:inline; font-family:auto;">';
                    // 태그 내용
                    var char = String(orgInfo[i][j][1].match(hanja)).replaceAll(',', '');
                    // 태그 마침
                    var tagArrLast = '</span>';
                    // 한자 위치를 파악하기 위함
                    var charLength = Number(char.length);
                    var beforeIndexOf = orgInfo[i][j][1].indexOf(char[0]);
                    // 태그 취합
                    char = tagArrFirst + char + tagArrLast;
                    // 치환
                    orgInfo[i][j][1] = orgInfo[i][j][1].substring(0, beforeIndexOf) + char + orgInfo[i][j][1].substring(beforeIndexOf + charLength)
                }
                
                if (orgBulletBoolean) {
                    // 이미지형 불릿 추가
                    console.log(orgInfo[i][j][1]);
                    resultArr = '<img class="bulletImg bullet_' + numSet.set(orgInfo[i][j][0]) +  '" src="' + orgBulletSrc[(orgInfo[i][j][0]) - 1] + '" alt="정리하기 ' + (j + 1) + '번 내용" />' + orgInfo[i][j][1];
                } else {
                    // 문자형 불릿 추가
                    if(orgBulletChar[(orgInfo[i][j][0]) - 1][0]) { // 숫자 사용 여부
                        resultArr = '<h4 class="bulletText bullet_' + numSet.set(orgInfo[i][j][0]) + '">' + (j + 1) + orgBulletChar[(orgInfo[i][j][0]) - 1][1] + '</h4>' + orgInfo[i][j][1];
                    }else{
                        resultArr = orgBulletChar[(orgInfo[i][j][0]) - 1][1] + orgInfo[i][j][1];
                    }
                    
                }

                // 결과값 문자열 담기
                elemArr += '<span class="orgInfo orgInfo_' + numSet.set(i + 1) + '_' + numSet.set(j + 1) + '">' + resultArr + '</span>' + '\n'
                
            }
        }
        elemArr += '</div>'
        organizeWrap.innerHTML = elemArr;
        document.getElementById('page').appendChild(organizeWrap);
        
    },

    // 등장 씬
    appear: function () {
        if(vod.currentTime >= vod.duration - 3){
            $('#orgTextWrap').fadeIn();
        }
    }
}