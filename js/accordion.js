// DOM構造の読み込み完了後、読み込む
$('document').ready(function(){
    // 関数　open時
    function openAccordion(obj) {
        // console.log(obj);
        const child = obj.next();
        console.log(child);
        console.log('open関数発火');
        child.height('auto');
        const height = obj.height();
        child.height(height + 'px');
        child.animate({
            height: [ 0, height + 'px' ]
        },
            500
        );
        child.height('auto');
    };

    // 関数　close時
    function closeAccordion(e) {
        // console.log('close関数発火');
        let height = $(e).height();
        $(e).height($(height) + 'px');
        $(e).animate({
            height: [ $(height) + 'px', 0 ],
        }, {
            duration: 500
        });
        $(e).height(0);
    };

    const accordions = $('.include-accordion');
    // console.log(accordions); // 3つのアコーディオン親要素(ul)

    // ↑の要素全てに個別処理
    accordions.each(function() {
        const accordionButtons = $('.accordion-btn');
        // console.log(accordionButtons); //.accordion-btnの要素6個取得成功(button)

        accordionButtons.each(function() {
            $(this).on('click', function() {
                // console.log($(this));
                // console.log('イベント発火');　イベント発火の確認
                $(this).parent().toggleClass('active');
                let parentClass = $(this).parent();
                // console.log(parentClass); //クリックした要素の親要素(li)に.activeが付与されているか取得
                // console.log($(parentClass).hasClass('active'));

                // console.log($('.active'));

                // console.log($('.aaa'));

                // console.log(parentClass.hasClass('active'));

                if ($(parentClass).hasClass('active') === true) {
                    openAccordion($(this));
                } else {
                    closeAccordion($(this));
                }
            });
        });

    });
});