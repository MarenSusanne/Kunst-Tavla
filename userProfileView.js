userProfileView()
function userProfileView() {
    for (let i = 0; i < model.data.users.length; i++)
        document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
        <div class="delt_i_2_horisontalt">
            <div class="item hori1"> <!--LEGG TIL SCROLLFUNKSJON SENERE?-->
                <div id="artistInfo">
                    <h2 id="artistName">Kunstnernavn</h2>
                    <div id="artistBio">
                        <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. At non iste dolorem ipsum?
                        Odio cumque ut dicta rem numquam saepe expedita
                        libero laborum? Vitae, rem. Debitis eos porro
                        molestiae perferendis.</p>
                        <p>Profiltekst!!!</p>
                    </div>
                </div>
                <div class="userProfilePicture"><img src="${model.data.users[i].profilePicture}" class="standardGalleryImageSize"/></div>
                <button onclick="editProfile()">Rediger profil</button>
            </div>
            <div class="item hori2">
                <h1>Mine Verk</h1>
                <p class="subtitle">the best blog in the world</p>
                <div><div>
            </div>
        </div>
    `
            ;
}

// NOTATER: alder, kjønn, lokalasjon <-- Burde være valgfritt om man ønsker
//å dele denne informasjonen, ellers så kan den være usynlig.