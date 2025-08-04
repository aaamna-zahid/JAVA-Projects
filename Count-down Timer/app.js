const endDate = "01 September 2025 11:59 PM"
document.getElementById('end-date').innerText = endDate;
const inputs=document.querySelectorAll("input") //can also be done by get_element_by_ID
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    console.log(end)
    console.log(now)
    // const difference = end - now  //returns the differnce in milliseconds
    const difference = (end - now) / 1000;  //returns the differnce in seconds
   // console.log(difference)  //now we have to convert it into days ,hours,minuts,seconds
if (difference<0) //to avoid negative countdown
     {
    return;
}
   //convert into days 
    inputs[0].value=Math.floor(difference / (60 * 60 * 24));
    //convert into hours (days ku nkal kr isi lye modulus ka operator use kr rhe which returns the remainder)
  inputs[1].value=Math.floor(difference / (60*60) ) % 24;
  //convert into minutes
   inputs[2].value=Math.floor(difference / (60) ) % 60;
   //convert into seconds
   inputs[3].value=Math.floor(difference % 60);
}
clock();     //initial call
//to call at every second
setInterval(
    ()=>{
        clock()
    },
    1000
)