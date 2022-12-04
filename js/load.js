// DOM構築が完了したら読み込み
$(document).ready(function() {
    // 変数 spinner に #loading の要素を格納
    const spinner = document.getElementById('loading');
    // 変数 spinner に .loaded を付与
    spinner.classList.add('loaded');
});