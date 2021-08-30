async function getJokes(){
    const joke = document.querySelector(".joke");
    const punchline = document.querySelector(".punchline");
    const jokeFetch = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const jokeFetchJson = await jokeFetch.json()
    joke.innerHTML = ""
    punchline.innerhtml =""
    joke.innerHTML = jokeFetchJson.setup
    punchline.innerHTML = jokeFetchJson.punchline
}


const button = document.querySelector("button");
button.addEventListener("click", () => getJokes())
