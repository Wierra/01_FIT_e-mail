const jmeno = prompt(trim("Vítejte v IS Fakulty Informačních technilogií ČVUT. Pro pokračování, vyplň své křestní jméno:")).toLowerCase()
const prijmeni = prompt(trim("Vyplň své příjmení:")).toLowerCase().

document.body.innerHTML += `<p>Počet znaků: ${title.length}`
document.body.innerHTML += `<p>Název filmu velkými písmeny: ${title.toUpperCase()}</p>`
document.body.innerHTML += `<p>Prvních 5 znaků: ${title.slice(0, 5)}</p>`


const jmenoTriZnaky = jmeno.length + 3
const prijmeniPetZnaku = prijmeni.length + 5


document.body.innerHTML += `<p>Posledních 5 znaků: ${title.slice(pozicePatehoZnakuOdKonce, pozicePoslednihoZnaku + 1)}</p>`

trim