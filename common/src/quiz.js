// TODO 결과보기 만들어야함

var btnState = {
    // TODO 활성화 여부에 따라 퀴즈 스타트 부분 수정 필요함
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
var score = Number;
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
            visual.hover(start, '_enable');
        }
        // ------------------------------------ 결과보기 버튼
        if (btnState.result) {
            var result = new Image();
            result.className = 'btn btn_result translate';
            result.src = srcPath + 'img/quiz/btn_result.png';
            result.alt = '결과 보기 버튼';
            visual.hover(result, '_enable');
        }
        // ------------------------------------ 확인 버튼
        var check = new Image();
        check.className = 'btn btn_check z_2';
        check.src = srcPath + 'img/quiz/btn_check.png';
        check.alt = '정답 확인 버튼';
        visual.hover(check, '_enable');

        // ------------------------------------ 다음 버튼
        var next = new Image();
        next.className = 'btn btn_next z_2';
        next.src = srcPath + 'img/quiz/btn_next.png';
        next.alt = '다음 문제 버튼';
        next.addEventListener('click', quiz.next);
        visual.hover(next, '_enable');

        // ------------------------------------ 퀴즈 컨테이너
        var quizContainer = document.createElement('div');
        quizContainer.id = 'quizContainer';

        // ------------------------------------ 퀴즈 문제 생성
        for (var i = 0; i < quizInfo.length; i++) {
            var quizEq = document.createElement('div'); // 문제별 컨테이너
            var titleWrap = document.createElement('h2'); // 문제 컨테이너
            var title = document.createElement('span'); // 문제 텍스트
            var titleImg = document.createElement('img'); // 문제 이미지
            var title_scoringImg = document.createElement('img'); // 문제 채점 이미지
            var subTitle = document.createElement('h3'); // 추가 지문
            var choiceBox = document.createElement('ul'); // 보기 컨테이너

            quizEq.className = 'translate quizEq quizEq' + (i + 1);
            titleWrap.className = 'header_quiz quiz_titleWrap nonTab';
            title.className = 'quiz_title'
            subTitle.className = 'header_quiz quiz_subTitle';
            choiceBox.className = 'header_quiz quiz_choiceBox nonTab';

            titleImg.className = 'quiz_titleImg';
            titleImg.src = srcPath + 'img/quiz/title_q' + (i + 1) + '.png';
            titleImg.alt = (i + 1) + '번 문제';

            title_scoringImg.className = 'quiz_title_scoringImg';
            title_scoringImg.alt = '퀴즈 정답 이미지';

            title.innerHTML = quizInfo[i].title;
            titleWrap.innerHTML = titleImg.outerHTML + title.outerHTML;
            subTitle.innerHTML = quizInfo[i].subTitle;

            // 답안 선택 생성
            switch (quizInfo[i].type) {
                case 1: // ----------------------------------------------- OX 문제

                    var btn_answer_wrap = document.createElement('div');
                    btn_answer_wrap.className = 'btn_answer_wrap';

                    // 정답 O
                    var btn_answer_O = new Image();
                    btn_answer_O.className = 'btn_type_1 btn_answer_O';
                    btn_answer_O.src = srcPath + 'img/quiz/btn_answer_O.png';
                    btn_answer_O.alt = '정답 O';
                    visual.hover(btn_answer_O, '_enable');

                    // 정답 X
                    var btn_answer_X = new Image();
                    btn_answer_X.className = 'btn_type_1 btn_answer_X';
                    btn_answer_X.src = srcPath + 'img/quiz/btn_answer_X.png';
                    btn_answer_X.alt = '정답 X';
                    visual.hover(btn_answer_X, '_enable');

                    btn_answer_wrap.appendChild(btn_answer_O);
                    btn_answer_wrap.appendChild(btn_answer_X);
                    choiceBox.appendChild(btn_answer_wrap);

                    break;

                case 2: // ---------------------------------------- 객관식 문제

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

                    break;

                case 3: // ---------------------------------------- 주관식 문제

                    var inputWrap = document.createElement('div');
                    var inputLabel = document.createElement('div');
                    var input = document.createElement('input');
                    var inputFocusLine = document.createElement('div');

                    inputWrap.className = 'inputWrap';
                    inputLabel.className = 'inputLabel noSelect';
                    input.className = 'choice_input z_2';
                    inputFocusLine.className = 'inputFocusLine transX';

                    input.title = '주관식 정답 제출란';
                    input.type = "text";
                    input.cols = '40';
                    input.spellcheck = false;

                    inputLabel.innerHTML = quizInfo[i].label ? quizInfo[i].label : '';

                    inputWrap.appendChild(input);
                    inputWrap.appendChild(inputLabel);
                    inputWrap.appendChild(inputFocusLine);
                    choiceBox.appendChild(inputWrap);

                    break;

                case 4: // ---------------------------------------- 그 외 

                    break;

                default:
                    break;
            }

            titleWrap.appendChild(title_scoringImg);
            quizEq.appendChild(titleWrap);
            if (quizInfo[i].subTitle !== undefined) quizEq.appendChild(subTitle);

            quizEq.appendChild(choiceBox);
            quizContainer.appendChild(quizEq);
        }

        var explanationBox = document.createElement('div'); // 퀴즈 풀이(설명) 박스
        explanationBox.className = 'explanationBox';
        var expElemArr = '';
        expElemArr += '<div class="explanation comment_right">';
        expElemArr += '     <span class="title">정답</span>';
        expElemArr += '     <span class="contents">정답이 들어갈 공간</span>';
        expElemArr += '</div>';
        expElemArr += '<div class="explanation comment_exp">';
        expElemArr += '     <span class="title">해설</span>';
        expElemArr += '     <span class="contents">해설이 들어갈 공간</span>';
        expElemArr += '</div>';
        explanationBox.innerHTML = expElemArr;

        quizContainer.appendChild(check);
        quizContainer.appendChild(result);
        quizContainer.appendChild(next);
        quizContainer.appendChild(explanationBox);
        document.getElementById('page').appendChild(start);
        document.getElementById('page').appendChild(quizContainer);

        quiz.event();
        quiz.resetStatus();
    },

    // ------------------------------------ 퀴즈 상태 리셋
    resetStatus: function () {

        // 정답 할당
        for (var i = 0; i < quizInfo.length; i++) {
            answer[i] = quizInfo[i].answer;
        }

        // 퀴즈 문제 탐색(다중 여부)
        answer.forEach(function (value, idx) {
            if (Array.isArray(value)) {
                myAnswer[idx] = new Array();
            }
        });

        // 퀴즈 찬스 할당
        for (var i = 0; i < chance.length; i++) {
            chance[i] = quizInfo[i].chance;
        }

        quizCurPage = 0;
        score = 0;

    },

    // ------------------------------------ 퀴즈 시작
    start: function () {

        $('#quizContainer').fadeIn();
        $('.quizEq:nth-child(1)').fadeIn();
        soundEffect('appear');

        // 퀴즈 상태
        quizStart = true;
        score = 0;
        quizCurPage = 0;

    },

    // ------------------------------------ 퀴즈 재시작
    restart: function () {
        quiz.resetStatus();

    },

    // ------------------------------------ 퀴즈 정답 체크
    check: function () {
        var typeIs = quizInfo[quizCurPage].type;
        var a = answer[quizCurPage];
        var b = myAnswer[quizCurPage];
        var ref;

        switch (typeIs) {
            case 1: // -----------------OX

                ref = (a === b);
                quiz.explanation(ref);

                break;

            case 2: // -----------------객관식

                if (Array.isArray(answer[quizCurPage])) {
                    a = JSON.stringify(a.sort());
                    b = JSON.stringify(b.sort());
                    ref = (a === b);
                    quiz.explanation(ref);
                } else {
                    ref = (a === b);
                    quiz.explanation(ref);
                }

                break;

            case 3: // -----------------주관식

                b = myAnswer[quizCurPage] = $('.choice_input').val();
                b = b.replace(/\s/g, '').toLowerCase();
                ref = (a === b);
                quiz.explanation(ref);

                break;

            default:
                visual.msgToggle('정의되지 않은 퀴즈 타입입니다.', 'quizType is ' + typeIs);
                return;
        }

    },

    // ------------------------------------ 퀴즈 풀이
    explanation: function (ref) {
        // 오답
        if (!ref) {
            soundEffect('X');
            if (quizInfo[quizCurPage].chance !== 0) {
                // 기회가 있음
                $('.btn_check').hide();
                $('.choice_input').val('');
                $('.choice').removeClass('on');
                $('.btn_type_1').removeClass('on');
                $('.inputLabel').removeClass('on');
                $('.inputFocusLine').removeClass('on');
                $('.quizEq' + (quizCurPage + 1) + ' .quiz_title_scoringImg').hide();

                quizInfo[quizCurPage].chance -= 1;
                Array.isArray(quizInfo[quizCurPage].answer) ? myAnswer[quizCurPage] = new Array() : myAnswer[quizCurPage] = null;
                visual.msgToggle('오답', '오답입니다. 기회가 ' + (quizInfo[quizCurPage].chance + 1) + '번 남았습니다.');
                return;
            }
        }
        // 정답
        else if (ref) {
            soundEffect('O');
            score++;
        }

        // 처리
        console.log(score);

        $('.btn_check').hide();
        $('.quizEq' + (quizCurPage + 1) + ' .choice').off();
        $('.quizEq' + (quizCurPage + 1) + ' .btn_type_1').off();
        $('.quizEq' + (quizCurPage + 1) + ' .quiz_title_scoringImg').attr('src', '../common/img/quiz/title_' + ref + '.png').fadeIn(500, function () {


            // 해설 내용
            $('.comment_right .contents').html(textSet.spanning(textSet.substitutionChar(quizInfo[quizCurPage].answer.toString())), '');
            $('.comment_exp .contents').html(textSet.spanning(textSet.substitutionChar(quizInfo[quizCurPage].explanation.toString()), 'comment_scroll'), '');

            // 해설 나오기
            $('.explanationBox').fadeIn(1000, function () {
                // 1초 후 다음문제 나오기
                if ((quizCurPage + 1) === quizInfo.length) {
                    // 마지막 문제를 풀었음
                    $('.btn_result').fadeIn(1000, function () {
                        // 결과보기 세팅
                        quiz.setResult();
                    });
                } else {
                    // 문제가 남았음
                    $('.btn_next').fadeIn();
                }
            });

        });

    },

    // ------------------------------------ 다음 퀴즈
    nextQue: function () {
        quizCurPage++;
        $('.explanationBox').hide();
        $('.btn_next').hide();

        $('.quizEq' + quizCurPage).hide();
        $('.quizEq' + (quizCurPage + 1)).show();
    },

    // ------------------------------------ 퀴즈 결과
    setResult: function () {

        $('.btn_result').on('click', function () {
            // 클릭시 결과보기 출력

        });

        if (progress) {
            // 진도체크

        }
    },

    // ------------------------------------ 퀴즈 등장
    appear: function () {

        if (vod.currentTime >= vod.duration - 1) {
            $('.btn_start').fadeIn();
        } else {
            $('.btn_start').hide();
        }

    },

    event: function () {

        // ---------------------------------------- 이벤트 | 퀴즈 시작 클릭
        $('.btn_start').on('click', function () {
            quiz.start();
        });

        // ---------------------------------------- 이벤트 | OX 문제 리스트 클릭
        $('.btn_type_1').on('click', function () {
            var state = $(this).attr('class').indexOf('O') != -1;
            myAnswer[quizCurPage] = state ? 'O' : 'X';

            $(this).addClass('on');
            $(this).siblings().removeClass('on');

            $('.btn_check').show();
        });

        // ---------------------------------------- 이벤트 | 객관식 보기 클릭
        $('.choice').on('click', function () {
            // 이미 선택된 것 취소
            if ($(this).hasClass('on')) {
                if (Array.isArray(answer[quizCurPage])) {
                    myAnswer[quizCurPage].splice(myAnswer[quizCurPage].indexOf($(this).index() + 1), 1);
                } else {
                    myAnswer[quizCurPage] = null;
                }
                $(this).removeClass('on');
                return;
            }

            // 정답이 복수
            if (Array.isArray(answer[quizCurPage])) {

                var target = $(this).index() + 1;
                if (myAnswer[quizCurPage].indexOf(target) != -1) {
                    return;
                } else {
                    myAnswer[quizCurPage].unshift(target);
                }

                if (myAnswer[quizCurPage].length > answer[quizCurPage].length) {
                    myAnswer[quizCurPage].pop();
                }

                $(this).siblings().each(function () {
                    var criteria = $(this).index() + 1;
                    if (myAnswer[quizCurPage].indexOf(criteria) === -1) {
                        $(this).removeClass('on');
                    } else {
                        $(this).addClass('on');
                    }
                });

                $(this).toggleClass('on');

            }

            // 정답이 단수
            else {
                myAnswer[quizCurPage] = $(this).index() + 1;

                $(this).siblings().removeClass('on');
                $(this).toggleClass('on');
            }

            // 체크 버튼 활성화

            $('.btn_check').show();
        });

        // ---------------------------------------- 이벤트 | 주관식 입력란 이벤트
        $('.choice_input').on('focus blur keyup change', function (e) {
            if (e.type === 'focus') {
                $('.inputLabel').addClass('on');
                $('.inputFocusLine').addClass('on');
            }
            if (e.type === 'blur') {
                $('.choice_input').val() == '' ? $('.inputLabel').removeClass('on') : '';
                $('.choice_input').val() == '' ? $('.inputFocusLine').removeClass('on') : '';
            }
            if (e.type === 'keyup') {

                if (e.key === 'Enter') {
                    // 엔터시(제출)
                    quiz.check();
                    return;
                }
                
                $('.btn_check').fadeIn();
            }
        });

        // ---------------------------------------- 이벤트 | 주관식 제출 클릭

        // ---------------------------------------- 이벤트 | 정답 확인 클릭
        $('.btn_check').on('click', function () {
            quiz.check();
        });

        // ---------------------------------------- 이벤트 | 다음 문제 클릭
        $('.btn_next').on('click', function () {
            quiz.nextQue();
        });

        // ---------------------------------------- 이벤트 | 결과 보기 클릭


        // ---------------------------------------- 이벤트 | 

    }
}