function addSaleObjekt() {
    document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div id="allInputs">
        <select id="chooseYourInputCategory" onchange="chooseInputCategory(this.value)"> ${printSalesOptions()} </select><br>
        <input id="theNameOfSeller" onchange="newInputSeller(this.value)" placeholder="Selgers Navn"><br>
        <input id="artPictureLink" onchange="newInputArtId(this.value)" placeholder="Bildets Link"><br>
        <input id="artPictureAltText" onchange="newInputAboutPictureText(this.value)" placeholder="Om Bildet"><br>
        <select id="chooseYourCategory" onchange="chooseCategory(this.value)"> ${printOptions()} </select><br>
        <input id="theNameOfArtist" onchange="newInputArtistName(this.value)" placeholder="Kunstneren"><br>
        <input id="putInYourPrice" onchange="newInputPrice(this.value)" placeholder="Pris"><br>
        <input id="putInYourDate" onchange="newInputCountdownDate(this.value)" type="datetime-local" >
    </div>
    <button onclick="addNewItem()">legg til salgs</button>
    <div class="container_innerGallery">
        <div>
            <img src="${model.data.newInputSalesObjekt.artId}" class="standardGalleryImageSize"/>
            <div>${model.data.newInputSalesObjekt.seller}</div>
            <div>${model.data.newInputSalesObjekt.aboutPictureText}</div>
            <div>${model.data.categories[model.inputs.chosenCategory] ?? ''}</div>
            <div>${model.data.newInputSalesObjekt.artistName}</div>
            <div>${model.data.newInputSalesObjekt.price}</div>
        </div>
    </div>
    `
}