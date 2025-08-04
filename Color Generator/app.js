const get_color=()=>{
    //hex code of colors
    const random_number=Math.floor(Math.random()*16777215) //to covert the random number into hexadecimal number syastem
//console.log(random_number)
//now convert this number into hex codes of color
const random_code="#"+random_number.toString(16)
// console.log(random_number,random_code)
document.body.style.backgroundColor=random_code
document.getElementById("color_code").innerText=random_code

navigator.clipboard.writeText(random_code)  //to write automatically on clipbord for copy,now you just have to paste it anywhere
}
// event call
document.getElementById("btn").addEventListener(
    "click",
    get_color  //get_color is passed without parentheses, so it's only executed when the button is clicked.
)
get_color(); //initial call to get the color when we open it for first time while page loading