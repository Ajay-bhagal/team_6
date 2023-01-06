
let id;
const apiKey=`gDRd9seOjtxY_UTMNIgrceb6Ge_KgUpQ1hkUsU75RJc`;
let curr=0;
let imgData;
const container =document.getElementById("content");
const searchurl=`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=business&per_page=30`;


const getData= async(fetchurl)=>{

    let rem= await fetch(fetchurl);
    let data= await rem.json();
    console.log(data);
    imgData=data.results
    
    display(imgData);


}
const display=(data)=>{
    container.innerHTML=null;
    data.map((ele,i)=>{
        let div=document.createElement("div");
        let img= document.createElement("img");
        
        img.src=ele.urls.regular;
        div.id='card_img'; 
        img.onclick=()=>{
            curr=i;
            popupData(ele);
        }
        
        div.append(img)
        container.append(div);
    })
}
const popupData=(ele)=>{
    // console.log("yes");
    let popu=document.getElementById("popu");
    const crossbtn= document.querySelector('.button_c');
    const download=document.querySelector(".download");
    let img= document.querySelector('.download_img');

    popu.classList.remove('hide');
    
    download.href=ele.links.download_location;
    img.src=ele.urls.regular;
    crossbtn.addEventListener("click",()=>{
        popu.classList.add('hide');
    })
}

document.querySelector(".prev_button").addEventListener("click",()=>{
    if(curr>0){
        curr--;
        popupData(imgData[curr]);
    }
});
document.querySelector(".next_button").addEventListener("click",()=>{
    if(curr<imgData.length-1){
        curr++;
        popupData(imgData[curr]);
    }
});
 


getData(searchurl);
export{getData,display,popupData,imgData,id,curr,apiKey,container};