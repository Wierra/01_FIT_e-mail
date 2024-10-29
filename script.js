const jmeno = prompt("Vítejte v IS Fakulty Informačních technilogií ČVUT. Pro pokračování, vyplň své křestní jméno:").toLowerCase().trim()
const prijmeni = prompt("Vyplň své příjmení:").toLowerCase().trim()
const domena = "fit.cvut.cz"


console.log(jmeno, prijmeni)
document.body.innerHTML += `<p>Tvá e-mailová adresa pro přihlašování do našeho IS: <h1>${jmeno.replaceAll("á","a").replaceAll("é","e").replaceAll("ě","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u").replaceAll("ů","u").replaceAll("ž","z").replaceAll("š","s").replaceAll("č","c").replaceAll("ď","d").replaceAll("ť","t").replaceAll("ň","n").replaceAll("ý","y").slice(0, 3)}${prijmeni.replaceAll("á","a").replaceAll("é","e").replaceAll("ě","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u").replaceAll("ů","u").replaceAll("ž","z").replaceAll("š","s").replaceAll("č","c").replaceAll("ď","d").replaceAll("ť","t").replaceAll("ň","n").replaceAll("ý","y").slice(0, 5)}` + `@` + domena + `</h1></p>`


