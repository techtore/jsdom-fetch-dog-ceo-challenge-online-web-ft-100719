console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    loadImages()
    fecthDogBreeds()
});

    function loadImages(){
    fetch('https://dog.ceo/api/breeds/image/random/4') 
      .then(function(response){
          return response.json()
      })
      .then(function(jsonData){

          renderImage(jsonData);
      })
    }
    function renderImage(jsonData){
        let dogContainer = document.getElementById('dog-image-container')
        jsonData.message.forEach((imageUrl) => {

        let newImage = document.createElement('img')
            newImage.src = `${imageUrl}`
        dogContainer.appendChild(newImage)
        })
    }

    function fecthDogBreeds(){
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let breeds = Object.keys(jsonData.message);
            renderBreed(breeds); 
        });
    }

    function renderBreed(breeds) {
        let ul = document.getElementById("dog-breeds")

        breeds.forEach((breed) => {
        let li = document.createElement('li')
                li.textContent = `${breed}`
            ul.appendChild(li)

           
            li.addEventListener('click', function(){this.style.color = 'blue';
            });
            
        })
    }

    //not yet working
    // function filterByLetter(breeds){
    //     let dropDown = document.getElementById("breed-dropdown")
    //     dropDown.addEventListener('select', function(e){
    //         let selectedLetter = e.target.value
    //         let selectedBreeds = breeds.filter(breed => breed.startsWith(selectedLetter))
    //         let selectedBreedsUl = document.getElementById("dog-breeds")

    //         selectedBreeds.forEach(function(selectBreed){
    //             let li = document.createElement('li')
    //             li.textContent = `${selectBreed}`
    //             selectedBreedsUl.appendChild(li)
    //         })
    //     })
    
        
    // }


