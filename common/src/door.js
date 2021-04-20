

var numSet = {
    set: function set(num) {
        return num < 10 ? '0' + num : String(num);
    }
}

var c = {
    view: function view(num) {
        console.log(num)
        window.open(numSet.set(num) + '/index.html', "_blank", "width=1280px height=720px");
    }
}

var getBrowser = function () {
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        return "ie";
    }

    if (agent.indexOf("chrome") != -1) {
        return "chrome";
    }

    if (agent.indexOf("safari") != -1) {
        return "safari";
    }

    if (agent.indexOf("firefox") != -1) {
        return "firefox";
    }

}

var deviceStateIsMobile = function () {
    if (navigator.userAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null
        || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
        return true;
    }
    else {
        return false;
    }
}

// 생성자
var add = {
    // 타이틀 생성
    title: function title() {
        var str = docData.company;
        var str_2 = courseData.title;

        document.getElementsByClassName('company_title')[0].innerText = str;
        document.getElementsByClassName('company_title')[1].innerText = str_2;
    },
    // 목차 생성
    index: function index() {

        var _itemElem = '<article>\n';
        // _itemElem += '<p class="head">\n' + courseData.title + '</p>';
        _itemElem += '<ul class="items">\n';
        // 차시명 개수만큼 li 생성
        for (var cnt = 0; cnt < courseData.countName.length; cnt++) {
            _itemElem += '<li>\n';
            _itemElem += '<span>' + numSet.set(cnt + 1) + '</span>\n';
            _itemElem += '<span>' + courseData.countName[cnt] + '</span>\n';
            if (courseData.active[cnt] == 1) {
                if (getBrowser() == 'chrome') _itemElem += '<span><a class="undeco neon" onclick="c.view(' + (cnt + 1) + ')">보기' + '</a></span>\n';
                else _itemElem += '<span><a class="undeco neon2" onclick="c.view(' + (cnt + 1) + ')">보기' + '</a></span>\n';
            } else {
                _itemElem += '<span>보기</span>\n';
            }
            _itemElem += '</li>\n';
        }

        _itemElem += '</ul>\n';
        _itemElem += '</article>\n';

        $('#content_01').html(_itemElem);
    },

}



// theme
if (theme == 1) {
    document.write('<link rel="stylesheet" type="text/css" href="./common/css/door.css">');
} else {
    document.write('<link rel="stylesheet" type="text/css" href="./common/css/door_white.css">');
}


window.addEventListener('load', function () {
    document.title = docData.dotTitle;


    // title 삽입 
    add.title();
    add.index();

});


