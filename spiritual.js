// let id;
// import { getData, display, popupData, id, curr, imgData, getData } from "./component/component.js";
import { getData, display, popupData, id, curr, imgData } from "./component/component.js";
const apiKey = `wO6nmBgN1v66z9W-6DGCDsIV4GQvBf-xW8rMmv-HA70`;
const searchurl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=spirituality&per_page=30`;
let getdAta = getData;
let Display = display;
let PopupData = popupData;
const container = document.getElementById("content");
// let Imgdata = imgData;
// let id1 = id;
// let curr1 = curr;
getdAta(searchurl);
Display();
PopupData();



document.querySelector(".prev_button").addEventListener("click", () => {
    if (curr > 0) {
        curr--;
        PopupData(imgData[curr]);
    }
});
document.querySelector(".next_button").addEventListener("click", () => {
    if (curr < imgData.length - 1) {
        curr++;
        PopupData(imgData[curr]);
    }
});


