const accordions = document.querySelectorAll('.list-item');
// .list-item クラスがついたすべての要素を取得し、accordionsに格納する　accordion全体
accordions.forEach(accordion => {
    // {}の中のものをaccordionに実装します
    accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.list-content');
        // list-contentを取得し、content変数に格納する　content部分
        content.classList.toggle('active');
        // toggle('active')は'active'クラスをつけたり外したりする
        if (content.classList.contains('active')) {
            content.style.height = content.scrollHeight + 'px';
        } else {
            content.style.height = '0px';
        }
    })
})