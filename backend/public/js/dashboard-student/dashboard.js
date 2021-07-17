function hideBillboard(event) {
    event.preventDefault();
    const billboard = document.getElementById("billboard");
    billboard.style.display = "none";
};

function popUpConfirm(event) {
    const leave = document.getElementById("leave-class");
    event.preventDefault();

    if (event.target.value == "stay") {
        leave.style.display = "none";
    } else {
        leave.style.display = "flex";
    };
};

window.onload = function () {
    const closeBtn = document.getElementById("close-billboard");
    closeBtn.addEventListener("click", hideBillboard);

    const stayBtn = document.getElementById("stay");
    stayBtn.addEventListener("click", popUpConfirm);

    const leaveBtn = document.getElementById("leave");
    leaveBtn.addEventListener("click", popUpConfirm);
};