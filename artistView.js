//updateArtistView()
function updateArtistView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
    <div id="overflowContainer">
        ${printArtist()}
    </div>
    `;
}

function printArtist() {
    let print = "";
    for (let i = 1; i < model.data.users.length; i++) {
        print += /*HTML*/`
        <div class="para">
            <div class="artistRow" id="">
                <img class="artistProfileProportions" src="${model.data.users[i].profilePicture}"> <!--picture-->
                <div class="artistTekstContainer">
                    <h2 class="artistName">${model.data.users[i].userNameInput}</h2> <!--Kunstner-->
                    <div class="artistBio">
                    ${model.data.users[i].userDescription}
                    </div> <!--bio/beskrivelsesteksten(marius)-->
                </div>
            </div>
        </div>
        `;
    }
    return print
}