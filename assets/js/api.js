export function News(qnt) {
    window.addEventListener('load', async () => {
        const key = 'd7121728556e4995b6cb48360c520005';

        const res = await fetch(`https://newsapi.org/v2/everything?q=_&language=pt&pageSize=${qnt}&apiKey=${key}`)
        const api = await res.json()
        console.log(api);
    })
}