function hideBillboard() {
    const billboard = document.getElementById("billboard");
    billboard.style.display = "none";
};

window.onload = function () {
    const closeBtn = document.getElementById("close-billboard");
    closeBtn.addEventListener("click", hideBillboard);
};