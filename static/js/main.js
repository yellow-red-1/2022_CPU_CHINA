function showUserDetail(id, flag) {
    let user_img = document.getElementById(id + "_b")
    if (flag) {
        user_img.style.display = "block"
    } else {
        user_img.style.display = "none"
    }
}

function change_user_detail(id) {
    let SRD = document.getElementById("SRD")
    let SRN = document.getElementById("SRN")
    let SR = document.getElementById("SR")
    let image = document.getElementById(id + "_img")
    let img_path = image.getAttribute("src")
    let user_card_img = document.getElementById("img")
    user_card_img.setAttribute("src", img_path)
    if (id === "em1") {
        SRD.innerText = "这是1的信息"
        SRN.innerText = "职位1"
        SR.innerText = "这是1的经历"
    }
    if (id === "em12") {
        SRD.innerText = "这是2的信息"
        SRN.innerText = "职位2"
        SR.innerText = "这是2的经历"
    }

}

function show(id, flag) {
    let elementById = document.getElementById(id);
    let elementById1 = document.getElementById(id + "Tag");
    resetColor()
    elementById.style.backgroundColor = "#115596";
    elementById.style.color = "#ffffff";
    if (flag) {
        setTagNone()
        elementById1.style.display = "block"
    }
}

function setTagNone() {
    for (const elementsByClassNameElement of document.getElementsByClassName("Tag")) {
        elementsByClassNameElement.style.display = "none"
    }
}

function resetColor() {
    let elementsByTagName = document.getElementsByClassName("naval");
    console.log(elementsByTagName)
    for (let i = 0; i < elementsByTagName.length; i++) {
        elementsByTagName[i].style.backgroundColor = "#ffffff";
        elementsByTagName[i].style.color = "#333333";
    }
}