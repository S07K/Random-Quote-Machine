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
    '#73A857'
]

const quotes = [
    {
        quote: 'Life isn’t about getting and having, it’s about giving and being.',
        author: 'Kevin Kruse'
    },
    {
        quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
        author: 'Napoleon Hill'
    },
    {
        quote:"Strive not to be a success, but rather to be of value.",
        author:"Albert Einstein"
    },
    {
        quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author:"Robert Frost"
    },
    {
        quote:"I attribute my success to this: I never gave or took any excuse.",
        author:"Florence Nightingale"
    },
    {
        quote:"You miss 100% of the shots you don’t take.",
        author:"Wayne Gretzky"
    },
    {
        quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        author:"Michael Jordan"
    },
    {
        quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",
        author:"Amelia Earhart"
    },
    {
        quote:"Every strike brings me closer to the next home run.",
        author:"Babe Ruth"
    },
    {
        quote:"Definiteness of purpose is the starting point of all achievement.",
        author:"W. Clement Stone"
    },
    {
        quote:"We must balance conspicuous consumption with conscious capitalism.",
        author:"Kevin Kruse"
    },
    {
        quote:"Life is what happens to you while you’re busy making other plans.",
        author:"John Lennon"
    },
    {
        quote:"We become what we think about.",
        author:"Earl Nightingale"
    },
    {
        quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        author:"Mark Twain"
    },
    {
        quote:"Life is 10% what happens to me and 90% of how I react to it.",
        author:"Charles Swindoll"
    }
]


const randomcolor = () => {
    let r = Math.floor(Math.random() * colors.length);
    return(
        colors[r]
    );
}

let bg = (document).querySelector("body");
let text1 = document.querySelector("#text");
let text2 = document.querySelector("#author");
let text3 = document.querySelector("#tweet-quote");
let btn = document.querySelector("#new-quote");

const changecolor = () => {
    const c = randomcolor();
    bg.style.background = c;
    text1.style.color = c;
    text2.style.color = c;
    text3.style.background = c;
    btn.style.background = c;
}

changecolor();


const randomno = () => {
    let r = Math.floor(Math.random() * quotes.length);
    return r;
}


let text = document.querySelector("#text");
let author = document.querySelector("#author");

const changequote = () => {
    let i = randomno();
    let currquote = '" ' + quotes[i].quote + ' "'; 
    text.innerHTML = currquote;
    let currauthor = '- ' + quotes[i].author; 
    author.innerHTML = currauthor;
}

changequote();