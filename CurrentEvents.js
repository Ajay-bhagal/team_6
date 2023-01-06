import {getData,display,popupData,imgData,id,curr,apiKey,container} from "./Business&Work.js";
let gData= getData;
const searchurl=`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=event&per_page=30`;
gData(searchurl);