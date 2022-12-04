// DOM構造の読み込みが完了してから読み込み開始
window.addEventListener('DOMContentLoaded', () => {
    // .tabの要素を取得
    const tabs = document.getElementsByClassName('tab');
    // 配列形式の為、個別処理
    // 「i=1」は使用不可 要素を取り出すときのインデックス番号として使用する為
    for(let i = 0; i < tabs.length; i++) {
        // .tabがクリックされたらtabSwitchを実行
        tabs[i].addEventListener('click', tabSwitch);
    }
    // コールバック関数
    function tabSwitch() {
        // 現在.is-activeが付与されている要素から.is-activeを除外
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        // クリックした要素に.is-activeを付与
        this.classList.add('is-active');
        // 現在.is-showが付与されている要素から.is-showを除外
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        // クリックした配列から取り出して格納
        const arrayTabs = Array.prototype.slice.call(tabs);
        // indexに要素のインデックス番号を格納
        const index = arrayTabs.indexOf(this);
        // クリックした要素のインデックス番号と同じインデックス番号を持つ要素に.is-showを付与
        document.getElementsByClassName('panel')[index].classList.add('is-show');
    }
});