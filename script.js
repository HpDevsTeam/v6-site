const ativarmenu = () => {
    const oi = document.querySelector(".oculta")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    oi.style.display = "block"
}


const desativarmenu = () => {
    const oi = document.querySelector(".oculta")
    if (oi.style.display == "block") {
        oi.style.display = "none"
    }
    oi.style.display = "none"
}

