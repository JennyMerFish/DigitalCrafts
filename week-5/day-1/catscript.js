// https://official-joke-api.appspot.com/jokes/random
// https://cataas.com/cat?json=true
// https://dog.ceo/api/breeds/image/random
async function getCats() {
    const catPicturesBox = document.querySelector(".cat-pictures");
    const catPictures = await fetch("https://cataas.com/cat?json=true");
    const catPicturesJson = await catPictures.json();
    const catPicture = document.createElement("img")
    catPicturesBox.innerHTML =""
    catPicture.src = ("https://cataas.com" + catPicturesJson.url)
    catPicturesBox.append(catPicture)
    console.log(catPicture);
}


const catButton = document.querySelector(".button");
catButton.addEventListener("click", () => getCats())
