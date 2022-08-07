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
    let v = videoData.results[0].key;
    let n = videoData.results[0].name;
    let stml = `
    <a onclick="closenav()">
    <svg xmlns="http://www.w3.org/2000/svg" width="5%" height="5%" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
      <path id="back" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
    </svg>
  </a>

    <div class="header">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${v}" title="${n}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
 
      <div class="main">
 <ul>
  
  <li>
    <a href=""><img src="${IMG_URL+poster_path}" alt=""></a> 
 
  </li>
 
  <li>
    <div class="des">
      <h2>${title}</h2>
      <h4>watch on </h4>
      <ul class="dis">
        <li> <a href="https://play.google.com/store/movies/details/Doctor_Strange_2016?gl=IN&hl=en&id=U_u8MzNZ7TA" target="_blank"><img src="https://images.justwatch.com/icon/169478387/s100/icon.webp" alt=""></a> </li>
        <li> <a href="https://www.youtube.com/results?search_query=Doctor+Strange+%282016%29%2Bmovie" target="_blank"><img src="https://images.justwatch.com/icon/59562423/s100/icon.webp" alt=""></a></li>
        <li><a href="https://watch.tataplay.com/video/doctor-strange/345273/CUSTOM-MOVIES-DETAIL?pageType=movies-home" target="_blank"><img src="https://images.justwatch.com/icon/286806073/s100/icon.webp" alt=""></a></li>
        <li><a href="https://tv.apple.com/in/movie/doctor-strange/umc.cmc.1pr69aixggljcme3mjh826zj6?at=1000l3V2&ct=justwatch_tv&playableId=tvs.sbd.9001%3A1164294784" target="_blank"><img src="https://images.justwatch.com/icon/190848813/s100/icon.webp" alt=""></a></li>
      </ul>
      <h4> VIDEOS , TEASERS , TRAILERS</h4>
     <div>
      <iframe width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[1].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[2].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="48%" height="315" src="https://www.youtube.com/embed/${videoData.results[3].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
  
      </div>
    </div>
    
  
  </li>
 </ul>
 <div class="info">
  <div><h4>RATING : </h4> <p> ${vote_average}</p></div>
 <div><h4>GENRES : </h4> <p> ${overview}</p></div>
 <div> <h4>RUN TIME : </h4> <p> 1h 55min</p></div>
 <div> <h4>AGE RATING : </h4> <p> UA</p></div>
 <div> <h4>DIRECTOR : </h4> <p>Scott Derrickson</p></div>
 <div> <h4>RELEASE DATE : </h4> <P>${release_date}</P></div>
 <div><button type="button" class="btn btn-success">BUY</button>
  <button type="button" class="btn btn-primary">RENT</button>
</div>
 
 </div>
 </div>
 `
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
       <div class="overview"> ${overview} </div>
 
         
         
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