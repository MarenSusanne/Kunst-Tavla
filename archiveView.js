function updateArchiveView(){
    let print = ""

    for (let i = 0; i < model.data.archivedSales.length; i++) {
      print += /*HTML*/`
      <div class="container_innerGallery">
          <div onclick="changeArtwork(${model.data.archivedSales[i].id})" >
              <img src="${model.data.archivedSales[i].artId}" class="standardGalleryImageSize"/>
          </div>
      </div>
      `
    }
    document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
      <div class="container_mainGallery">
          <div id="galleryTitle">
              <h2>Arkiv</h2>
          </div>
          <div id="printGallery">
              ${print}
          </div>
      </div>
      `;
}