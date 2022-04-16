export function newsApi() {
    class Noticia {
        constructor(publishedAt, source, title, url, urlToImage, id) {
            this.publishedAt = publishedAt;
            this.source = source;
            this.title = title;
            this.url = url;
            this.urlToImage = urlToImage;
            this.id = id
        }
        post() {
            const a = document.createElement('a');
            a.href = this.url;
            a.target = '_blank';
            a.rel = 'noreferrer noopener'
            a.classList.add('main__card');
            a.id = this.id;

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

            const place = document.querySelector('.main__container');
            place.appendChild(a);

            // scroll reveal
            ScrollReveal({ reset: true });
            ScrollReveal().reveal(`#${this.id}`, { duration: 1000, interval: 100, scale: 0.85});
        }
    }
    
    class Trend extends Noticia {
        constructor(publishedAt, source, title, url, urlToImage, description) {
            super(publishedAt, source, title, url, urlToImage);
            this.description = description;
        }
        post() {
            const a = document.createElement('a');
            a.href = this.url;
            a.target = '_blank';
            a.rel = 'noreferrer noopener'
            a.classList.add('main__cover');

            const img = document.createElement('div');
            img.classList.add('main__cover__impact');
            img.style.backgroundImage = 'url('+this.urlToImage+')';
            img.style.backgroundRepeat = 'no-repeat';
            img.style.backgroundSize = 'cover';
            a.appendChild(img);

            const title = document.createElement('h3');
            title.classList.add('main__h3');
            title.innerText = this.title
            img.appendChild(title);

            const channel = document.createElement('div');
            channel.classList.add('main__channel');
            img.appendChild(channel);

            const date = document.createElement('p');
            date.innerText = this.publishedAt;
            channel.appendChild(date);

            const source = document.createElement('p');
            source.innerText = this.source;
            channel.appendChild(source);

            const info = document.createElement('div');
            info.classList.add('main__info');

            const p = document.createElement('p');
            p.innerText = this.description;
            info.appendChild(p)

            const place = document.querySelector('.main__content');

            place.appendChild(a);
            place.appendChild(info);
        }
    }

    // f -> postar notícia
    function postNew(place) {
        place.forEach((e, news) => {
            news = new Noticia(e.published, e.author, e.title, e.url, e.image, e.id);
            news.post()
        });   
    }

    // API AJAX
    const key = 'OXTZvmvSotcEv9FTrGzTfPfbql5Vgxr7R5Ga4TMjW_o-My7p';

    window.addEventListener('load', async () => {   
        // News request
        const res = await fetch(`https://api.currentsapi.services/v1/search?page_size=6&language=pt&apiKey=${key}`);
        const api = await res.json()
        postNew(api.news)

        // Trend notice
        const nTrend = new Trend(api.news[0].published, api.news[0].author, api.news[0].title, api.news[0].url, api.news[0].image, api.news[0].description)
        nTrend.post()
    })

    // infinte scroll
    let n = 1;

    window.addEventListener('scroll', async () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        if (scrollTop + clientHeight >= scrollHeight -5) {
            n++
            const res = await fetch(`https://api.currentsapi.services/v1/search?page_number=${n}&page_size=6&language=pt&apiKey=${key}`);
            const api = await res.json()

            postNew(api.news)
        }
    })
}