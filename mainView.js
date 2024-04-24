updateMainView()
function updateMainView() {
    app.innerHTML = /*HTML*/ `
    
    <div class="container">
        <div class="item item-1">
            <div id="logoGoHere" onclick="updateInnerMainView()"></div>
            <input type="text" id="søkefeltHer" placeholder="Søk her..."/>
        </div>
        <div class="item item-2">
            <span class="navigationBar">
                <div class="tmtm-L" onclick="updateBuyAndAuction()">Kjøp og auksjon</div>
                <div class="brdrL">
                    <div class="tmtm-L" onclick="updateArtistView()">Kunstnerne våre</div>
                </div>
                <div class="brdrL">
                    <div class="tmtm-R" onclick="updateGalleryAndArchiveView()">Galleri og arkiv</div>
                </div>
                <div class="brdrL">
                    <div class="tmtm-R" onclick="updateProfileView()">Registrering/Profil</div>
                </div>
            </span>
        </div>
        <div class="item item-3">
            <div id="appingtonTheMother">
                <div id="appingtonTheSecond"></div>
            </div>
        </div>
        <div class="item item-4 roseborderL"></div>
        <div class="item item-5 roseborderR"></div>
        <div class="item item-6">
            <span id="aboutPage">Om oss</span>
            <span class="brdrL">
                <span id="aPage">A</span>
            </span>
            <span class="brdrL">
                <span id="aPage">b</span>
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