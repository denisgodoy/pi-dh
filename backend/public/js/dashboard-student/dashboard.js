function hideBillboard(event) {
    event.preventDefault();
    const billboard = document.getElementById("billboard");
    billboard.style.display = "none";
};

function popUpConfirm(event) {
    event.preventDefault();
    const leave = document.getElementById("leave-class");
    event.target.value == "stay" ? leave.style.display = "none" : leave.style.display = "flex";
};

window.onload = function () {
    const closeBtn = document.getElementById("close-billboard");
    closeBtn.addEventListener("click", hideBillboard);

    const stayBtn = document.getElementById("stay");
    stayBtn.addEventListener("click", popUpConfirm);

    const leaveBtn = document.getElementById("leave");
    leaveBtn.addEventListener("click", popUpConfirm);
};