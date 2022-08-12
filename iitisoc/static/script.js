const API_KEY = 'api_key=55c6150c47ae44b5079ba6f5c89364e1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search');


getmovies(API_URL);
function getmovies(url){
    fetch(url).then(res => res.json()).then(data => {
          console.log(data.reults);
          showmovies(data.results);

        })
}

function myfunction(movie){
  console.log(movie);
  let id = movie.id ;
  const {title , poster_path , vote_average , overview , release_date } = movie;
  fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    console.log(videoData);
    let noland = document.getElementById("noland");
    document.getElementById("land").style.display = "none";
   
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    if(videoData.results.length >=4){
      b=1;
      c=2
      d=3;
    }
    if(videoData.results.length >=3){
      b=1;
      c=2;
      d=2;
    }
    if(videoData.results.length >=2){
      b=1;
      c=1;
      d=1;
    }
    let stml;
    if(videoData.results.length == 0){
       stml = `
      <a onclick="closenav()">
      <svg xmlns="http://www.w3.org/2000/svg" width="5%" height="5%" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path id="back" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
    </a>
  
    <h1 class="movie-name">${title}</h1>
    <br>
<div class="header">
<iframe id="trailer" width="100%" height="450px" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="main">
<div class="pos">
  <img src="${IMG_URL+poster_path}" alt="">
  <a href="https://rzp.io/l/ZAD5TCZJC" target="_blank><button class="buy">BUY NOW${vote_average*20 + 9}</button></a>
  <a href="https://rzp.io/l/ZAD5TCZJC" target="_blank><button class="rent">RENT ${vote_average*10 + 5}</button></a>
  
</div>
<div class="discr">
  <h1>${title}</h1>
  <br>
  <span class="discription">
    ${overview}
  </span>
  <br>
  
  <div class="other-info">
    <div class="i"><h3>RATING: </h3> <p>${vote_average}</p></div>
    <div class="i"><h3>runtime: </h3> <p> 1h 55min</p></div>
    <div class="i"><h3>RELEASE DATE : </h3> <p>${release_date}</p></div>
    <div class="i"><h3>DIRECTOR : </h3> <p>Scott Derrickson</p></div>
    <div class="i"><h3>Generes: </h3> <p>Action</p></div>
    
  </div>
</div>

</div>
<br>
<h1 class="a">
Video,teasers and trailers
</h1>
<br>
<div class="trailer3">
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/HSzx-zryEgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/_QBmmalzCag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/mXkl2jjw47U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/Rf8LAYJSOL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
   `
    }
else{

  let v = videoData.results[0].key;
  let n = videoData.results[0].name;

     stml = `
      <a onclick="closenav()">
      <svg xmlns="http://www.w3.org/2000/svg" width="5%" height="5%" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path id="back" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
    </a>
  
    <h1 class="movie-name">${title}</h1>
    <br>
<div class="header">
<iframe id="trailer" width="100%" height="450px" src="https://www.youtube.com/embed/${v}" title="${n}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="main">
<div class="pos">
  <img src="${IMG_URL+poster_path}" alt="">
  
  <a href="https://rzp.io/l/ZAD5TCZJC" target="_blank"><button class="buy">BUY NOW${vote_average*20 + 9}</button></a>
  <a href="https://rzp.io/l/ZAD5TCZJC" target="_blank"><button class="rent">RENT ${vote_average*10 + 5}</button></a>
  
</div>
<div class="discr">
  <h1>${title}</h1>
  <br>
  <span class="discription">
    ${overview}
  </span>
  <br>
  
  <div class="other-info">
  <div class="i"><h3>RATING: </h3> <p>${vote_average}</p></div>
  <div class="i"><h3>runtime: </h3> <p> 1h 55min</p></div>
  <div class="i"><h3>RELEASE DATE : </h3> <p>${release_date}</p></div>
  <div class="i"><h3>DIRECTOR : </h3> <p>Scott Derrickson</p></div>
  <div class="i"><h3>Generes: </h3> <p>Action</p></div>
  
  </div>
</div>

</div>
<br>
<h1 class="a">
Video,teasers and trailers
</h1>
<br>
<div class="trailer3">
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[a].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[b].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[c].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="trailer2" width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[d].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
   `
}
 noland.innerHTML = stml ;
     document.getElementById("noland").style.display = "block";
  }
  )
   
}


function showmovies(data){
    main.innerHTML = ``;
    data.forEach(movie => {
       
        const {title , poster_path , vote_average , overview , id} = movie ;
        
        localStorage.setItem(title , JSON.stringify(movie));
        let movieel = document.createElement('div');
        movieel.classList.add('movie');
         movieel.innerHTML = `
         <button  id="${id}"> <img src="${IMG_URL+poster_path}" alt="${title}"></button>
         

       <div class="movie-info">
        <h3>${title}</h3>
        <span class="green">${vote_average}</span>
       </div>
       
 
         
         
         `
      main.appendChild(movieel);

      
      document.getElementById(id).addEventListener('click', () => {
        console.log(id)
        myfunction(movie)
      })

    });
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  
  console.log(searchTerm);
  if(searchTerm) {
      getmovies(searchURL+'&query='+searchTerm)
  }else{
      getmovies(API_URL);
  }

})


function closenav() {

  document.getElementById("noland").style.display = "none";
  document.getElementById("land").style.display = "block";
}


/* <a href="dr_strange.html" target="_blank" onclick="myfunction()"><img src="${IMG_URL+poster_path}" alt="${title}"></a> */