let mainProductImg = document.getElementById("mainImg");
let smallImgs = document.getElementsByClassName("small-img")

    smallImgs[0].onclick = function(){
        mainProductImg.src = smallImgs[0].src;
    }
    smallImgs[1].onclick = function(){
        mainProductImg.src = smallImgs[1].src;
    }
    smallImgs[2].onclick = function(){
        mainProductImg.src = smallImgs[2].src;
    }
    smallImgs[3].onclick = function(){
        mainProductImg.src = smallImgs[3].src;
    }