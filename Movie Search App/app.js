//most popular movies
APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//bring searched movies
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box")

const getMovies = async (api) => {  //fetch data from  API
    const response = await fetch(api)
    const data = await response.json()
    //console.log(data)
    showMovies(data.results)
}

// const box = 
// <div class="box">
//     <img src="path of image" alt="" />
//     <div class="overlay">
//  <div class="title"> 
//             <h2>name  </h2>
//             <span> ratings <span>
//         </div>
//         <h2>Overview:</h2>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
//     </div>
// </div>
// `   

// show movies ka kam ye h k ju data fetch kra h us pr html lga kr ju  main box h mtlb movie box usme append krate
// NOW TO MAKE THE CARD DYNAMICALLY

const showMovies = (data) => {
    movieBox.innerHTML = ""; // ✅ Clear old content(empty the moviebox)
    // console.log (data)   //to directly see movie list
    data.forEach(     // Aik Aik object nkal kr de ga us pore array k andr se 
        (item) => {
            //console.log(item)    //it shows the each objects individually without any dependencies not in a single object 
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
     <img src="${IMGPATH + item.poster_path}" alt="" />
          <div class="overlay">
                    <div class="title"> 
                        <h2> ${item.original_title}  </h2>
                        <span> ${item.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                 </div> 
    `
            movieBox.appendChild(box)
        });
}
//now we have to work on search box

document.querySelector("#search").addEventListener(
    "keyup"  ,  //means jse hi user kch likhe ga 
    function(event){
        //console.log(event.target.value)
        if (event.target.value != "") {
            //searched movies
            getMovies(SEARCHAPI+event.target.value)
        } else {
            // popular movies
            getMovies(APIURL);
        }
    }
)
//initial call on page loading
getMovies(APIURL);

