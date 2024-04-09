function init(){
    generateDog();
    addRandomEventButton ();
}

async function generateDog(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const jsonResponse = await response.json();
    addDogimgToDisplay(jsonResponse);
}

 function addDogimgToDisplay(json){
    const tagImgDog = document.querySelector('.dog-img')
    tagImgDog.setAttribute('src',  json.message);
    tagImgDog.classList.add('dog-img')
}

function addRandomEventButton (){
    const btnRandom = document.querySelector(".btn-random-dog");
    btnRandom.addEventListener('click', ()=>{
            generateDog();
        })
}

init();