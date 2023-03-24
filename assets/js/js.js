

let openMenu = document.getElementById("menu_open")
let closeMenu = document.getElementById("menu_close")
let menu = document.getElementById("menu")


/*Abrir menu */
const openNav = () => {

    menu.classList.remove("menu__inactive")
    menu.classList.add("menu__active")

  }

  /*Cerrar menú */
  const closeNav = () => {

    menu.classList.add("menu__inactive")
    menu.classList.remove("menu__active")

  }



openMenu.addEventListener("click", e => {

    openNav()

})

closeMenu.addEventListener("click", e => {

    closeNav()

})