
var volumeGetStyleLeft;

var visual = {

    hide: function (target) {
        target.style.display = 'none';
    },

    popUp: function () {

    },

    nextPage: function () {
        if (progress) {
            // 진도체크 있음

        } else {
            // 진도체크 없음
            if (curPage == pageTotal) {
                visual.msgToggle('안내', '마지막 페이지입니다.');
            } else {
                location.href = textSet.set(curPage + 1) + '.html';
            }
        }
    },

    prevPage: function () {
        if (progress) {
            // 진도체크 있음

        } else {
            // 진도체크 없음
            if (curPage == 1) {
                visual.msgToggle('안내', '첫 페이지입니다.');
            } else {
                location.href = textSet.set(curPage - 1) + '.html';
            }
        }
    },

    movePage: function (page) {
        if (progress) {
            // 진도체크 있음

        } else {
            // 진도체크 없음
            if (Number(page) !== curPage) {
                location.href = textSet.set(page) + '.html';
            }
        }
    },

    // 이미지 태그에 한함.
    // ex) visual.hover('자바스크립트 선택자', '_over');
    hover: function ($elem, hoverName) {
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

    fade: function () {
        $('.fadeBox').on('click', function (e) {
            if (e.target === e.currentTarget && $(this).css('opacity') === "1") {
                $(this).fadeToggle();
                if (!vod.ended) mCtrl.playToggle();
            }
        });
    },

    indexToggle: function (e) {
        $('#indexPosition').css('left', '-' + indexCurrentWidth + 'px');

        if (!$('#indexWrap').is(':visible')) {
            // 열기
            $('#indexWrap').fadeIn('ease', function () {
                $('#indexPosition').animate({
                    left: '0'
                });
            });

            mCtrl.playToggle();
        } 
    },

    indexMove: function () {
        $('.indexTitle, .indexSubTitle').on('click', function () {
            var page = $(this).attr('data-page-num');
            visual.movePage(page);
        });
    },

    msgToggle: function (titleMsg, bodyMsg) {

        if (!$('#modalWrap').is(':visible')) {
            // 켜기
            $('#modalAlert .modal-header h5').html(titleMsg);
            $('#modalAlert .modal-header h5').attr('title', titleMsg);
            $('#modalAlert .modal-body h6').html(bodyMsg);
            $('#modalAlert .modal-body h6').attr('title', bodyMsg);
            $('#modalWrap').fadeToggle();

        } else {
            // 끄기
            $('#modalWrap').fadeToggle();
        }

        mCtrl.playToggle();
    },

    volumeAnimate: function () {
        if ($('.volume_gaugeWrap').is(':animated')) return;

        volumeGetStyleLeft = Number($('.volume_gaugeWrap').css('left').replace(/\D/g, ''));

        if ($('.volume_gaugeWrap').is(':visible')) {
            $('.volume_gaugeWrap').animate({
                'left': volumeGetStyleLeft - 20 + 'px',
                'opacity': '0'
            }, function () {
                $(this).hide();
            });
        } else {
            $('.volume_gaugeWrap').show().animate({
                'left': volumeGetStyleLeft + 20 + 'px',
                'opacity': '1'
            });
        }
    },

    fullScreen: function (e) {
        
    }

    
}
