const KEY = "53034ee5-b96a-4823-9474-eb1f1ad3d72e"
const API = "https://kinopoiskapiunofficial.tech/"
const ALL_FILMS = API + "api/v2.2/films/"
const FILTER_BY_NAME = API + "api/v2.1/films/search-by-keyword?keyword="
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
const DETAIL_FILMS = API + "api/v2.2/films/"
// console.log(DETAIL_FILMS);

const form = document.querySelector('form')
const input = document.getElementById('inp')
const output = document.getElementById('output')
const button = document.getElementById("btn")


const getFilms = async () => {
    const request = await fetch(ALL_FILMS + input.value, {
        method: 'GET',
        headers: {
            'X-API-KEY': KEY,
            'Content-Type': 'application/json',
        },
    })
    const response = await request.json()
    renderFilms(response.items);
    // console.log(response.items);
}

const getByName = async () => {
    const request = await fetch(FILTER_BY_NAME + input.value, {
        method: 'GET',
        headers: {
            'X-API-KEY': KEY,
            'Content-Type': 'application/json',
        },
    })
    const response = await request.json()
    renderFilms(response.films);
    // console.log(response.films);
}

const getById = async (id) => {
    const request = await fetch(DETAIL_FILMS + id, {
        method: 'GET',
        headers: {
            'X-API-KEY': KEY,
            'Content-Type': 'application/json',
        },
    })
    const response = await request.json()
    renderDetail(response);
}

const getPopular = async () => {
    const request = await fetch(API_URL_POPULAR, {
        method: 'GET',
        headers: {
            'X-API-KEY': KEY,
            'Content-Type': 'application/json',
        },

    })
    const response = await request.json()
    renderFilms(response.films);
    // console.log(response);


}

button.addEventListener("click", () => {
    getPopular();
})



// const getPopularId = async (id) => {
//     const request = await fetch(DETAIL_FILMS + id, {
//         method: 'GET',
//         headers: {
//             'X-API-KEY': KEY,
//             'Content-Type': 'application/json',
//         },
//     });
//     const response = await request.json();
//     renderPopularId(response.film);
//     console.log(response);
// }


// const renderPopularId = (film) => {
//     output.innerHTML = ""
//     // console.log(film);
//     const card = document.createElement("div")
//     const poster = document.createElement("img")
//     const title = document.createElement("h2")
//     const description = document.createElement("p")

//     poster.src = film.posterUrl
//     title.textContent = film.nameOriginal || film.nameRu
//     description.textContent = film.description

//     card.addEventListener("click", () => {
//         getPopularId(el.kinopoiskId || el.filmId);
//     })


//     card.append(poster, title, description)
//     output.append(card)

// }


const renderDetail = (film) => {
    output.innerHTML = ""
    // console.log(film);
    const card = document.createElement("div")
    const poster = document.createElement("img")
    const title = document.createElement("h2")
    const description = document.createElement("p")

    poster.src = film.posterUrl
    title.textContent = film.nameOriginal || film.nameRu
    description.textContent = film.description

    card.append(poster, title, description)
    output.append(card)

}


// const renderPopular = (popular) => {
//     output.innerHTML = ""
//     popular.map(el => {
//         // console.log(el);
//         const card = document.createElement("div")
//         const poster = document.createElement("img")
//         const title = document.createElement("h2")
//         poster.src = el.posterUrl
//         title.textContent = el.nameOriginal || el.nameRu

//         poster.style.width = "90%"

//         poster.style.height = "400px"
//         title.style.width = "200px"



//         button.addEventListener("click", () => {
//             getPopular(el.films);
//         })


//         card.append(poster, title)
//         output.append(card)

//     })

// }



const renderFilms = (movies) => {
    output.innerHTML = ""
    movies.map(el => {
        // console.log(el);
        const card = document.createElement("div")
        const poster = document.createElement("img")
        const title = document.createElement("h2")
        poster.src = el.posterUrl
        title.textContent = el.nameOriginal || el.nameRu

        poster.style.width = "90%"

        poster.style.height = "400px"
        title.style.width = "200px"



        card.addEventListener("click", () => {
            getById(el.kinopoiskId || el.filmId);
        })

        card.append(poster, title)
        output.append(card)

    })

}






form.addEventListener("submit", (event) => {
    event.preventDefault()
    getByName()
})



getPopular()
getFilms()




