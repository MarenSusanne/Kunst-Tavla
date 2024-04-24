function printCheckpointView() {
  let print = ""

  for (let i = 0; i < model.data.salesObjectsToCheck.length; i++) {
    print += /*HTML*/`
    <div class="container_innerGallery">
        <div>
            <img src="${model.data.salesObjectsToCheck[i].artId}" class="standardGalleryImageSize"/>
            <button onclick="acceptInput(${i})">Aksepter</button>
            <button onclick="declineInput(${i})">Avslå</button>
        </div>
    </div>
    `
  }
  return print
}

  function updateAdminCheckpointView() {
  document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div class="container_mainGallery">
        <div id="galleryTitle">
            <h2>Til Godkjenning</h2>
        </div>
        <div id="printGallery">
            ${printCheckpointView()}
            </div>
    </div>
    `
}

