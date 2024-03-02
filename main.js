// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// fecting movie
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQyOWMzNjRkMzM4OWViYTg4NzlkODRjYTMzNjVjMiIsInN1YiI6IjY1MzVkZGQ4NDJkODM3MDE0ZGI5N2RmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjWgDx92ObzJgyUU24T1_RtzDqmVzkPg6sewAJQRy54'
    }
};
const genreMap = {};
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(genreData => {
        genreData.genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
    })
    .catch(err => {
        console.log(err)
    });
let curr = "now_playing"

getdat(curr)
function getdat(api) {
    let apiurl = `https://api.themoviedb.org/3/movie/${api}?api_key=3c429c364d3389eba8879d84ca3365c2`
    fetch(apiurl)
        .then(d => {
            return d.json();
        })
        .then(data => {
            // console.log(data);
            console.log(data.results);
            newData = data.results;
            // const newData = newDatas.slice(10, 20)
            markup1 = ""
            for (const item in newData) {

                markup1 += `
              <div class="box">
             <div class="box-img">    
                 <img src="https://image.tmdb.org/t/p/w500${newData[item].poster_path}" alt="">
            </div>
           <h3>"${newData[item].title}"</h3>
         <span>Released on: ${newData[item].release_date}</span>
        <span>Rating:"${newData[item].vote_average}"</span> <br>
        <span>Genre:"${genreMap[newData[item].genre_ids[0]]}"</span> <br>
        <a href="#" id="btn"><i class='bx bx-play-circle'></i></a>
     </div>`
            }
            moviesconatiner.innerHTML = markup1;
        })
        .catch(err => {
            console.log(err)
        });
}
// fetching movie according to the option
let selectoptions = document.getElementById("selectoptions")
selectoptions.addEventListener('click', () => {
    curr = selectoptions.value;
    getdat(curr);
    console.log(curr);
    let heads = document.getElementById("heads")
    let selectedOption = selectoptions.options[selectoptions.selectedIndex].text;
    heads.innerText=`${selectedOption}`
})
// // Click function on url 
function myfun() {
    alert("You will be redirected to youtube")
}

// // fetching coming soon 
const options1 = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQyOWMzNjRkMzM4OWViYTg4NzlkODRjYTMzNjVjMiIsInN1YiI6IjY1MzVkZGQ4NDJkODM3MDE0ZGI5N2RmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjWgDx92ObzJgyUU24T1_RtzDqmVzkPg6sewAJQRy54'
    }
};
const genreMa = {};
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options1)
    .then(response => response.json())
    .then(genreData => {
        genreData.genres.forEach(genre => {
            genreMa[genre.id] = genre.name;
        });
    })
    .catch(err => {
        console.log(err)
    })

let url1 = fetch("https://api.themoviedb.org/3/discover/tv?api_key=3c429c364d3389eba8879d84ca3365c2")
url1.then(d => {
    return d.json();
})
    .then(data => {
        // console.log(data);
        console.log(data.results);
        newDatas = data.results;
        const newData = newDatas.slice(10, 20)
        markup1 = ""
        for (const item in newData) {

            markup1 += ` <div class="swiper-slide">
              <div class="box">
             <div class="box-img">    
                 <img src="https://image.tmdb.org/t/p/w500${newData[item].poster_path}" alt="">
            </div>
           <h3>"${newData[item].title}"</h3>
         <span>Releasing on:"${newData[item].release_date}"</span>
        <span>Rating:"${newData[item].vote_average}"</span> <br>
        <span>Genre:"${genreMa[newData[item].genre_ids[0]]}"</span>
     </div>
    </div>`
        }
        tvshow.innerHTML = markup1;
    })
    .catch(err => {
        console.log(err)
    });


// coming soon swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 2,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

if (window.innerWidth <= 800) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
else if (window.innerWidth <= 500) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 2,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
// let header=document.getElementsByTagName("header");
let menu_icon = document.getElementById("menu-icon")
let navbar = document.querySelector(".navbar")
window.addEventListener('scroll', function () {
    if (window.scrollY >= 15) {
        document.querySelector('header').style.backgroundColor = 'white'
        this.document.getElementById('menu-icon').style.color = "black"
    } else {
        document.querySelector('header').style.backgroundColor = 'transparent';
        this.document.getElementById('menu-icon').style.color = "white"
    }
});

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

window.onscroll = () => {
    menu_icon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


