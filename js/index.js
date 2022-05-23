document.addEventListener('DOMContentLoaded', function() {
    toUpBtnFunc();
});

function toUpBtnFunc() {
    let btn = document.querySelector('.btn--up');

    window.addEventListener('scroll', () => {
        if( window.pageYOffset >= 650 ) {
            btn.classList.add('show');
        }else{
            btn.classList.remove('show');
        }
    } );

    btn.addEventListener('click', () => {
        window.scrollTo(0);
    });
}
