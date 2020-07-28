window.onload = function(){
    const openButton = document.getElementById("open");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal__overlay");
    const closeBtn = modal.querySelector("button");

    const openmodal = () => { modal.classList.remove("hidden"); }
    const closeModal = () => { modal.classList.add("hidden"); }

    overlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    openButton.addEventListener("click", openmodal);

}