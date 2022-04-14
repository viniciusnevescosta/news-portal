"use strict";

// splash screen
import { splash } from './splash.js';
splash();

// navbar
import { navBar } from './navBar.js';
navBar();

// News api
window.addEventListener('load', async () => {
    const key = 'gty4xnWm5frII1lPelzSizLPzEvBNZH3lKNLedu-9MRl2ogw';

    const res = await fetch(`https://api.currentsapi.services/v1/search?language=pt&apiKey=${key}`);
    const api = await res.json()

    console.log(api)

    class Noticia {
        constructor(publishedAt, source = null, title, url, urlToImage) {
            this.publishedAt = publishedAt;
            this.source = source;
            this.title = title;
            this.url = url;
            this.urlToImage = urlToImage;
        }
        postar(place) {
            const a = document.createElement('a');
            a.href = this.url;
            a.target = '_blank';
            a.rel = 'noreferrer noopener'
            a.classList.add('main__card');

            const img = document.createElement('div');
            img.classList.add('main__card__img');
            img.style.backgroundImage = 'url('+this.urlToImage+')';
            a.appendChild(img);

            const title = document.createElement('div');
            title.classList.add('main__card__title');
            a.appendChild(title);

            const h4 = document.createElement('h4');
            h4.innerText = this.title;
            title.appendChild(h4);

            const channel = document.createElement('div');
            channel.classList.add('main__channel');
            a.appendChild(channel);

            const date = document.createElement('p');
            date.innerText = this.publishedAt;
            channel.appendChild(date);

            const source = document.createElement('p');
            source.innerText = this.source;
            channel.appendChild(source);

            place.appendChild(a);

            // scroll reveal
            ScrollReveal({ reset: true });
            ScrollReveal().reveal('.main__card', { duration: 1000, interval: 100, scale: 0.85});
        }
    }
    
    class Trend extends Noticia {
        constructor(publishedAt, source, title, url, urlToImage, description = null) {
            super(publishedAt, source, title, url, urlToImage);
            this.description = description;
        }
    }
    
    const oi = new Noticia(api.news[0].published, api.news[0].author, api.news[0].title, api.news[0].url, api.news[0].image);
    const oi2 = new Noticia(api.news[1].published, api.news[1].author, api.news[1].title, api.news[1].url, api.news[1].image);
    const oi3 = new Noticia(api.news[2].published, api.news[2].author, api.news[2].title, api.news[2].url, api.news[2].image);
    const oi4 = new Noticia(api.news[3].published, api.news[3].author, api.news[3].title, api.news[3].url, api.news[3].image);
    const oi5 = new Noticia(api.news[4].published, api.news[4].author, api.news[4].title, api.news[4].url, api.news[4].image);
    const oi6 = new Noticia(api.news[5].published, api.news[5].author, api.news[5].title, api.news[5].url, api.news[5].image);
    const oi7 = new Noticia(api.news[6].published, api.news[6].author, api.news[6].title, api.news[6].url, api.news[6].image);
    const oi8 = new Noticia(api.news[7].published, api.news[7].author, api.news[7].title, api.news[7].url, api.news[7].image);
    const oi9 = new Noticia(api.news[8].published, api.news[8].author, api.news[8].title, api.news[8].url, api.news[8].image);
    const oi10 = new Noticia(api.news[9].published, api.news[9].author, api.news[9].title, api.news[9].url, api.news[9].image);
    const oi11 = new Noticia(api.news[10].published, api.news[10].author, api.news[10].title, api.news[10].url, api.news[10].image);
    const oi12 = new Noticia(api.news[11].published, api.news[11].author, api.news[11].title, api.news[11].url, api.news[11].image);
    const oi13 = new Noticia(api.news[12].published, api.news[12].author, api.news[12].title, api.news[12].url, api.news[12].image);
    const oi14 = new Noticia(api.news[13].published, api.news[13].author, api.news[13].title, api.news[13].url, api.news[13].image);
    const oi15 = new Noticia(api.news[14].published, api.news[14].author, api.news[14].title, api.news[14].url, api.news[14].image);
    const oi16 = new Noticia(api.news[15].published, api.news[15].author, api.news[15].title, api.news[15].url, api.news[15].image);
    const oi17 = new Noticia(api.news[16].published, api.news[16].author, api.news[16].title, api.news[16].url, api.news[16].image);
    const oi18 = new Noticia(api.news[17].published, api.news[17].author, api.news[17].title, api.news[17].url, api.news[17].image);
    const oi19 = new Noticia(api.news[18].published, api.news[18].author, api.news[18].title, api.news[18].url, api.news[18].image);
    const oi20 = new Noticia(api.news[19].published, api.news[19].author, api.news[19].title, api.news[19].url, api.news[19].image);
    const oi21 = new Noticia(api.news[20].published, api.news[20].author, api.news[20].title, api.news[20].url, api.news[20].image);
    const oi22 = new Noticia(api.news[21].published, api.news[21].author, api.news[21].title, api.news[21].url, api.news[21].image);
    const oi23 = new Noticia(api.news[22].published, api.news[22].author, api.news[22].title, api.news[22].url, api.news[22].image);
    const oi24 = new Noticia(api.news[23].published, api.news[23].author, api.news[23].title, api.news[23].url, api.news[23].image);
    const oi25 = new Noticia(api.news[24].published, api.news[24].author, api.news[24].title, api.news[24].url, api.news[24].image);
    const oi26 = new Noticia(api.news[25].published, api.news[25].author, api.news[25].title, api.news[25].url, api.news[25].image);
    const oi27 = new Noticia(api.news[26].published, api.news[26].author, api.news[26].title, api.news[26].url, api.news[26].image);
    const oi28 = new Noticia(api.news[27].published, api.news[27].author, api.news[27].title, api.news[27].url, api.news[27].image);
    const oi29 = new Noticia(api.news[28].published, api.news[28].author, api.news[28].title, api.news[28].url, api.news[28].image);
    // const oi30 = new Noticia(api.news[30].published, api.news[30].author, api.news[30].title, api.news[30].url, api.news[30].image);

    const container = document.querySelector('.main__container');

    oi.postar(container)
    oi2.postar(container)
    oi3.postar(container)
    oi4.postar(container)
    oi5.postar(container)
    oi6.postar(container)
    oi7.postar(container)
    oi8.postar(container)
    oi9.postar(container)
    oi10.postar(container)
    oi11.postar(container)
    oi12.postar(container)
    oi13.postar(container)
    oi14.postar(container)
    oi15.postar(container)
    oi16.postar(container)
    oi17.postar(container)
    oi18.postar(container)
    oi19.postar(container)
    oi20.postar(container)
    oi21.postar(container)
    oi22.postar(container)
    oi23.postar(container)
    oi24.postar(container)
    oi25.postar(container)
    oi26.postar(container)
    oi27.postar(container)
    oi28.postar(container)
    oi29.postar(container)
    // oi30.postar(container)
})

// infite scroll
import { scroll } from './infiniteScroll.js';
scroll();