//updateArtistView()
function updateArtistView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div id="para">
        <div class="artistRow" id="kunstner_1">
            <div class="artistProfileProportions">picture</div>
            <div class="artistTekstContainer">
                <h2 id="artistName">Kunstner</h2>
                <div id="artistBio">
                bio/beskrivelsesteksten(marius)
                </div>
            </div>
        </div>
        <div class="artistRow" id="kunstner_1">
            <div class="artistProfileProportions">picture</div>
            <div class="artistTekstContainer">
                <h2 id="artistName">Kunstner</h2>
                <div id="artistBio">bio/beskrivelsesteksten(marius)</div>
            </div>
        </div>
        <div class="artistRow" id="kunstner_1">
            <div class="artistProfileProportions">picture</div>
            <div class="artistTekstContainer">
                <h2 id="artistName">Kunstner</h2>
                <div id="artistBio">bio/beskrivelsesteksten(marius)</div>
            </div>
        </div>
        <div class="artistRow" id="kunstner_1">
            <div class="artistProfileProportions">picture</div>
            <div class="artistTekstContainer">
                <h2 id="artistName">Kunstner</h2>
                <div id="artistBio">bio/beskrivelsesteksten(marius)</div>
        </div>
    </div>
    </div>
    `;
}

/*function updateArtistView() {
    let print = "";
    for (let i = 0; i < model.data.users.length; i++) {
        print += /*HTML*//*`
        <div id="para">
            <div class="artistRow" id="kunstner_1">
                <img class="artistProfileProportions" src="${model.data.users[i].profilePicture}"> <!--picture-->
                <div class="artistTekstContainer">
                    <h2 id="artistName">${model.data.users[i].userNameInput}</h2> <!--Kunstner-->
                    <div id="artistBio">
                    ${model.data.users[i].userDescription}
                    </div> <!--bio/beskrivelsesteksten(marius)-->
                </div>
            </div>
        </div>
        `;
    }
    return print
} */