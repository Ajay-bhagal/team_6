let userdata = JSON.parse(localStorage.getItem("user-info"));
console.log(userdata);
if (userdata != null) {
    console.log(userdata)
    document.getElementById("user_name").innerHTML = userdata.user;
    document.getElementById("login_user").style.display = "block";
    document.getElementById("logout_user").style.display = "none";
}
document.getElementById("user").addEventListener("click", () => {

    document.getElementById("user_popup").style.display = "block"
})

document.getElementById("logout").addEventListener("click", () => {
    localStorage.setItem("user-info", JSON.stringify({}));
})
document.querySelector(".search_header").addEventListener("input", () => {
    deboubcing(getData, 2000);

})
//---------------------------------------------------------------------------------

let id;
let searchval;
const apiKey = `aBSiI0ek7J1gkMe2xa8JkLlHdB9UlqUBDNFjUnYMWtg`;
const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=wallpapers&per_page=30`;
let curr = 0;
let imgData;
const container = document.getElementById("content");

const deboubcing = (fn, delay) => {
    if (id != undefined) {
        clearTimeout(id);
    }
    id = setTimeout(() => {

        searchval = document.querySelector(".search_header").value;

        const searchurl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchval}&per_page=30`;

        console.log(searchval)
        fn(searchurl);
    }, delay)
}

const getData = async (fetchurl) => {
    console.log(fetchurl)
    let rem = await fetch(fetchurl);
    let data = await rem.json();
    console.log(data);
    // if (searchval == undefined) {

    //     imgData = data.re;
    // } else {
    imgData = data.results
    // }//                              
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

    download.href = ele.links.download_location;
    img.src = ele.urls.regular;
    crossbtn.addEventListener("click", () => {
        popu.classList.add('hide');
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



getData(url);