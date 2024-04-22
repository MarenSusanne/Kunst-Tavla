
function updateGalleryView() {
  let print = ""

  for (let i = 0; i < model.data.artObject.length; i++) {
    print += /*HTML*/`
    <div class="container_innerGallery">
        <div>
            <img src="${model.data.artObject[i].artPicture}" class="standardGalleryImageSize"/>
        </div>
    </div>
    `
  }
  document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div class="container_mainGallery">
        <div id="galleryTitle">
            <h2>Galleri</h2>
        </div>
        <div id="printGallery">
            ${print}
        </div>
    </div>
    `
}



/* REFERANSE */


/*
function printGameLibrary (){

  let result = '';

      for (let i = 0; i < myGames.length; i++) {
      result += 
      `<div class="game">
      <img src="${myGames[i].image}"/>
      <div class="gameInfo">
        <li>${myGames[i].title}
          <li>${myGames[i].category}
            <li>${myGames[i].releasYear}
              <li>${myGames[i].platform}
      </div>
      </div>`; 
      }
      return result;
}
*/