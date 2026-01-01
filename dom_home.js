var imgDOM = document.querySelector("#image");
var aDOM = document.querySelectorAll(".naver");
if (imgDOM instanceof HTMLImageElement) {
    imgDOM.src = "new.jpg";
}
aDOM.forEach(function (item) {
    if (item instanceof HTMLAnchorElement) {
        item.href = "https://kakao.com";
    }
});
