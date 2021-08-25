async function getCatPics() {
    const imageContainer = document.querySelector(".catpics");
    const catPics = await fetch("https://cataas.com/cat?json=true");
    const jsonCatPics = await catPics.json();

    imageContainer.src = ("https://cataas.com" + jsonCatPics.url);
    console.log(jsonCatPics);
    return jsonCatPics
}


const catButton = document.querySelector(".catbutton");
catButton.addEventListener("click", () => getCatPics());






