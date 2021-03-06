var side_num = document.getElementsByClassName("pageSelect");
var num_footer = document.getElementsByClassName("num_footer");
var artigos = document.getElementsByClassName("artigo");

var currentPage = -1;

for (var i = 0; i < side_num.length; i++) {
    side_num[i].number = i;
    side_num[i].page = artigos[i];
    side_num[i].addEventListener("click", goPage);
}

for (var i = 0; i < num_footer.length; i++) {
    for (var j = 0; j < num_footer[i].children.length; j++) {
        num_footer[i].children[j].number = j + 1;
        num_footer[i].children[j].page = artigos[j];
        num_footer[i].children[j].addEventListener("click", goPage);
    }
}

function goPage() {
    if (currentPage > 0) {
        if (side_num[currentPage].classList.contains("active")) {
            side_num[currentPage].classList.remove("active");
        }
    }
    if (this.number > 0) {
        side_num[this.number].classList.add("active");
    }

    if (currentPage == -1) {
        cubeRot();
    }

    if (artigotypeEm.classList.contains("open")) {
        artigotypeEm.classList.remove("open");
    }

    if (this.number == 0 && currentPage == 0) {
        currentPage = -1;
        cubeRot();
    } else {
        currentPage = this.number;
        if (currentPage == 14) {
            cubeRot();
            currentPage = -1;
        }
    }
    for (var i = 0; i < side_num.length; i++) {
        if (i <= currentPage) {
            if (side_num[i].page.classList.contains("close")) {
                side_num[i].page.classList.remove("close");
            }
        } else {
            if (i != side_num.length - 1 && !side_num[i].page.classList.contains("close")) {
                side_num[i].page.classList.add("close");
            }
        }
    }
}

var topSection = document.getElementById("topSection");
var artigotypeEm = document.getElementById("artigo_typeEm");

function topPage() {
    if (artigotypeEm.classList.contains("open")) {
        artigotypeEm.classList.remove("open");
    } else {
        artigotypeEm.classList.add("open");
    }

    for (var i = 0; i < side_num.length; i++) {
        if (i != side_num.length - 1 && !side_num[i].page.classList.contains("close")) {
            side_num[i].page.classList.add("close");
        }
    }
}

topSection.addEventListener("click", topPage);