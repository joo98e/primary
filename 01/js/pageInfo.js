
// 페이지별 정보
var pageInfo = new Array();

// 페이지 종료 시점[현재 페이지]
pageInfo[0] = [
    // 이벤트 여부
    // 0 : normal, 1 : event
    '0',
    // 페이지 미디어 여부 none, mp3, mp4 
    'mp4',
];

pageInfo[1] = ['0', 'mp4', '', ];
pageInfo[2] = ['0', 'mp3', '', ];
pageInfo[3] = ['0', 'mp4', '', ];
pageInfo[4] = ['0', 'mp4', '', ];
pageInfo[5] = ['0', 'mp4', '', ];
pageInfo[6] = ['0', 'mp4', '', ];
pageInfo[7] = ['1', 'mp4', '', ];
pageInfo[8] = ['0', 'mp4', '', ];

// 전체 페이지 수 (pageInfo 개수만큼)
var pageTotal = Number(pageInfo.length - 1);
var guidePage = 2;
var quizPage = pageTotal - 2;
var orgPage = pageTotal - 1;

