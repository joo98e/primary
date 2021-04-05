
// visual : s
var modalState;

var visual = {

    hide: function () {
        var target = this;
        target.style.display = 'none';
    },

    popUp: function () {

    },

    movePage: function () {
        // 클릭된 클래스명으로 이벤트 구분
        var _this = this;
        var state = String;
        if (_this.classList.contains('control_prev')) state = 'prev';
        if (_this.classList.contains('control_next')) state = 'next';
        // 인덱스 기능 추가 후 적용 필요
        // if (_this.classList.contains('')) state = 'move';

        switch (state) {

            // 다음 페이지
            case 'next':
                if (progress) {
                    // 진도체크 있음

                } else {
                    // 진도체크 없음
                    if (curPage == pageTotal) {
                        visual.modalMsg('안내', '마지막 페이지입니다.');
                    } else {
                        location.href = numSet.set(curPage + 1) + '.html';
                    }
                }
                break;

            // 이전 페이지
            case 'prev':

                if (progress) {
                    // 진도체크 있음

                } else {
                    // 진도체크 없음
                    if (curPage == 1) {
                        visual.modalMsg('안내', '첫 페이지입니다.');
                    } else {
                        location.href = numSet.set(curPage - 1) + '.html';
                    }
                }
                break;

            // 특정 페이지 이동
            case 'move':
                console.log('이동')


            default:
                break;
        }
    },

    // 이미지 태그에 한함.
    // visual.hoverFn('자바스크립트 선택자', '_over' || '_active' 등)
    hoverFn: function ($elem, hoverName) {
        var fileName = $elem.src.substring($elem.src.lastIndexOf('/') + 1, $elem.src.length);
        var fileSrc = $elem.src.substring(0, $elem.src.lastIndexOf('/') + 1);

        $($elem).hover(function () {
            if (hoverName != '') {
                this.src = fileSrc + fileName.split('.')[0] + hoverName + '.' + fileName.split('.')[1];
            } else {
                this.src = fileSrc + fileName.split('.')[0] + '_over' + '.' + fileName.split('.')[1];
            }
        }, function () {
            if (hoverName != '') {
                this.src = fileSrc + fileName;
            } else {
                this.src = fileSrc + fileName;
            }
        });
    },

    modalMsg: function (titleMsg, bodyMsg) {
        try {
            
            $('#modalAlert .modal-header h5').text(titleMsg);
            $('#modalAlert .modal-header h5').attr('title', titleMsg);
            $('#modalAlert .modal-body h6').text(bodyMsg);
            $('#modalAlert .modal-body h6').attr('title', bodyMsg);
            $('#modalAlert').fadeIn();

            visual.modalToggle();
            
        } catch (error) {
            console.log('error');
        }
    },

    indexToggle: function (e) {
        
        if (!indexState) {
            // 열기
            
            modalToggle();
        } else {
            // 닫기
            
            modalToggle();
        }
    },

    modalToggle: function () {

        if (!modalState) {
            $('#onlyModal').fadeIn();
            modalState = true;
        } else {
            $('#onlyModal').fadeOut();
            modalState = false;
        }

        // 재생이 끝나지 않았을 경우만 다시 재생
        if (vod.currentTime <= vod.duration - 0.1) mCtrl.playToggle();
    }
}