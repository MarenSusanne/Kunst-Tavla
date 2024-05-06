updateMainView()

function makeNavBar(){
if(model.app.user == ''){
return /*HTML*/`
    <div class="item item-2">
        <span class="navigationBar">
            <div class="tmtm-L" onclick="changePage('buyAndAuction')">Kjøp og auksjon</div>
            <div class="brdrL">
                <div class="tmtm-L" onclick="changePage('artists')">Kunstnerne våre</div>
            </div>
            <div class="brdrL">
                <div class="tmtm-R" onclick="changePage('galleryAndArchive')">Galleri og arkiv</div>
            </div>
            <div id=registreringOgProfil class="brdrL">
                <div class="tmtm-R" onclick="changePage('registrationAndLogIn')">
                    <div id=registreringOgProfil>
                        <div onclick="changePage('registrationAndLogIn')">
                            Registrering/logg inn
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </div>
`;}    
    else {
        return /*HTML*/`
    <div class="item item-2">
        <span class="navigationBar">
            <div class="tmtm-L" onclick="changePage('buyAndAuction')">Kjøp og auksjon</div>
            <div class="brdrL">
                <div class="tmtm-L" onclick="changePage('artists')">Kunstnerne våre</div>
            </div>
            <div class="brdrL">
                <div class="tmtm-R" onclick="changePage('galleryAndArchive')">Galleri og arkiv</div>
            </div>
            <div id=registreringOgProfil class="brdrL">
                <div class="tmtm-R" onclick="changePage('registrationAndLogIn')">
                <div id=registreringOgProfil>
                <div onclick="changePage('profile')">
                    Profil
                </div>
            </div>
            </div>
            </div>
        </span>
    </div>
`;}
}


function updateMainView() {
    app.innerHTML = /*HTML*/ `
    
    <div class="container">
        <div class="item item-1">
            <div id="logoGoHere" onclick="changePage('main')"></div>
            <input type="text" id="søkefeltHer" placeholder="Søk her..."/>
        </div> 
        ${makeNavBar()}
        <div class="item item-3">
            <div id="appingtonTheMother">
                <div id="appingtonTheSecond"></div>
            </div>
        </div>
        <div class="item item-4 roseborderL"></div>
        <div class="item item-5 roseborderR"></div>
        <div class="item item-6">
                <span id="aboutPage" onclick="changePage('footerGallery')">Galleristudioet vårt</span>
            <span class="brdrL">
                <span id="aPage" onclick="changePage('footerContact')">Kontakt</span>
            </span>
            <span class="brdrL">
                <span id="bPage" onclick="changePage('footerAbout')">Om oss</span>
            </span>
            
        </div>
    </div>

   <!-- <table>
        <tr id="titleBarr">
            <td>
                <div></div>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr id="navigationBar">
            <td class="midlertidig_navn">Kjøp og Auksjon</td>
            <td class="midlertidig_navn">Kunstnerne Våre</td>
            <td class="midlrtidig_navn_numero_dos">Galleri og Arkiv</td>
            <td class="midlrtidig_navn_numero_dos">Registrering/Profil</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table> -->
    `
}