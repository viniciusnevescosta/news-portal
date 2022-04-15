"use strict";

// splash screen
import { splash } from './splash.js';
splash();

// News api
import { newsApi } from './news.js';
newsApi()

// navbar
import { navBar } from './navBar.js';
navBar();

// search
const searchBar = document.querySelector('.search__input');
const key = "OXTZvmvSotcEv9FTrGzTfPfbql5Vgxr7R5Ga4TMjW_o";

searchBar.addEventListener('input', async e => {
    e.preventDefault;
    let type = searchBar.value;
    
    if(type !== '') {
        const res = await fetch(`https://api.currentsapi.services/v1/search?keywords=${type}&page_size=language=pt&apiKey=${key}`)

        const api = await res.json();
        console.log(api);
    }
})

// metatag
import { metatag } from './unsplash.js';
metatag();