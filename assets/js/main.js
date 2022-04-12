"use strict";

// splash screen
import { splash } from './splash.js';
splash();

// navbar
import { navBar } from './navBar.js';
navBar();

// News api
window.addEventListener('load', async () => {
    const key = 'd7121728556e4995b6cb48360c520005';

    const res = await fetch(`https://newsapi.org/v2/everything?q=_&language=pt&pageSize=8&apiKey=${key}`)
    const api = await res.json()

    class Noticia {
        constructor(publishedAt, source, title, url, urlToImage) {
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
        }
    }
    
    class Trend extends Noticia {
        constructor(publishedAt, source, title, url, urlToImage, description = null) {
            super(publishedAt, source, title, url, urlToImage);
            this.description = description;
        }
    }
    
    const oi = new Noticia(api.articles[0].publishedAt, api.articles[0].source.name, api.articles[0].title, api.articles[0].url, api.articles[0].urlToImage);

    const oi2 = new Noticia(api.articles[1].publishedAt, api.articles[1].source.name, api.articles[1].title, api.articles[1].url, api.articles[1].urlToImage);

    const oi3 = new Noticia(api.articles[2].publishedAt, api.articles[2].source.name, api.articles[2].title, api.articles[2].url, api.articles[2].urlToImage);

    const oi4 = new Noticia(api.articles[3].publishedAt, api.articles[3].source.name, api.articles[3].title, api.articles[3].url, api.articles[3].urlToImage);

    const oi5 = new Noticia(api.articles[4].publishedAt, api.articles[4].source.name, api.articles[4].title, api.articles[4].url, api.articles[4].urlToImage);

    const oi6 = new Noticia(api.articles[5].publishedAt, api.articles[5].source.name, api.articles[5].title, api.articles[5].url, api.articles[5].urlToImage);

    const oi7 = new Noticia(api.articles[6].publishedAt, api.articles[6].source.name, api.articles[6].title, api.articles[6].url, api.articles[6].urlToImage);

    const oi8 = new Noticia(api.articles[7].publishedAt, api.articles[7].source.name, api.articles[7].title, api.articles[7].url, api.articles[7].urlToImage);

    const container = document.querySelector('.main__container');
    oi.postar(container)
    oi2.postar(container)
    oi3.postar(container)
    oi4.postar(container)
    oi5.postar(container)
    oi6.postar(container)
    oi7.postar(container)
    oi8.postar(container)
})



// infite scroll
import { scroll } from './infiniteScroll.js';
scroll();