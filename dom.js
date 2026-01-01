var titleDOM = document.querySelector("#title");
var linkDOM = document.querySelector(".link");
var buttomDOM = document.querySelector("#button");
/* if(titleDOM != null){
    titleDOM.innerHTML = '반가워요';
} */
/* if(titleDOM instanceof Element){
    titleDOM.innerHTML = '반가워요';
} */
if (titleDOM === null || titleDOM === void 0 ? void 0 : titleDOM.innerHTML) {
    titleDOM.innerHTML = '반가워요';
}
if (linkDOM instanceof HTMLAnchorElement) {
    linkDOM.href = "https://kakao.com";
}
buttomDOM === null || buttomDOM === void 0 ? void 0 : buttomDOM.addEventListener("click", function () {
});
