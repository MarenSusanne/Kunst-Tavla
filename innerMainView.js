//updateInnerMainView()
function updateInnerMainView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div id="appingtonTheInnerMain">
        <div class="item" id="auctions">
            <h1>Auksjoner</h1>
           
            <button onclick="addSaleObjekt()">Legg Til Objekt</button>
        </div>
        <div class="item" id="news">
            <h1>Nyheter</h1>
        </div>
        <div class="item" id="welcome">
            <h1>Velkommen til oss!</h1>

            <h3>Hvem er vi</h3>
            <p></p>
            <h3>Hva jobber vi med</h3>
            <p></p>
            <h3>Hvem jobber vi med</h3>
            <p></p>
        </div>
    </div>
    `
}

