// DOM構築が完了したら読み込み
$(document).ready(function() {
    $('.open').modaal({
        // 無関係の部分を押してもモーダルが消えないようにロック
        is_locked: true,
    });
    $('#about-site, #about-course, #about-blog, #about-books, #else').click(() => {
        $('.open').modaal('close');
    });
});