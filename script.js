const playList = [

    {
        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN",

        url: "https://i1.sndcdn.com/artworks-000094079983-w2pr1t-t500x500.jpg"
    },

    {
        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY",

        url: "https://cdn.images.express.co.uk/img/dynamic/35/590x/Queen-Bohemian-Rhapsody-lyrics-misheard-lines-1397579.webp?r=1613308555434"
    },

    {
        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD",

        url: "https://upload.wikimedia.org/wikipedia/en/6/6f/Lynyrd-Skynyrd-Free-Bird.jpg"
    },

    {
        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER",

        url: "https://upload.wikimedia.org/wikipedia/ru/6/66/Smoke_on_the_Water.jpg"
    },

    {
        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER",

        url: "https://i.discogs.com/S5oliv3MG55odUkGAudzpCMNZNR4k4JKS0mzOplVF9c/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyNjE1/MTQtMTM2MDAyNTU4/Mi03OTg0LmpwZWc.jpeg"
    },

    {
        author: "AC/DC",

        song: "BACK IN BLACK",

        url: "https://upload.wikimedia.org/wikipedia/commons/b/be/Acdc_backinblack_cover.jpg"
    },

    {
        author: "QUEEN",

        song: "WE WILL ROCK YOU",

        url: "https://upload.wikimedia.org/wikipedia/ru/e/ea/We_Will_Rock_You_2.jpg"
    },

    {
        author: "METALLICA",

        song: "ENTER SANDMAN",

        url: "https://upload.wikimedia.org/wikipedia/ru/c/c2/Metallica_Album.jpg"
    }

];


const out = document.querySelector('.songs__container');

let newPlayList = [...playList];



function createSong(song) {
    let songItem = document.createElement('div');
    let songAuthor = document.createElement('h3');
    let songName = document.createElement('h2');
    let songImg = document.createElement('img');


    songItem.classList.add('song__item');
    songAuthor.classList.add('song__author');
    songName.classList.add('song__name');
    songImg.classList.add('song__img');


    songAuthor.innerText = song.author;
    songName.innerText = song.song;
    songImg.setAttribute('src', song.url);


    songItem.append(songName, songAuthor, songImg);
    return songItem;
}

playList.map((i) => {
    let newSong = createSong(i)
    out.append(newSong)
});