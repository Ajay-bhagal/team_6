let id;
let curr = 0;
// let searchval;
let imgData;
const container = document.getElementById("content");

const getData = async (fetchurl) => {

    let rem = await fetch(fetchurl);
    let data = await rem.json();
    console.log(data);
    // if (searchval == undefined) {

    //     imgData = data;
    // } {
    imgData = data.results

    display(imgData);


}
const display = (data) => {
    container.innerHTML = null;
    data.map((ele, i) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.urls.regular;
        div.id = 'card_img';
        img.onclick = () => {
            curr = i;
            popupData(ele);
        }
        div.append(img)
        container.append(div);
    })
}
const popupData = (ele) => {
    // console.log("yes");
    let popu = document.getElementById("popu");
    const crossbtn = document.querySelector('.button_c');
    const download = document.querySelector(".download");
    let img = document.querySelector('.download_img');

    popu.classList.remove('hide');
    download.href = ele.links.html;
    img.src = ele.urls.regular;
    crossbtn.addEventListener("click", () => {
        popu.classList.add('hide');
    })
}
export { getData, display, popupData, id, curr, imgData }