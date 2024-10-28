const jmeno = prompt("Vítejte v IS Fakulty Informačních technilogií ČVUT. Pro pokračování, vyplň své křestní jméno:").toLowerCase().trim()
const prijmeni = prompt("Vyplň své příjmení:").toLowerCase().trim()
const domena = "fit.cvut.cz"

document.body.innerHTML += "<p>Vyplněné jméno: " + jmeno + " " + prijmeni + " " + "</p>"
document.body.innerHTML += `<p>Tvá e-mailová adresa pro přihlašování do našeho IS: <h1>${jmeno.slice(0, 3)}${prijmeni.slice(0, 5)}` + `@` + domena + `</h1></p>`

//trim = žádné bílé znaky na začátku ani na konci
//slice = vyříznutí znaků - první tři/pět
//bez diakritiky