const output = document.getElementById("quote");
const hidden = document.getElementById("loading");
const button = document.getElementById("generate-btn");
const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Act as if what you do makes a difference. It does. – William James",
    "Everything you can imagine is real. – Pablo Picasso",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "What we think, we become. – Buddha",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Don’t wait. The time will never be just right. – Napoleon Hill",
    "Dream big and dare to fail. – Norman Vaughan",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "Everything has beauty, but not everyone sees it. – Confucius",
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    "Do not pray for an easy life, pray for the strength to endure a difficult one. – Bruce Lee",
    "A journey of a thousand miles begins with a single step. – Lao Tzu"
];

button.addEventListener("click", load);

function load() {
    return new Promise((resolve) => {
        output.innerText = "...";
        setTimeout(() => {
            output.innerText = quotes[Math.floor(Math.random() * quotes.length)];
            hidden.classList.add("hidden");
            resolve("lets go bro");
        }, 3000);
        hidden.classList.remove("hidden");
    });
}
