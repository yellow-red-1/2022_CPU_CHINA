(function flexible(window, document) {
    let docEl = document.documentElement;
    let dpr = window.devicePixelRatio || 1

    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + "px"
        } else {
            document.addEventListener("DOMContentLoaded", setBodyFontSize)
        }
    }

    setBodyFontSize();

    function setRemUnit() {
        let rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit();

    window.addEventListener("resize", setRemUnit)
    window.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            setRemUnit();
        }
    })

    if (dpr >= 2) {
        let fakeBody = document.createElement('body')
        let testElement = document.createElement("div")
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))

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
