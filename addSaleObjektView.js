function addSaleObjekt() {
    document.getElementById('appingtonTheSecond').innerHTML = /*HTML*/ `
    <div>
        <input onchange="newInputSeller(this.value)" placeholder="Selgers Navn"><br>
        <input onchange="newInputArtId(this.value)" placeholder="Bildets Link"><br>
        <input onchange="newInputAboutPictureText(this.value)" placeholder="Om Bildet"><br>
        <select onchange="chooseCategory(this.value)"> ${printOptions()} </select><br>
        <input onchange="newInputArtistName(this.value)" placeholder="Kunstneren"><br>
        <input onchange="newInputPrice(this.value)" placeholder="Pris">
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

