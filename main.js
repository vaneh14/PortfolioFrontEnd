/*--EFECTO TYPEWRITER--*/

let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<i class="bi bi-code"></i> Full Stack Developer Jr <i class="bi bi-code-slash"></i>')
  .pauseFor(200)
  .deleteChars(10)
  .start();



  /*--BOTON ARRIBA--*/

const btn_scrolltop = document.getElementById("btn_scrolltop")

btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

    window.onscroll = () => {
      add_btn_scrolltop()
    }

const add_btn_scrolltop = () => {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}



/*--FOOTER--*/

window.addEventListener("load", () => {
    const currentDate = new Date();
    document.getElementById("currentYear").innerText = currentDate.getFullYear();
});
