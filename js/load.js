// DOM構築が完了したら読み込み
$(document).ready(function() {
    // 変数 spinner に #loading の要素を格納
    const spinner = $('#loading')[0];
    // 変数 spinner に .loaded を付与
    $(spinner).addClass('loaded');
});