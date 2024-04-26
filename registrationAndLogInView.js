//updateRegistrationAndLogInView()
function updateRegistrationAndLogInView() {
    document.getElementById("appingtonTheSecond").innerHTML =/*HTML*/`
        <div id="appingtonTheProfile">
            <div class="item" id="header_profileMaking">
                <h2>Lag ny bruker</h2>
            </div>
            <div class="item" id="registerUser">
                    <div class="bitOfAir">
                        <input onchange="newInputFullName(this.value)" placeholder="Navn">
                    </div>
                    <div class="bitOfAir">
                        <input onchange="newInputUserName(this.value)" placeholder="Brukernavn">
                    </div>
                    <div class="bitOfAir">
                        <input onchange="newInputEmail(this.value)" placeholder="Epost">
                    </div>
                    <div class="bitOfAir">
                        <input onchange="newInputPassword(this.value)" placeholder="Passord">
                    </div>
                    <div class="bitOfAir">
                        <input onchange="newInputProfilePicture(this.value)" placeholder="Bilde">
                        </div>
                    <div class="bitOfAir">Er du kunstner?  <input onchange="newInputArtist(this.value)" type="checkbox"></div>
                    <div class="bitOfAir">
                        <button onclick="addNewUser()">Registrer</button>
                    </div>
                    <div class="container_innerGallery">
                    <div>
                        <img src="${model.inputs.registerUser.profilePicture}" />
                        <div>${model.inputs.registerUser.fullName}</div>
                        <div>${model.inputs.registerUser.userName}</div>
                        <div>${model.inputs.registerUser.email}</div>
                        <div>${model.inputs.registerUser.password}</div>
                        <div>${model.inputs.registerUser.artist}</div>
                    </div>
    </div>
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
