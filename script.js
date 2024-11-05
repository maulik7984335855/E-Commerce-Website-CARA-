const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//  append features images

const feature = document.querySelector("#feature");

const features_images = [
  {
    text: "Lorem Ipsum",
    img: "img/features/f1.png",
  },
  {
    text: "Lorem Ipsum",
    img: "img/features/f2.png",
  },
  {
    text: "Lorem Ipsum",
    img: "img/features/f3.png",
  },
  {
    text: "Lorem Ipsum",
    img: "img/features/f4.png",
  },
  {
    text: "Lorem Ipsum",
    img: "img/features/f5.png",
  },
  {
    text: "Lorem Ipsum",
    img: "img/features/f6.png",
  },
  {
    text: "Lorem Ipsum",
    img: "img/features/f1.png",
  },
];

features_images.map((val) => {
  let div = document.createElement("div");
  div.classList.add("fe-box");

  let img = document.createElement("img");
  img.setAttribute("src", val.img);

  let h6 = document.createElement("h6");
  h6.innerHTML = val.text;

  div.appendChild(img);
  div.appendChild(h6);

  feature.appendChild(div);
});

//appending products details

// const pro_container = document.querySelector(".pro-container")
// let pro = document.querySelector(".pro")
// let product_image = [
//     "img/products/f1.jpg",
//     "img/products/f2.jpg",
//     "img/products/f3.jpg",
//     "img/products/f4.jpg",
//     "img/products/f5.jpg",
//     "img/products/f6.jpg",
//     "img/products/f7.jpg",
//     "img/products/f8.jpg"
// ]

// product_image.map((val)=>{
//     let pro_div = document.createElement("div")
//     pro_div.classList.add("pro")

//     let img = document.createElement("img")
//     img.setAttribute("src",val)

//     let des = document.createElement("div")
//     des.classList.add("des")

//     let span = document.createElement("span")
//     span.innerHTML = "Adiddas"

//     let h6 = document.createElement("h6")
//     h6.innerHTML = "Cotton shirts pure cotton"

//     let star = document.createElement("div")
//     star.classList.add("star")

//     let i = document.createElement("i")
//     i.classList.add("fas fa-star")

//     star.appendChild(i*5)

//     des.appendChild(span)
//     des.appendChild(h6)
//     des.appendChild(star)

//     pro_div.appendChild(img)
//     pro_div.appendChild(des)

//     pro_container.appendChild(pro_div)

// })

//validate contact form

// let contact_btn = document.querySelector(".normal");

// contact_btn.addEventListener(
//   ("submit",
//   () => {
   
//   })
// );

