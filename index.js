window.onscroll = function () {
    var y = window.scrollY
    console.log(y);
    if ( y >= 2) {
        document.querySelector(".navContain").classList.add("scroll");
    }else {
        document.querySelector(".navContain").classList.remove("scroll")
    } 
}

document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.list-container').classList.toggle('active');
})