async function getCatPics() {
    const imageContainer = document.querySelector(".catpics");
    const catPics = await fetch("https://cataas.com/cat");
    const jsonCatPics = await catPics.json();

    imageContainer.src = jsonCatPics.image;
    
    return jsonCatPics
}


const catButton = document.querySelector(".catbutton");
catButton.addEventListener("click", () => getCatPics());




