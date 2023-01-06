let id;
const apiKey = `wO6nmBgN1v66z9W-6DGCDsIV4GQvBf-xW8rMmv-HA70`;
const searchurl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=3d-renders&per_page=30`;
let curr = 0;
// let searchval;
let imgData;
const container = document.getElementById("content");

const getData = async (fetchurl) => {

    let rem = await fetch(fetchurl);
    let data = await rem.json();
    console.log(data);

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



document.querySelector(".prev_button").addEventListener("click", () => {
    if (curr > 0) {
        curr--;
        popupData(imgData[curr]);
    }
});
document.querySelector(".next_button").addEventListener("click", () => {
    if (curr < imgData.length - 1) {
        curr++;
        popupData(imgData[curr]);
    }
});



getData(searchurl);