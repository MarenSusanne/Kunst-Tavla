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
    let print = "";
//    if (model.inputs.chosenFilter == 'null'){
    for (let i = 0; i < model.data.salesObjects.length; i++) {
      print += /*HTML*/`
      <div class="container_innerBuyGallery">
        <img src="${model.data.salesObjects[i].artId}" class="standardBuyImageSize"/>
          <div class="innerInfo">
            <h3 class="container_text">${model.data.salesObjects[i].aboutPictureText}</h3>
            <div>Selger: ${model.data.salesObjects[i].seller}</div>
            <div>${model.data.categories[model.data.salesObjects[i].category]}</div>
            <div>Kunstner: ${model.data.salesObjects[i].artistName}</div>
            <div>${model.data.salesObjects[i].price},-</div>
          </div>
      </div>
      `} 
      console.log("if")
/*    } else {
      for (let i = 0; i < model.data.salesObjects.length; i++) {
        if(model.data.salesObjects.category == model.inputs.chosenFilter){
          print += /*HTML*//*`
      <div class="container_innerBuyGallery">
        <img src="${model.data.salesObjects[i].artId}" class="standardBuyImageSize"/>
          <div class="innerInfo">
            <h3 class="container_text">${model.data.salesObjects[i].aboutPictureText}</h3>
            <div>Selger: ${model.data.salesObjects[i].seller}</div>
            <div>${model.data.categories[model.data.salesObjects[i].category]}</div>
            <div>Kunstner: ${model.data.salesObjects[i].artistName}</div>
            <div>${model.data.salesObjects[i].price},-</div>
          </div>
      </div>
      `
        }
    }
  }*/
    return print
  }
  
    function updateBuyOnly() {
    document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
   
      <div class="container_mainGallery">
          <div id="galleryTitle">
              <h2>Galleri</h2>
          </div>
          <div id="printBuyGallery">
              ${printBuyView()}
              </div>
      </div>
      `
  }
  // function printOptions(){
  //   let print = "<option selected value=null>Velg Kategori</option>";
  //   for (let i = 0; i < model.data.categories.length; i++) {
  //     print += /*HTML*/`
  //       <option ${model.app.chosenGenre == i ? 'selected' : ''} value="${i}">${model.data.categories[i]}</option>
  //     `
  //   }
  //   return print
  // }

  //  <select class="buyFilter" onchange="chooseCategory(this.value)">
  //     ${printOptions()}
  //   </select>