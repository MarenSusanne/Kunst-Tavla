// function updateBuyOnly() {
//   let print = ""

//   for (let i = 0; i < model.data.salesObjects.length; i++) {
//     print += /*HTML*/`
//     <div class="container_innerGallery">
//         <div>
//             <img src="${model.data.salesObjects[i].artId}" class="standardGalleryImageSize"/>
//         </div>
//     </div>
//     `
//   }
//   document.getElementById('appingtonTheSecond').innerHTML =*/ /*HTML*/ `
//     <div class="container_mainGallery">
//         <div id="galleryTitle">
//             <h2>Galleri</h2>
//         </div>
//         <div id="printGallery">
//             ${print}
//         </div>
//     </div>
//     `
// }

function printBuyView() {
    let print = ""
  
    for (let i = 0; i < model.data.salesObjects.length; i++) {
      print += /*HTML*/`
      <div class="container_innerGallery">
          <div>
              <img src="${model.data.salesObjects[i].artId}" class="standardGalleryImageSize"/>
              <div>${model.data.salesObjects[i].seller}</div>
              <div>${model.data.salesObjects[i].aboutPictureText}</div>
              <div>${model.data.categories[model.data.salesObjects[i].category]}</div>
              <div>${model.data.salesObjects[i].artistName}</div>
              <div>${model.data.salesObjects[i].price}</div>
          </div>
      </div>
      `
    }
    return print
  }
  
    function updateBuyOnly() {
    document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
      <div class="container_mainGallery">
          <div id="galleryTitle">
              <h2>Galleri</h2>
          </div>
          <div id="printGallery">
              ${printBuyView()}
              </div>
      </div>
      `
  }