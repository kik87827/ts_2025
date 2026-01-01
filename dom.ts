let titleDOM = document.querySelector("#title");
let linkDOM = document.querySelector(".link");
let buttomDOM = document.querySelector("#button");
/* if(titleDOM != null){
    titleDOM.innerHTML = '반가워요';
} */

/* if(titleDOM instanceof Element){
    titleDOM.innerHTML = '반가워요';
} */

if(titleDOM?.innerHTML){
    titleDOM.innerHTML = '반가워요';
}

if(linkDOM instanceof HTMLAnchorElement){
    linkDOM.href = "https://kakao.com";
}

buttomDOM?.addEventListener("click",()=>{

});