
let ovrelay= document.querySelector(".galleryOverlay");
let imageBox=document.querySelector(".imgBox");
let img=document.querySelector(".imgBox img");
let close=document.querySelector(".imgBox span");
let gallery=document.querySelector('#gallery');


gallery.addEventListener("click",(event)=>{


  let currentImgPath=event.target.src;
  if(currentImgPath!==undefined){
    ovrelay.classList.add('galleryOverlayShow');
    imageBox.classList.add('imgBoxShow');
    img.src=currentImgPath;
  }

})
close.addEventListener("click", ()=>{
    ovrelay.classList.remove('galleryOverlayShow');
    imageBox.classList.remove('imgBoxShow');
})
ovrelay.addEventListener("click",()=>{
  ovrelay.classList.remove('galleryOverlayShow');
  imageBox.classList.remove('imgBoxShow');
})


