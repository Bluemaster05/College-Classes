async function getVersions() {
    let baseURL = "https://rordonez.pythonanywhere.com/bible/api/v1.0";
    let verUrl = baseURL + "/versions";
    let responce = await fetch(verUrl);
    let text = await responce.json()
    document.querySelector("#par2").textContent = text;
    // console.log(typeof(text))
    let verTemplate = document.querySelector("#VerTemplate")
    let verList = document.querySelector("#verList")
    for (let version of text) {
        console.log(version)
        let newVerElement = verTemplate.cloneNode()
        newVerElement.removeAttribute("id")
        newVerElement.removeAttribute("disabled")
        newVerElement.textContent = version
        verList.appendChild(newVerElement)
    }
}
getVersions()