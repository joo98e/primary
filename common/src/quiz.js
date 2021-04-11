var btnState = {
    // 시작 버튼 활성화 여부
    start: true,
    // 결과보기 활성화 여부
    result: true
    // 
};

var quizStart = false;
var answer = new Array(quizInfo.length);
var myAnswer = new Array(quizInfo.length);
var chance = new Array(quizInfo.length);
var count = Number;
var thisPage = Number;

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
        
        // 퀴즈 컨테이너 생성
        var page_Quiz = document.createElement('div');
        page_Quiz.id = 'page_Quiz';

        // 퀴즈 문제 생성
        for (var i = 0; i < quizInfo.length; i++) {
            var quizEq = document.createElement('div');
            var titleWrap = document.createElement('h2');
            var title = document.createElement('span');
            var titleImg = document.createElement('img');
            var subTitle = document.createElement('h3');
            
            var choiceBox = document.createElement('ul');
            
            quizEq.className = 'translate quizEq quizEq' + (i + 1);
            quizEq.setAttribute('title', '퀴즈 ' + (i + 1) + '번 영역');
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
            
            quizEq.appendChild(titleWrap);
            if (quizInfo[i].subTitle != '') quizEq.appendChild(subTitle);
            quizEq.appendChild(choiceBox);
            page_Quiz.appendChild(quizEq);
        }
        
        document.getElementById('page').appendChild(start);
        document.getElementById('page').appendChild(check);
        document.getElementById('page').appendChild(result);
        document.getElementById('page').appendChild(next);
        document.getElementById('page').appendChild(page_Quiz);

        quiz.event();
    },

    start: function start() {
        $('#page_Quiz').fadeIn();
        $('.quizEq:nth-child(1)').fadeIn();

        quizStart = true;
        count = 0;
        thisPage = 0;

        for (var i = 0; i < quizInfo.length; i++) {
            answer[i] = quizInfo[i].answer;
            chance = [];
        }

    },

    restart: function restart() {

    },

    result : function result(){

    },

    check: function check() {
        // OX, 객관식, 주관식
        

    },

    result : function result(){

    },

    appear: function appear() {
        if (vod.currentTime >= vod.duration - 1) {
            $('.btn_start').fadeIn();
        } else {
            $('.btn_start').hide();
        }


    },

    event: function event() {
        
        $('.choice').on('click', function () {

            var fileName = this.src.substring($elem.src.lastIndexOf('/') + 1, $elem.src.length);
            var fileSrc = this.src.substring(0, $elem.src.lastIndexOf('/') + 1);

            // 정답 담기
            myAnswer[thisPage] = $(this).index() + 1;

            // active
            $(this).find('img').src = fileSrc + fileName.split('.')[0] + '_enable' + '.' + fileName.split('.')[1];
        });

    }
}