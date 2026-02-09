const tab1 = document.getElementById("tab1")
const tab2 = document.getElementById("tab2")
const tab3 = document.getElementById("tab3")
const tab4 = document.getElementById("tab4")
const article1 = document.getElementById("article1")
const article2 = document.getElementById("article2")
const article3 = document.getElementById("article3")
const article4 = document.getElementById("article4")

function clicktab1() {
    //Change Display type
    article1.style.display = "inline"
    article2.style.display = "none"
    article3.style.display = "none"
    article4.style.display = "none"
    //Change Tab Class
    tab1.classList.add("tab-focus")
    tab2.classList.remove("tab-focus")
    tab3.classList.remove("tab-focus")
    tab4.classList.remove("tab-focus")
}
tab1.addEventListener("click", clicktab1)

function clicktab2() {
    //Change Display type
    article1.style.display = "none"
    article2.style.display = "inline"
    article3.style.display = "none"
    article4.style.display = "none"
    //Change Tab Class
    tab1.classList.remove("tab-focus")
    tab2.classList.add("tab-focus")
    tab3.classList.remove("tab-focus")
    tab4.classList.remove("tab-focus")
}
tab2.addEventListener("click", clicktab2)

function clicktab3() {
    //Change Display type
    article1.style.display = "none"
    article2.style.display = "none"
    article3.style.display = "inline"
    article4.style.display = "none"
    //Change Tab Class
    tab1.classList.remove("tab-focus")
    tab2.classList.remove("tab-focus")
    tab3.classList.add("tab-focus")
    tab4.classList.remove("tab-focus")
}
tab3.addEventListener("click", clicktab3)

function clicktab4() {
    //Change Display type
    article1.style.display = "none"
    article2.style.display = "none"
    article3.style.display = "none"
    article4.style.display = "inline"
    //Change Tab Class
    tab1.classList.remove("tab-focus")
    tab2.classList.remove("tab-focus")
    tab3.classList.remove("tab-focus")
    tab4.classList.add("tab-focus")
}
tab4.addEventListener("click", clicktab4)