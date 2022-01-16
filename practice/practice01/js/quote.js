const quotes = [
    {
        quote: "포지션 제로!",
        author: "아이죠 카렌",
    },
    {
        quote: "99기생",
        author: "아이죠 카렌"
    },
    {
        quote: "오타쿠",
        author: "아이죠 카렌"
    },
    {
        quote: "오타쿠",
        author: "아이죠" 
    },
    {
        quote: "에베베",
        author: "ddd",
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
