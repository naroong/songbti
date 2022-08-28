const msg = document.querySelector("#메세지박스");
const txt = document.querySelector("#편지내용");


function message() {
    msg.style.WebkitAnimation = "fadeOut 1s";
    msg.style.animation = "fadeOut 1s";
    setTimeout(() => {
        txt.style.WebkitAnimation = "fadeIn 1s";
        txt.style.animation = "fadeIn 1s";
        setTimeout(() => {
            msg.style.display = "none";
            txt.style.display = "block"
        }, 400)
        let qIdx = 0;
        goNext(qIdx);
    }, 400);
}