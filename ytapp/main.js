// baseUrl/functionality?p1=v1&p2=v2&p3=v3
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB3LkS1ru9KjWKLNC7RyrXZeHreSY3hs6M&part=snippet&q=Hello

document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-text').value
    console.log(text)
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_2CwII3K3NSMxEUzr-XizxknlEvr0N5s&part=snippet&q=${text}&maxResults=50`
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open('GET', 'https://show-air-dates.p.rapidapi.com/next31days');
    xhr.setRequestHeader('X-RapidAPI-Key', '6d0ecc3feemshe845b0a2a8097c8p1b5c80jsn7ff9f66798c4');
    xhr.setRequestHeader('X-RapidAPI-Host', 'show-air-dates.p.rapidapi.com');
    
    xhr.send(data);

