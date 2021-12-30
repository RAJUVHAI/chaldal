
// var photos = ["https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603__340.jpg", "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604__340.jpg"];

// var imgTag = document.querySelector(".image")

// var count = 0;

// function next() {
//     count++;
//     if (count >= photos.length) {
//         count = 0;
//         imgTag.src=photos[count];
//     } else {
//         imgTag.src=photos[count];
//     }


// }

// function prev() {
//     count--;
//     if (count < 0) {
//         count = photos.length - 1;
//         imgTag.src=photos[count];
//     } else {
//         imgTag.src=photos[count];
//     }
// }


// toggle menu
var menu = document.querySelector(".menuToggle");
var listofmenu = document.querySelector(".submenu__lists")
menu.addEventListener("click",function(e){
    e.preventDefault();

    if ( listofmenu.style.display === "none") {
        listofmenu.style.display = "block";


      } else {
        listofmenu.style.display = "none";
      }
});

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})



