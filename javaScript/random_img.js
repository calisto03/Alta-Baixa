function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//var artigo_1=document.getElementById("artigo_1");

//var imageArray = ["1.png", "2.png"];

for(let j=0; j<artigos.length; j++) {
    load_index_img(artigos[j]);
}


function load_index_img(artigo) {
    var image = artigo.getElementsByClassName("image_artigo");

    for (var i = 0; i < image.length; i++) {
        ///image[i].src = "data/img/index/1/" + imageArray[getRandomInt(imageArray.length)];

        var vh = artigo.clientHeight, vw = artigo.clientWidth, img_width = image[i].width,
            img_height = image[i].height;

        var newTop = img_height / 2 + getRandomInt(vh - img_height);
        var newLeft = img_width / 2 + getRandomInt(vw - img_width);

        image[i].style.top = newTop + "px";
        image[i].style.left = newLeft + "px";
    }
}