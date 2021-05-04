// 기본 정보
var courseChasi = String;
var coursePage = String;

courseChasi = location.href.split('.html')[0].substr(location.href.length - 10, 5).split('/')[0];
coursePage = location.href.split('.html')[0].substr(location.href.length - 10, 5).split('/')[1];

var curChasi = Number(courseChasi);
var curPage = Number(coursePage);


// 콘텐츠 내부 자체 진도 체크 적용 여부
var progress = false;

// 웹 접근성 사용 여부(본 개발물 외에 추가되는 구조에는 작성할 때 alt, title 등 함께 작성 필요함)
var webAccessibility = false;

// 차시명 읽는 것, 컨트롤바 버튼 관련해서 접근성 텍스트 읽는 것

// 차시명 입력 필요(인덱스, 차시 이미지 타이틀 등)
var chasiName = [
    '1. 온라인 수업을 말하다.',
];

// 과정명
var courseTitle = "primary";

// 과정 사이즈
var courseWidth = 1280;
var courseHeight = 720;

// 사이즈 조절 필요한 곳 / courseWidth, courseHeight 적용됨
var wrapArr = [
    '#wrap',
    '#ready',
    '#media',
    '#page',
    '#quizContainer',
    '#organizeContainer',
    '.guideContainer',
];

// 인덱스 불릿 기호
var indexChasiBullet = '';
var indexTitleBullet = ' · ';
var indexSubTitleWrapBullet = ' - ';
// 인덱스 액티브시 색상
var indexActiveBorderColor = '#98f2bb';
var indexActiveTextColor = '#98f2bb';


// 컨트롤바 위에 게이지바
var gaugePositionBol = true;
// 재생 일시정지  토글 여부
var playIconToggleBol = false;
// 볼륨 조절 모양
var NewVolumeBol = true;
var volumeGetStyleLeft;
var contentScale = 1;
// 미디어
var vod;

// 기본 common 경로
var srcPath = '../common/';

// 미디어 경로
var vodPath = '../media/'

// CSS 경로, js 파일 경로 추가
var srcInfo = [
    // 스크립트 로드 문제로 페이지에서 직접 연결
    // {   
    //     tagName: 'script',
    //     src: './js/pageInfo.js',
    //     attribute: [
    //         ['type', 'text/javascript'],
    //         ['data-original-title', '차시 페이지 정보 스크립트'],
    //     ]
    // },
    {
        condition: quizPage,
        tagName: 'script',
        src: './js/quizInfo.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '퀴즈 정보 스크립트'],
        ]
    },
    {
        condition: orgPage,
        tagName: 'script',
        src: './js/orgInfo.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '정리 정보 스크립트'],
        ]
    },
    {
        tagName: 'script',
        src: './js/indexInfo.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '목차 정보 스크립트'],
        ]
    },
    {
        condition: guidePage,
        tagName: 'script',
        src: './js/guideInfo.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '학습목표 정보 스크립트'],
        ]
    },
    {
        tagName: 'link',
        src: srcPath + 'css/layout.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '전반적 콘텐츠 관련'],
        ],
    },
    {
        tagName: 'link',
        src: srcPath + 'css/index.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '인덱스 관련'],
        ],
    },
    {
        tagName: 'link',
        src: srcPath + 'css/control.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '콘텐츠 제어 버튼 스타일 시트'],
        ],
    },
    {
        tagName: 'link',
        src: srcPath + 'css/top.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '콘텐츠 차시명, 로고 등 영역의 스타일 시트'],
        ],
    },
    {
        tagName: 'link',
        src: srcPath + 'css/guide.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '학습목표 페이지 스타일 시트'],
        ],
    },
    {
        condition: quizPage,
        tagName: 'link',
        src: srcPath + 'css/quiz.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '퀴즈 페이지 스타일 시트'],
        ],
    },
    {
        condition: orgPage,
        tagName: 'link',
        src: srcPath + 'css/org.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '정리하기 페이지 스타일 시트'],
        ],
    },
    {
        tagName: 'link',
        src: srcPath + 'css/init.css',
        attribute: [
            ['rel', 'stylesheet'],
            ['data-original-title', '초기화 스타일 시트'],
        ],
    },
    {
        tagName: 'script',
        src: srcPath + 'src/Library/jquery-1.12.3.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', 'Jquery 연동 스크립트'],
        ]
    },
    {
        tagName: 'script',
        src: srcPath + 'src/Library/jquery-ui.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', 'Jquery UI 스크립트'],
        ]
    },
    // {
    //     tagName: 'script',
    //     src: srcPath + 'src/Library/jquery-fullscreen-min.js',
    //     attribute: [
    //         ['type', 'text/javascript'],
    //         ['data-original-title', 'Jquery FullScreen 스크립트'],
    //     ]
    // },
    {
        tagName: 'script',
        src: srcPath + 'src/transformScale.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '모바일 크기 조절 스크립트'],
        ]
    },

    {
        tagName: 'script',
        src: srcPath + 'src/charSet.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '문자 치환 함수 스크립트'],
        ]
    },
    {
        tagName: 'script',
        src: srcPath + 'src/create.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '공통 생성 함수 스크립트'],
        ]
    },
    {
        tagName: 'script',
        src: srcPath + 'src/visual.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '화면 관련 함수 스크립트'],
        ]
    },
    {
        tagName: 'script',
        src: srcPath + 'src/media.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '비디오, 오디오 등 관련 함수 스크립트'],
        ]
    },
    {
        condition: guidePage,
        tagName: 'script',
        src: srcPath + 'src/guide.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '학습목표 관련 스크립트'],
        ]
    },
    {
        condition: quizPage,
        tagName: 'script',
        src: srcPath + 'src/quiz.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '퀴즈 관련 스크립트'],
        ]
    },
    {
        condition: orgPage,
        tagName: 'script',
        src: srcPath + 'src/org.js',
        attribute: [
            ['type', 'text/javascript'],
            ['data-original-title', '정리하기 관련 스크립트'],
        ]
    },
];


// CSS, JS 태그
for (var cnt = 0; cnt < srcInfo.length; cnt++) {

    var elem = document.createElement(srcInfo[cnt].tagName);

    if (srcInfo[cnt].src.indexOf('js') != -1) elem.src = srcInfo[cnt].src;
    else if (srcInfo[cnt].src.indexOf('css') != -1) elem.href = srcInfo[cnt].src;

    // rel, type 등 속성 부여
    if (srcInfo[cnt].attribute !== undefined) {
        for (var i = 0; i < srcInfo[cnt].attribute.length; i++) {
            var attr = srcInfo[cnt].attribute[i][0];
            var value = srcInfo[cnt].attribute[i][1];
            elem.setAttribute(attr, value);
        }
    }

    // 연동
    if (srcInfo[cnt].condition !== undefined) {
        if (curPage == srcInfo[cnt].condition) {
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
    } else {
        document.getElementsByTagName('head')[0].appendChild(elem);
    }
}

function devStart() {
    $(document).on('click', function (e) {
        console.log(e.target);
    });
}

function setCookie(cookieName, cookieValue) {
    var cookieText = escape(cookieName) + '=' + escape(cookieValue);
    document.cookie = cookieText;
}

function getCookie(cookieName) {
    var cookieValue = null;
    if (document.cookie) {
        var array = document.cookie.split((escape(cookieName) + '='));
        if (array.length >= 2) {
            var arraySub = array[1].split(';');
            cookieValue = unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

function deleteCookie(cookieName) {
    var temp = getCookie(cookieName);
    if (temp) {
        setCookie(cookieName, temp);
    }
}

// ====================================================== 로드 후 메인 함수 실행
window.addEventListener('load', function () {

    console.log(document.readyState);

    // 로딩 후
    $('.loader').hide();
    $('#wrap').show();

    // 스크롤바
    // $('body').mCustomScrollbar();

    // 인덱스
    create.index();

    // 컨트롤바
    create.control();

    // 미디어
    create.media(pageInfo[curPage][1]);

    // 탑 이미지
    create.top();

    // 메세지용
    create.msg();

    // 볼륨 팝업
    create.volume();

    // 효과음 컨테이너
    create.soundContainer();

    // 페이지별 이벤트
    if (curPage == guidePage) guide.create();
    if (curPage == quizPage) quiz.create();
    if (curPage == orgPage) org.create();
    
    // ready 사라지기
    document.getElementById('ready').addEventListener('click', mCtrl.playToggle);

    // 컨트롤 패널 이벤트 
    document.getElementsByClassName('control_play')[0].addEventListener('click', mCtrl.playToggle);
    document.getElementsByClassName('control_pause')[0].addEventListener('click', mCtrl.playToggle);
    document.getElementsByClassName('control_replay')[0].addEventListener('click', mCtrl.replay);
    document.getElementsByClassName('controlGauge')[0].addEventListener('click', mCtrl.gaugeMove);
    document.getElementsByClassName('volume_mute')[0].addEventListener('click', mCtrl.volumeControl);
    document.getElementsByClassName('volume_close')[0].addEventListener('click', mCtrl.volumeControl);
    document.getElementsByClassName('control_volume')[0].addEventListener('click', visual.volumeAnimate);
    document.getElementsByClassName('control_prev')[0].addEventListener('click', visual.prevPage);
    document.getElementsByClassName('control_next')[0].addEventListener('click', visual.nextPage);
    document.getElementsByClassName('control_index')[0].addEventListener('click', visual.indexToggle);
    document.getElementsByClassName('control_fullScreen')[0].addEventListener('click', visual.fullScreenToggle);
    
    // 특정 페이지 이동
    visual.indexMove();

    // 볼륨 드래그
    mCtrl.volumeDraggable();

    // 풀스크린
    

    // 페이지 수 삽입
    document.getElementsByClassName('control_currentP')[0].innerText = textSet.set(coursePage);
    document.getElementsByClassName('control_totalP')[0].innerText = textSet.set(pageTotal);

    // fadeBox 
    visual.fade();

    // 이미지 경로 오류
    $("img").on('error', function () {
        visual.msgToggle('이미지 경로가 잘못되었습니다.', 'class : ' + $(this).attr('class') + '<br/>' + 'src : ' + $(this).attr('src'));
        $(this).attr('src', '../common/img/default/error.png');
    });

    // 웹 접근성 사용시
    try {
        if (webAccessibility) {
            // tabIndex
            $("*").each(function (index) {
                $(this).not('.nonTab').attr('tabIndex', index);
            });
            // Enter로 클릭(이미지 태그 등 때문에)
            window.addEventListener('keypress', function (e) {
                if (e.key == 'Enter') document.activeElement.click();
            });

        } else {
            // 웹 접근성 없음
            $("*").each(function (index) {
                $(this).removeAttr('title', '');
            });

        }
    } catch (error) {

    }

});


// ---------------------------------------------------------------
// 효과음 출처
// Thanks to, KevanGC
// From: http://soundbible.com/1645-Pling.html
// Distributor: 저작권 걱정없는 유튜브용 음원 & 무료 효과음 서비스 ‘뮤팟’
// https://www.mewpot.com
// ---------------------------------------------------------------