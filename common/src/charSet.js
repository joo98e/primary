
// 한자 
var hanja = new RegExp(/[一-龥]|六/gi);
// [一 - 龥]" 범위는 유니코드의 "CJK Unified Ideographs" 범위(4e00 ~ 9fff)의 일부(4e00 ~ 9fa5)
// '六'의 경우는 유니코드의 "CJK Compatibility ideographs" 범위(f900 ~faff)에 해당하는 글자
// 추가로 발견되는 한자들은 정규식에 추가해야함.

// ['치환전', '치환후']
var charReplaceListUp = [
    ['★', '<span style="font-weight:bold">'],
    ['☆', '</span>'],
    ['◆', ''],
    ['◇', ''],
];

var textSet = {
    // 두 자리의 숫자로
    set: function (num) {
        var a = Number(num);
        if (isNaN(a)) {
            return visual.msgToggle('ERROR', '숫자가 아닙니다.');
        }
        return a < 10 ? String('0' + a) : String(a);
    },

    // 특정 문자 및 한자 치환
    substitutionChar: function (target) {
        try {
            // 특정 문자
            for (var i = 0; i < charReplaceListUp.length; i++) {
                target = target.replace(charReplaceListUp[i][0], charReplaceListUp[i][1]);
            }
    
            // 한자
            if (target.match(hanja)) {
                // 태그 열림
                var tagArrFirst = '<span style="display:inline; font-family:auto;">';
                // 태그 내용
                var char = String(target.match(hanja)).replace(/,/g, '');
                // 태그 닫힘
                var tagArrLast = '</span>';
                // 한자 위치
                var charLength = Number(char.length);
                var beforeIndexOf = target.indexOf(char[0]);
                // 태그 취합
                char = tagArrFirst + char + tagArrLast;
                // 치환
                target = target.substring(0, beforeIndexOf) + char + target.substring(beforeIndexOf + charLength);
            }
            
            return target;
        } catch (error) {
            visual.msgToggle('ERROR', error);
        }
    },

    spaning: function (data, cls) {
        var before = '<span class="' + cls + '">';
        var after = '</span>';
        return before + data + after;
    }
}
