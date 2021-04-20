var btnState = {
    // 시작 버튼 활성화 여부
    start: true,
    // 결과보기 활성화 여부
    result: true
    // 
};
// 퀴즈 시작 여부
var quizStart = false;
// 퀴즈 정답 배열
var answer = new Array(quizInfo.length);
// 선택한 정답 배열
var myAnswer = new Array(quizInfo.length);
// 퀴즈 풀 수 있는 기회
var chance = new Array(quizInfo.length);
// 퀴즈 정답 개수
var count = Number;
count = quizInfo.length;
// 현재 퀴즈 페이지, 0부터 1페이지
var quizCurPage = Number;
quizCurPage = 0;

var quiz = {
    create: function () {
        
        // ------------------------------------ 시작 버튼
        if (btnState.start) {
            var start = new Image();
            start.className = 'btn btn_start translate';
            start.src = srcPath + 'img/quiz/btn_start.png';
            start.alt = '퀴즈 시작 버튼';
            start.addEventListener('click', quiz.start);
            visual.hover(start, '_enable');
        }
        // ------------------------------------ 결과보기 버튼
        if (btnState.result) {
            var result = new Image();
            result.className = 'btn btn_result translate';
            result.src = srcPath + 'img/quiz/btn_result.png';
            result.alt = '결과 보기 버튼';
            result.addEventListener('click', quiz.result);
            visual.hover(result, '_enable');
        }
        // ------------------------------------ 확인 버튼
        var check = new Image();
        check.className = 'btn btn_check translate';
        check.src = srcPath + 'img/quiz/btn_check.png';
        check.alt = '정답 확인 버튼';
        check.addEventListener('click', quiz.check);
        visual.hover(check, '_enable');
        
        // ------------------------------------ 다음 버튼
        var next = new Image();
        next.className = 'btn btn_next translate';
        next.src = srcPath + 'img/quiz/btn_next.png';
        next.alt = '다음 문제 버튼';
        next.addEventListener('click', quiz.next);
        visual.hover(next, '_enable');
        
        // ------------------------------------ 퀴즈 컨테이너
        var quizContainer = document.createElement('div');
        quizContainer.id = 'quizContainer';

        // ------------------------------------ 퀴즈 문제 생성
        for (var i = 0; i < quizInfo.length; i++) {
            var quizEq = document.createElement('div'); // 퀴즈 문제별 컨테이너
            var titleWrap = document.createElement('h2');
            var title = document.createElement('span');
            var titleImg = document.createElement('img');
            var subTitle = document.createElement('h3');
            var choiceBox = document.createElement('ul');

            quizEq.className = 'translate quizEq quizEq' + (i + 1);
            quizEq.setAttribute('title', '퀴즈 ' + (i + 1) + '번 문제');
            titleWrap.className = 'header_quiz quiz_titleWrap nonTab';
            title.className = 'quiz_title'
            subTitle.className = 'header_quiz quiz_subTitle';
            choiceBox.className = 'header_quiz quiz_choiceBox nonTab';

            titleImg.className = 'quiz_titleImg';
            titleImg.src = srcPath + 'img/quiz/q' + (i + 1) + '.png';
            titleImg.alt = (i + 1) + '번 문제';
            
            title.innerHTML = quizInfo[i].title;
            titleWrap.innerHTML = titleImg.outerHTML + title.outerHTML;
            subTitle.innerHTML = quizInfo[i].subTitle;
            
            
            if (quizInfo[i].type === 1) { // ----------------------------------------------- OX 문제
                
                var quizRight = document.createElement('img');
                quizRight.className = 'quizRight';
                quizRight.src = srcPath + 'img/quiz/quizRight.png';

                var quizWrong = document.createElement('img');
                quizWrong.className = 'quizWrong';
                quizWrong.src = srcPath + 'img/quiz/quizWrong.png';

                choiceBox.appendChild(quizRight);
                choiceBox.appendChild(quizWrong);

            } else if (quizInfo[i].type === 2) { // ---------------------------------------- 객관식 문제

                for (var j = 0; j < quizInfo[i].choice.length; j++) {
                    var choice = document.createElement('li');
                    var choiceImg = document.createElement('img');
                    var choiceSpan = document.createElement('span');

                    choice.className = 'choice choice' + (j + 1);
                    choiceImg.className = 'nonTab choiceImg';
                    choiceSpan.className = 'choiceSpan';

                    choiceImg.src = srcPath + 'img/quiz/num' + (j + 1) + '.png';
                    choiceSpan.innerHTML = quizInfo[i].choice[j];
                    choice.innerHTML = choiceImg.outerHTML + choiceSpan.outerHTML;

                    choiceBox.appendChild(choice);
                }

            } else if (quizInfo[i].type === 3) { // ---------------------------------------- 주관식 문제
                


            } else { // ---------------------------------------- 그 외 별도 추가할 문제 유형
                


            }
            
            quizEq.appendChild(titleWrap);
            if (quizInfo[i].subTitle != '' || quizInfo[i].subTitle != undefined) quizEq.appendChild(subTitle);

            quizEq.appendChild(choiceBox);
            quizContainer.appendChild(quizEq);
        }
        
        document.getElementById('page').appendChild(start);
        document.getElementById('page').appendChild(check);
        document.getElementById('page').appendChild(result);
        document.getElementById('page').appendChild(next);
        document.getElementById('page').appendChild(quizContainer);

        quiz.event();
    },

    isType1_create: function () {
        
    },

    isType2_create: function () {
        
    },

    isType3_create: function () {
        
    },
    // ------------------------------------ 퀴즈 시작
    start: function start() {

        $('#quizContainer').fadeIn();
        $('.quizEq:nth-child(1)').fadeIn();

        // 퀴즈 상태
        quizStart = true;
        count = 0;
        quizCurPage = 0;

        // 정답 할당
        for (var i = 0; i < quizInfo.length; i++) {
            answer[i] = quizInfo[i].answer;
            chance = [1, 1, 1];
        }

        // 퀴즈 문제 탐색(다중 여부)
        answer.forEach(function (value, idx) {
            if (Array.isArray(value)) {

            }

        });

    },

    // ------------------------------------ 퀴즈 재시작
    restart: function restart() {

    },

    // ------------------------------------ 퀴즈 결과 보기
    result : function result(){

    },

    // ------------------------------------ 퀴즈 정답 체크
    check: function check() {
        // OX, 객관식, 주관식
        

    },

    // ------------------------------------ 퀴즈 등장 씬
    appear: function () {
        if (vod.currentTime >= vod.duration - 1) {
            $('.btn_start').fadeIn();
        } else {
            $('.btn_start').hide();
        }


    },

    event: function () {

        // ---------------------------------------- 이벤트 | 객관식 보기 클릭
        $('.choice').on('click', function () {
            
            if (Array.isArray(answer[quizCurPage])) {
                // 정답이 복수

            } else {
                // 정답이 단수
                myAnswer[quizCurPage] = $(this).index() + 1;
    
                // active
                $(this).toggleClass('on');
            }


        });

        // ---------------------------------------- 이벤트 | 
        // ---------------------------------------- 이벤트 | 
        // ---------------------------------------- 이벤트 | 
        // ---------------------------------------- 이벤트 | 
        // ---------------------------------------- 이벤트 | 
        // ---------------------------------------- 이벤트 | 

    }
}