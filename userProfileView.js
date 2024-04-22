userProfileView()
function userProfileView(){
    document.getElementById("appingtonTheSecond").innerHTML=/*HTML*/`
        <div class="delt_i_2_horisontalt">
            <div class="item hori1"> <!--LEGG TIL SCROLLFUNKSJON SENERE?-->
                <div id="artistInfo">
                    <h2 id="artistName">Kunstnernavn</h2>
                    <div id="artistBio">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At non iste dolorem ipsum? Odio cumque ut dicta rem numquam saepe expedita libero laborum? Vitae, rem. Debitis eos porro molestiae perferendis.
                    </div>
                </div>
                <div class="userProfilePicture">(bilde)</div>
            </div>
            <div class="item hori2">
                <h1>Mine Verk</h1>
                <p class="subtitle">the best blog in the world</p>
                <div><div>
            </div>
        </div>
    `
    ;}

    // NOTATER: alder, kjønn, lokalasjon <-- Burde være valgfritt om man ønsker
    //å dele denne informasjonen, ellers så kan den være usynlig.