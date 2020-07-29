window.onload = function () {
    const buttonOpen = document.getElementById("open");
    const buttonClose = document.getElementById("remove");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const content = document.querySelector(".content");

    const openModal = () => {
        modal.classList.remove("hidden");
    }
    const closeModal = () => {
        modal.classList.add("hidden");
    }
    buttonOpen.addEventListener("click", openModal);
    overlay.addEventListener("click",closeModal);
    content.addEventListener("click",closeModal);
    content.addEventListener("click",closeModal);
    buttonClose.addEventListener("click",closeModal);

    
}