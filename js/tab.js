// DOM構造の読み込みが完了してから読み込み開始
$('document').ready(function() {
    // .tabの要素を取得
    const tabs = $('.tab');
    // 配列形式の為、for文で個別処理
    for (let i = 0; i < tabs.length; i ++) {
        // 各要素がクリックされたら、
        $(tabs[i]).on('click', function() {
            // .is-activeの要素を取得
            const activeContent = $('.is-active');
            // .is-activeを除外
            $(activeContent).removeClass('is-active');
            // クリックした要素に.is-activeを付与
            $(this).addClass('is-active');
            //　.is-showの要素を取得
            const showContent = $('.is-show');
            // .is-showを除外
            $(showContent).removeClass('is-show');
            // tabsを別の変数に移動
            const arrayTabs = tabs;
            // .indexを利用しクリックした要素のインデックス番号をarrayTabsから取得
            const index = $(arrayTabs).index(this);
            // .panelの要素を取得
            const panel = $('.panel');
            // クリックした要素に.is-showを付与
            $(panel[index]).addClass('is-show');
        });
    }
});