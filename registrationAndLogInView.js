//updateProfileView()
function updateProfileView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
        <div id="appingtonTheProfile">
            <div class="item" id="header_profileMaking">
                <h2>Lag ny bruker</h2>
            </div>
            <div class="item" id="registerUser">
                <form>
                    <div class="bitOfAir">
                        <input placeholder="Navn">
                    </div>
                    <div class="bitOfAir">
                        <input placeholder="Brukernavn">
                    </div>
                    <div class="bitOfAir">
                        <input placeholder="Epost">
                    </div>
                    <div class="bitOfAir">
                        <input placeholder="Passord">
                    </div>
                    <div class="bitOfAir">
                        <input placeholder="Bilde">
                        </div>
                    <div class="bitOfAir">Er du kunstner?  <input type="checkbox"></div>
                    <div class="bitOfAir">
                        <button>Registrer</button>
                    </div>
                </form>
            </div>
            <div class="item" id="profileInnerBorder"></div>
            <div class="item" id="header_profileLogIn">
                <h2>Logg Inn</h2>
            </div> 
            <div class="item" id="logInRegisteredUser">
                <div class="bitOfAir">
                    <input onchange="logInInputUsername(this.value)" placeholder="Brukernavn">
                </div>
                <div class="bitOfAir">
                    <input onchange="logInInputPassword(this.value)" placeholder="Passord">
                </div>
                <div class="bitOfAir">
                    <button onclick="login()">Logg Inn</button>
                    <div>${model.inputs.loginView.errorMessage ?? ''}</div>
                </div>
            </div>
        </div>
`}