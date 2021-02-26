// Hides simple search icon after close (as well as after sent feedback)
(function () {
    document.addEventListener('mopinion_will_hide', (e) => {
        if (e.detail.key === '1df08461f281320f29472b1f39338b9e3be58969') {
            var button = document.querySelector("button[data-button-for='1df08461f281320f29472b1f39338b9e3be58969']");
            if (button) {
                button.setAttribute('style', 'display: none');
            }
        }
    })
}());

// Hides advanced search icon after close (as well as after sent feedback)
(function () {
    document.addEventListener('mopinion_will_hide', (e) => {
        if (e.detail.key === '0830e8d99a0250cec7f41f5fbfe63a532f269620') {
            var button = document.querySelector("button[data-button-for='0830e8d99a0250cec7f41f5fbfe63a532f269620']");
            if (button) {
                button.setAttribute('style', 'display: none');
            }
        }
    })
}());

// Function hides loveability form after user has sent feedback
(function () {
    document.addEventListener('mopinion_feedback_sent', (e) => {
        if (e.detail.key === '332f95675f69206f48fdfa573a95153d12d4597d') {
            var button = document.querySelector("button[data-button-for='332f95675f69206f48fdfa573a95153d12d4597d']");
            if (button) {
                button.setAttribute('style', 'display: none');
            }
        }
    })
}());
