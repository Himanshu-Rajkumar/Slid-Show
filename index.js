
let arr = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "image13.jpg",
    "image14.jpg",
    "image15.jpg",
    "image16.jpg",
    "image17.jpg",
    "image18.jpg",
    "image19.jpg",
    "image20.jpg",
    
    

]
let image = document.getElementById('image');
let back = document.getElementById("back");
let next = document.getElementById("next");
let Slide=document.getElementById("Slide")
let count = 0;
let id;
image.setAttribute("src", arr[count])

// Image automatecily Slide Show

function SlideShow(){
    id=setInterval(() => {
        count++
        if(count>=arr.length){
            count=0
        }
        image.setAttribute("src",arr[count])
        
    }, 1000);
}
// Logic on back button image will be back

back.addEventListener("click", function () {
    clearInterval(id)
    count--
    if (count < 0) {
        count = arr.length - 1
    }
    image.setAttribute("src", arr[count])

})

// Logic on next button , image will be next
next.addEventListener("click", function () {
    clearInterval(id)

    count++
    if (count >= arr.length) {
        count = 0
    }

    image.setAttribute("src", arr[count])
})







