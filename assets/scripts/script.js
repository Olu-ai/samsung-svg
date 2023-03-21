let image = document.querySelector(".slider1");

let slider = new Array(
  "/assets/images/svr1.jpeg",
  "/assets/images/svr2.jpeg",
  "/assets/images/svr2.jpeg"
);
let length = slider.length;
let i = 0;
function sliderImage(){
    if (i > length - 1) {
        i = 0
    }
    image.src = slider[i]
    i++
    setTimeout(()=>{
        sliderImage()
    },2000)
}
