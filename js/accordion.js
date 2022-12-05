document.addEventListener('DOMContentLoaded', () => {
    // 関数　open時
    const openAccordion = function(e) {
        e.style.height = 'auto';
        let h = e.offsetHeight;
        e.style.height = h + 'px';
        e.animate({
            height: [ 0, h + 'px' ]
        }, {
            duration: 500,
        });
        e.style.height = 'auto';
    };

    // 関数　close時
    const closeAccordion = function(e) {
        let h = e.offsetHeight;
        e.style.height = h + 'px';
        e.animate({
            height: [ h + 'px', 0 ]
        }, {
            duration: 500,
        });
        e.style.height = 0;
    };

    // クリックした要素のインデックス番号を入れる変数
    let activeIndex = null;

    const accordions = document.querySelectorAll('.include-accordion');

    accordions.forEach( function(accordion) {

        const accordionBtns = accordion.querySelectorAll('.accordion-btn');

        accordionBtns.forEach( function(accordionBtn, index) {
            accordionBtn.addEventListener('click', function(e) {
                activeIndex = index;
                e.target.parentNode.classList.toggle('active');
                const content = accordionBtn.nextElementSibling;
                if (e.target.parentNode.classList.contains('active')){
                    openAccordion(content);
                } else {
                    closeAccordion(content);
                }
                accordionBtns.forEach( function(accordionBtn, index) {
                    if (activeIndex !== index) {
                        accordionBtn.parentNode.classList.remove('active');
                        const openedContent = accordionBtn.nextElementSibling;
                        closeAccordion(openedContent);
                    }
                });

                let container = accordion.closest('.scroll-control');

                if (accordionBtn.parentNode.classList.contains('active') == false && container !== null ) {
                    container.classList.remove('active')
                } else if (container !== null) {
                    container.classList.add('active')
                }
            });
        });
    });
});