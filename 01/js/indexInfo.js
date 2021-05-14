// 목차 정보────────────────────────────────────────────────────────────────
// indexInfo                        : 목차 정보
// indexInfo.title                  : 목차 상위 제목
// indexInfo.pageNum                : 목차 상위 제목 클릭시 이동될 페이지
// indexInfo.subTitle               : 목차 하위 
// indexInfo.subTitle.subTitleName  : 목차 하위 제목
// indexInfo.subTitle.pageNum       : 목차 하위 제목 클릭시 이동될 페이지
// ─────────────────────────────────────────────────────────────────────────

var indexInfo = [
    {
        title: '인트로',
        pageNum : 1,
    },
    {
        title: '학습목표',
        pageNum: 2
    },
    {
        title: '학습하기',
        pageNum: 3,
        subTitle: [
            {
                subTitleName: '학습하기 1',
                pageNum: 3
            },
            {
                subTitleName: '학습하기 2',
                pageNum: 4
            },
            {
                subTitleName: '학습하기 3',
                pageNum: 5
            },
        ]
    },
    {
        title: '퀴즈',
        pageNum: 6
    },
    {
        title: '정리하기',
        pageNum: 7
    },
    {
        title: '아웃트로',
        pageNum: 8
    },

];