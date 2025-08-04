
                // not having the functionality of loop infinitely

// const slides=document.querySelectorAll(".slide")    //slide nam se class jis jis element me lgi hwi h usku uthao or slides variable me dal du

// var counter=0
// const totalSlides = slides.length;

// //console.log(slides)

// slides.forEach(
//     (slide,index)=>{
//         slide.style.left=`${index*100}%`
//     }
// )

// const goPrev = () => {
//     counter--
//     slideImage()
// }

// const goNext = () => {
//     counter++
//     slideImage()
// }

// const slideImage=()=>{
//     slides.forEach(
//        (slide)=>{
//         slide.style.transform=`translateX(-${counter*100}%)`
//        }
//     )
// }



/*       Position each slide horizontally 
translateX(value) moves an element horizontally.
translateX(100%) → moves right by 100% of its width.
translateX(-100%) → moves left by 100% of its width.

Slide 1 → No shift: translateX(0%)
Slide 2 → Shift left by 100%: translateX(-100%)
Slide 3 → Shift left by 200%: translateX(-200%)

//    Position each slide vertically
slides.forEach((slide, index) => {
  slide.style.top = `${index * 100}%`;
});
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
 */

//                    loop infinitely
//When you go forward after the last slide, it wraps to the first slide.
//When you go backward before the first slide, it wraps to the last slide.


const slides = document.querySelectorAll(".slide"); // Get all slides
let counter = 0;
const totalSlides = slides.length;

// Set initial positions of slides
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter = (counter - 1 + totalSlides) % totalSlides;  // Wrap backward
    slideImage();
};

const goNext = () => {
    counter = (counter + 1) % totalSlides;  // Wrap forward
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
