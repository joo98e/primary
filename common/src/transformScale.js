
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