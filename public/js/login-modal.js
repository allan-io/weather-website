var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

const btnClick = () => {
    modal.style.display = "block"
}

const closeModalX = () => {
    modal.style.display = "none"
}

const closeModalOutside = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

module.exports = {
    btn,
    modal,
    span,
    btnClick,
    closeModalX,
    closeModalOutside
}

