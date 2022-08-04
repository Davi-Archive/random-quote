//pega json do servidor
const getJSON = async url => {
    const response = await fetch(url);
    if (!response.ok) { // ve a resposta do server ( 404 error etc...)
        throw new Error(response.statusText);
    } else {
        return response.json(); // pega o JSON da resposta
    }
}

console.log("Pegando dados do server...");
getJSON("https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json")
    .then(data => quotes = data);

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
];

var currentQuote = '';
var currentAuthor = '';

function getRandomQuote() {
    return quotes[
        Math.floor(Math.random() * quotes.length)
    ];
}

window.onload = function () {
    getJSON('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json').then(() => {
        newQuote();
    });
};

function newQuote() {
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quoteText;
    currentAuthor = randomQuote.quoteAuthor;
    /* console.log(currentQuote + ' - ' + currentAuthor) */
    document.getElementById("texto").innerText = currentQuote;
    document.getElementById("autor").innerText = currentAuthor;
    mudarLinkBotao()
    mudarCor()
}

function mudarLinkBotao() {
    document.getElementById("tweet-quote").href =
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
    document.getElementById("tweet-quote").target = '_BLANK'
    document.getElementById("tumblr-quote").href = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
        encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    document.getElementById("tumblr-quote").target = '_BLANK'
    return false;
}

function mudarCor(){                //muda cor randomicamente
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    document.getElementById("autor").style.color = colors[Math.floor(Math.random() * colors.length)]
}
