const loadComponentTbodyAlphabet = () => {
    const alphabet = [
        {
            letter: "a",
            pronunciation: "eí",
            military: "apha"
        },
        {
            letter: "b",
            pronunciation: "bí",
            military: "bravo"
        },
        {
            letter: "c",
            pronunciation: "sí",
            military: "charlie"
        },
        ,
        {
            letter: "d",
            pronunciation: "dí",
            military: "delta"
        },
        {
            letter: "e",
            pronunciation: "í",
            military: "echo"
        },
        {
            letter: "f",
            pronunciation: "éf",
            military: "foxtrot"
        },
        {
            letter: "g",
            pronunciation: "yí",
            military: "golf"
        },
        {
            letter: "h",
            pronunciation: "éich",
            military: "hotel"
        },
        {
            letter: "i",
            pronunciation: "ái",
            military: "india"
        },
        {
            letter: "j",
            pronunciation: "yéi",
            military: "juliett"
        },
        {
            letter: "k",
            pronunciation: "kéi",
            military: "kilo"
        },
        {
            letter: "l",
            pronunciation: "él",
            military: "lima"
        },
        {
            letter: "m",
            pronunciation: "em",
            military: "mike"
        },
        {
            letter: "n",
            pronunciation: "en",
            military: "november"
        },
        {
            letter: "o",
            pronunciation: "óu",
            military: "oscar"
        },
        {
            letter: "p",
            pronunciation: "pí",
            military: "papa"
        },
        {
            letter: "q",
            pronunciation: "kiú",
            military: "quebec"
        },
        {
            letter: "r",
            pronunciation: "ar",
            military: "romeo"
        },
        {
            letter: "s",
            pronunciation: "és",
            military: "sierra"
        },
        {
            letter: "t",
            pronunciation: "tí",
            military: "tango"
        },
        {
            letter: "u",
            pronunciation: "iú",
            military: "uniform"
        },
        {
            letter: "v",
            pronunciation: "ví",
            military: "victor"
        },
        {
            letter: "w",
            pronunciation: "dábliu",
            military: "whiskey"
        },
        {
            letter: "x",
            pronunciation: "ex",
            military: "x-ray"
        },
        {
            letter: "y",
            pronunciation: "uái",
            military: "yankee"
        },
        {
            letter: "z",
            pronunciation: "zíd",
            military: "zulu"
        }
    ]
    const tbodyAlphabet = document.getElementById("tbody-alphabet")
    tbodyAlphabet.innerHTML = ""
    let switchTable = true
    alphabet.forEach(element => {
        if (switchTable) {
            tbodyAlphabet.innerHTML += `
            <tr class="bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${element.letter}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${element.military}
                </td>
            </tr>`
            switchTable = false
        } else {
            tbodyAlphabet.innerHTML += `
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${element.letter}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${element.military}
                </td>
            </tr>`
            switchTable = true
        }
    })
}

const loadComponentTbodyColors = () => {
    const colors = [
        {
            color: "red",
            hexadecimalColor: "#FF0000",
            pronunciation: "red",
            spanish: "rojo",
            ishVersion: "reddish",
            ishSpanish: "rojizo",
        },
        {
            color: "blue",
            hexadecimalColor: "#0000FF",
            pronunciation: "blu",
            spanish: "azul",
            ishVersion: "bludish",
            ishSpanish: "azulado",
        },
        {
            color: "green",
            hexadecimalColor: "#00FF00",
            pronunciation: "griin",
            spanish: "verde",
            ishVersion: "greenish",
            ishSpanish: "verdoso",
        },
        {
            color: "yellow",
            hexadecimalColor: "#FFFF00",
            pronunciation: "íelou",
            spanish: "amarillo",
            ishVersion: "yellowish",
            ishSpanish: "amarillento",
        },
        {
            color: "purple",
            hexadecimalColor: "#800080",
            pronunciation: "purpol",
            spanish: "morado",
            ishVersion: "purplish",
            ishSpanish: "moradizo",
        },
        {
            color: "orange",
            hexadecimalColor: "#FFA500",
            pronunciation: "óranch",
            spanish: "naraja",
            ishVersion: "orangish",
            ishSpanish: "anaranjado",
        },
        {
            color: "orange",
            hexadecimalColor: "#FFA500",
            pronunciation: "óranch",
            spanish: "naraja",
            ishVersion: "orangish",
            ishSpanish: "anaranjado",
        },
        {
            color: "pink",
            hexadecimalColor: "#FFC0CB",
            pronunciation: "pink",
            spanish: "rosa",
            ishVersion: "pinkish",
            ishSpanish: "rosado",
        },
        {
            color: "brown",
            hexadecimalColor: "#A52A2A",
            pronunciation: "bráun",
            spanish: "marrón",
            ishVersion: "brownish",
            ishSpanish: "marronáceo",
        },
        {
            color: "gray",
            hexadecimalColor: "#808080",
            pronunciation: "grey ",
            spanish: "gris",
            ishVersion: "grayish",
            ishSpanish: "grisáceo",
        },
        {
            color: "cyan",
            hexadecimalColor: "#00FFFF",
            pronunciation: "saían",
            spanish: "cian",
            ishVersion: "cyanish",
            ishSpanish: "cianoso",
        },
        {
            color: "magenta",
            hexadecimalColor: "#FF00FF",
            pronunciation: "mayenta",
            spanish: "magenta",
            ishVersion: "magentish",
            ishSpanish: "magentoso",
        },
        {
            color: "gold",
            hexadecimalColor: "#FFD700",
            pronunciation: "góld",
            spanish: "dorado",
            ishVersion: "goldish",
            ishSpanish: "doradizo",
        },
        {
            color: "silver",
            hexadecimalColor: "#C0C0C0",
            pronunciation: "silver",
            spanish: "plateado",
            ishVersion: "silverish",
            ishSpanish: "plateadizo",
        },
        {
            color: "black",
            hexadecimalColor: "#000000",
            pronunciation: "blak",
            spanish: "negro",
            ishVersion: "blackish",
            ishSpanish: "negruzco",
        },
        {
            color: "white",
            hexadecimalColor: "#FFFFFF",
            pronunciation: "gúait",
            spanish: "blanco",
            ishVersion: "whitish",
            ishSpanish: "blanquecino",
        },
    ]
    const tbodyColors = document.getElementById("tbody-colors")
    tbodyColors.innerHTML = ""
    let switchTable = true
    colors.forEach(element => {
        if (switchTable) {
            tbodyColors.innerHTML += `
            <tr class="bg-gray-100">
                <td class="px-6 py-4 flex gap-3 items-center whitespace-nowrap font-medium text-gray-900">
                    <input id="${element.color}"
                        class="h-9 focus:outline-none transition-transform transform hover:scale-125 duration-300 cursor-pointer"
                        type="color" value="${element.hexadecimalColor}">
                    <label for="${element.color}">${element.color}</label><span${element.hexadecimalColor}</span>
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${element.spanish}
                </td>
                <td class="px-6 py-4 whitespace-nowrap font-light text-gray-900">${element.ishVersion}</td>
                <td class="capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${element.ishSpanish}
                </td>
            </tr>
            `
            switchTable = false
        } else {
            tbodyColors.innerHTML += `
            <tr class="bg-white">
                <td class="px-6 py-4 flex gap-3 items-center whitespace-nowrap font-medium text-gray-900">
                    <input id="${element.color}"
                        class="h-9 focus:outline-none transition-transform transform hover:scale-125 duration-300 cursor-pointer"
                        type="color" value="${element.hexadecimalColor}">
                    <label for="${element.color}">${element.color}</label><span${element.hexadecimalColor}</span>
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${element.spanish}
                </td>
                <td class="px-6 py-4 whitespace-nowrap font-light text-gray-900">${element.ishVersion}</td>
                <td class="capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${element.ishSpanish}
                </td>
            </tr>
            `
            switchTable = true
        }
    })
}

const loadComponentTbodyDaysOfTheWeek = () => {
    const daysOfTheWeek = [
        {
            day: "monday",
            pronunciation: "monday",
            spanish: "lunes"
        },
        {
            day: "tuesday",
            pronunciation: "tiúsdei",
            spanish: "martes"
        },
        {
            day: "wednesday",
            pronunciation: "uénsdei",
            spanish: "miércoles"
        },
        {
            day: "thursday",
            pronunciation: "zérsdei",
            spanish: "jueves"
        },
        {
            day: "friday",
            pronunciation: "fráidei",
            spanish: "viernes"
        },
        {
            day: "saturday",
            pronunciation: "sárurdei",
            spanish: "sábado"
        },
        {
            day: "sunday",
            pronunciation: "sandei",
            spanish: "domingo"
        }
    ]
    const tbodyDaysOfTheWeek = document.getElementById("days-of-the-week")
    tbodyDaysOfTheWeek.innerHTML = ""
    let switchTable = true
    daysOfTheWeek.forEach(element => {
        if (switchTable) {
            tbodyDaysOfTheWeek.innerHTML += `
            <tr class="bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">${element.day}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${element.spanish}
                </td>
            </tr>
            `
            switchTable = false
        }else{
            tbodyDaysOfTheWeek.innerHTML += `
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">${element.day}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="capitalize text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${element.spanish}
                </td>
            </tr>
            `
            switchTable = true
        }
    })
}
loadComponentTbodyAlphabet()
loadComponentTbodyColors()
loadComponentTbodyDaysOfTheWeek()