updateMainView()
function updateMainView(){
    app.innerHTML = /*HTML*/ `
    
    <table>
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
    </table>
    `
}