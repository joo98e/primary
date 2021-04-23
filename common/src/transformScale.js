// Scale
// 스케 - 0 일이 1 이면 원래값

// 1 보다 작으면 작아짐

// w_h = window height
// w_w = window_width

// 켜져있는 브라우저 창값이 1500 * 800
// 콘텐츠 사이즈 = 1000 * 650

// 1500 / 1000 = 1.5

// 800 / 0.8

window.addEventListener('load', function () {
    try {
        if (location.href.split('.html')[0].substr(location.href.length - 10, 5).indexOf('index') === -1) {
            top.document.title = courseTitle;
            parent.document.querySelector('#Content').style.width = courseWidth + 'px';
            parent.document.querySelector('#Content').style.height = courseHeight + 'px';
        } else {
            document.title = courseTitle;
        }

    } catch (error) {
        console.log(error);
    }

    
    try {
        // 감싸는 영역 사이즈 조절

        for (var cnt = 0; cnt < wrapArr.length; cnt++) { 
            document.querySelector(wrapArr[cnt]).style.width = courseWidth + 'px';
            document.querySelector(wrapArr[cnt]).style.height = courseHeight + 'px';
        }

    } catch (error) {
        
    }
    
});


/**
    2017. 03. 10
    stroy21
    FunnsySky 
    funnysky@story21.co.kr
    UI View 
**/

var w_h;
var w_w;
var container_scale = 1;
var dev = true;// true 개발중 //false 검수
var mobileReadyFlag = false;//모바일 재생 확인
var samsung_Browser_4;
var deviceMobile;
var device_Android_4;
var device_iPhone;
var samsung_Browser_4;



/** resizing **/
$(window).resize(function (e) {
    M_chage();
    responsive();
});

/** 모바일 화면 돌릴때 **/
$(window).on("orientationchange", function (event) {

    M_chage();
    if (isMobilePlatform()) {
        responsive();
    }
});

/** 페이지 초기화 **/
function initialize() {
    if (isMobilePlatform()) {
        responsive();
        movileAlertView();
        M_chage();
    }
    else {
        responsive();
    }
    $('#fs-index').attr('showing', false)
    if (!dev) {//개발 아닐때 
        $("body").attr("oncontextmenu", "return false");
        $("body").attr("ondragstart", "return false");
        $("body").attr("onselectstart", "return false");
    }

    /** menu **/
    setIndex();

    /** bottom **/
    setBottom();

    /** top **/
    setTop();

    /** 효과음 장착 **/
    writeEffectAudio();

}
//반응형 scale 조정
function responsive() {


    if (window.matchMedia('(orientation: portrait)').matches) {
        // Portrait 모드일 때 실행할 스크립트
        // 폭과 높이가 같으면 Portrait 모드로 인식돼요
        console.log('세로')
    } else {
        // Landscape 모드일 때 실행할 스크립트
        console.log('가로')
    }

    // return;
    w_h = $(window).height();
    w_w = $(window).width();

    // if(isMobilePlatform()) {
    // 	if(checkMobile() != "ios") {
    // 		//안드로이드
    // 		w_h = top.document.body.clientHeight;
    // 		w_w = top.document.body.clientWidth;
    // 		$("#wrap").height("100%");
    // 		$("#wrap").width("100%");
    // 	} else {		
    // 		//아이폰	
    // 		w_h = parent.document.body.clientHeight;
    // 		w_w = parent.document.body.clientWidth;

    // 		$("#wrap").height("720px");
    // 		$("#wrap").width("1280px");			
    // 	}
    // } else {
    // 	w_h = parent.document.body.clientHeight;
    // 	w_w = parent.document.body.clientWidth;
    // 	$("#wrap").height("720px");
    // 	$("#wrap").width("1280px");
    // }

    if (w_w < 1280 || w_h < 720) {
        console.log("aaaa")
        if (deviceMobile) {
            //alert(deviceMobile);
            var h_scale = w_h / 720;
            //550
        } else {
            // alert(33)
            var h_scale = w_h / 720;
            //600
        }

        var w_scale = w_w / 1280;
        if (h_scale > w_scale) {//w 기준
            container_scale = w_scale;
        } else {//h 기준
            container_scale = h_scale;
        }
    }
    else {
        if (fullTemp == 1) {
            console.log("bbbb")
            if (deviceMobile) {
                //alert(deviceMobile);
                var h_scale = w_h / 720;
                //550
            } else {
                // alert(33)
                var h_scale = w_h / 720;
                //600
            }

            var w_scale = w_w / 1280;
            if (h_scale > w_scale) {//w 기준
                container_scale = w_scale;
            } else {//h 기준
                container_scale = h_scale;
            }
        }
        else {
            console.log("cccc")
            container_scale = 1;
        }
    }
    if (device_Android_4) {//안드로이드 버전 4 일때
        //alert("안드로이드 버전 4 -webkit-transform")
        $("#fs-container").css("-webkit-transform", 'scale(' + container_scale + ',' + container_scale + ')')
        // $("#fs-container").css("-webkit-transform-origin", '50%')
    } else {//그외 기기들
        $("#fs-container").css("transform", 'scale(' + container_scale + ',' + container_scale + ')')
        // $("#fs-container").css("transform-origin",'50%')
        $('#fs-container').css('left', "50%");
        $('#fs-container').css('top', "50%");
    }
    //console.log($("#wrap").height() - 650 + h_scale);
    $('#fs-container').css('margin-top', container_scale * -360);
    $('#fs-container').css('margin-left', container_scale * -640);
    // $("#fs-container").css("margin-top",($("#wrap").height() - 720 + h_scale)/2+ 'px')
}

//모바일 화면 가로 세로 체크 
function M_chage() {
    //	if(window.orientation == 0 ){//세로
    //		//alert("세로");
    //		$("#mobile_ready img").attr("src","../common/css/img/m_horizontal.png")
    //		$("#mobile_ready").show();
    //		setPause();
    //		$("#mobile_ready").off("click");
    //	}else{//가로
    //alert("가로")
    if (!mobileReadyFlag) {
        $("#mobile_ready img").attr("src", "../common/css/img/m_ready.png");
        $("#mobile_ready").show();
    } else {
        $("#mobile_ready").hide();
    }
    $("#mobile_ready").on("click", function () {
        $(this).hide();
        setPlay();
        mobileReadyFlag = true;
    });
    //	}
}

/*//모바일 view
function movileAlertView() {
    var m_view = '';
    m_view += '<div id="mobile_ready" style="z-index:999;width:100%;height:100%;position:fixed;left:0;top:0;text-align:center;background-color:#fff;display:none;">';
    m_view += '	<img style="position:absolute;left:50%;top:50%;margin-left:-160px;margin-top:-61.5px">';
    m_view += '	<p style="text-align: center; font-size: 27px; position:absolute;left:50%;top:50%;margin-left:-213px;margin-top:50.5px; font-weight: bold;">모바일에서 학습하고 계십니다.<br>스타트버튼을 눌러 학습을 시작하세요.</p>';
    m_view += '</div>';
    $("#wrap").append(m_view);

}*/

//모바일 view
function movileAlertView() {
    var m_view = '';
    m_view += '<div id="mobile_ready" style="z-index:999;width:100%;height:100%;position:fixed;left:0;top:0;text-align:center;background-color:rgba(255, 255, 255, 0.8);display:none;">';
    // m_view += '	<img style="position:absolute;left:50%;top:50%;margin-left:-160px;margin-top:-61.5px">';
    m_view += '	<p style="text-align: center; font-size: 38px; position:absolute;left:50%;top:50%;margin-left:-285px;margin-top:-25.5px; font-weight: bold;">화면을 터치하시면 학습이 시작됩니다.</p>';
    m_view += '</div>';
    $("#wrap").append(m_view);

}

function isMobilePlatform() {
    //return true;
    if (navigator.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null
        || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
        return true;
    }
    else {
        return false;
    }
}

function MobileCheck() {
    //alert('화면접속'+navigator.userAgent); 
    //return true;
    deviceMobile = true;
    device_Android_4 = false;
    device_iPhone = false;
    samsung_Browser_4 = false;
    if (/Android/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /Mobile/i.test(navigator.userAgent)) {
        //mobile 
        //alert('mobile 접속'); 
        if (/SamsungBrowser\/4.0/i.test(navigator.userAgent)) {
            //alert("삼성내장브라우저 버전 4.0")
            alert("배속을 지원하지 않는 브라우저 입니다. ")
            samsung_Browser_4 = true;
        }
        if (/Android 4./i.test(navigator.userAgent)) {
            //alert("안드로이드 버전 4.")
            device_Android_4 = true;
            // 안드로이드 4
        } else {
            device_Android_4 = false;
            device_iPhone = false;
            if (/iPhone/i.test(navigator.userAgent)) {
                device_iPhone = true;
            }
            //alert("안드로이드4.버전이 아닌")
            // 그 외 디바이스
        }
        //return true;
    } else {
        //pc 
        deviceMobile = false;
        //return false;
    }
}
