window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight)
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";

}