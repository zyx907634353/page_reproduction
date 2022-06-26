let imgContainer = document.querySelector(".cycle_img_container");
let btn = document.querySelectorAll(".cycle .btn button");

for(let i in btn){
    btn[i].onclick = function(){
        console.log(i)
        imgContainer.style.transform = `translate(${-1920*i}px)`;
    }
}