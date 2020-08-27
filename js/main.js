

// moreinfo collapse
function moreinfo() {
    var dots = document.getElementById('dots');
    var moretext = document.getElementById('more');
    var btnText = document.getElementById('myBtn');

    if(dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more';
        moretext.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less';
        moretext.style.display = 'inline';
    }
}
function moreinfo2() {
    var dots2 = document.getElementById('dots2');
    var moretext2 = document.getElementById('more2');
    var btnText2 = document.getElementById('myBtn2');

        if(dots2.style.display === 'none') {
            dots2.style.display = 'inline';
            btnText2.innerHTML = 'Read more';
            moretext2.style.display = 'none';
        } else {
            dots2.style.display = 'none';
            btnText2.innerHTML = 'Read less';
            moretext2.style.display = 'inline';
        }
}