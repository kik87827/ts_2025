const imgDOM = document.querySelector("#image");
const aDOM = document.querySelectorAll(".naver");

if(imgDOM instanceof HTMLImageElement){
    imgDOM.src = "new.jpg"
}

aDOM.forEach((item)=>{
    if(item instanceof HTMLAnchorElement){
        item.href = "https://kakao.com";
    }
});
