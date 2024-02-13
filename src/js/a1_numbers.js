const loadComponentTbodyNumbers = () => {
    const numbers = [
        {
            number: 1,
            pronunciation: "eí",
            writtenNumber: "one"
        },
        {
            number: 2,
            pronunciation: "dos",
            writtenNumber: "two"
        },
        {
            number: 3,
            pronunciation: "tres",
            writtenNumber: "three"
        },
        {
            number: 4,
            pronunciation: "cuatro",
            writtenNumber: "four"
        },
        {
            number: 5,
            pronunciation: "cinco",
            writtenNumber: "five"
        },
        {
            number: 6,
            pronunciation: "seis",
            writtenNumber: "six"
        },
        {
            number: 7,
            pronunciation: "siete",
            writtenNumber: "seven"
        },
        {
            number: 8,
            pronunciation: "ocho",
            writtenNumber: "eight"
        },
        {
            number: 9,
            pronunciation: "nueve",
            writtenNumber: "nine"
        },
        {
            number: 10,
            pronunciation: "diez",
            writtenNumber: "ten"
        },
        {
            number: 11,
            pronunciation: "once",
            writtenNumber: "eleven"
        },
        {
            number: 12,
            pronunciation: "doce",
            writtenNumber: "twelve"
        },
        {
            number: 13,
            pronunciation: "trece",
            writtenNumber: "thirteen"
        },
        {
            number: 14,
            pronunciation: "catorce",
            writtenNumber: "fourteen"
        },
        {
            number: 15,
            pronunciation: "quince",
            writtenNumber: "fifteen"
        },
        {
            number: 16,
            pronunciation: "dieciséis",
            writtenNumber: "sixteen"
        },
        {
            number: 17,
            pronunciation: "diecisiete",
            writtenNumber: "seventeen"
        },
        {
            number: 18,
            pronunciation: "dieciocho",
            writtenNumber: "eighteen"
        },
        {
            number: 19,
            pronunciation: "diecinueve",
            writtenNumber: "nineteen"
        },
        {
            number: 20,
            pronunciation: "veinte",
            writtenNumber: "twenty"
        },
        {
            number: 21,
            pronunciation: "veintiuno",
            writtenNumber: "twenty-one"
        },
        {
            number: 22,
            pronunciation: "veintidós",
            writtenNumber: "twenty-two"
        },
        {
            number: 23,
            pronunciation: "veintitrés",
            writtenNumber: "twenty-three"
        },
        {
            number: 24,
            pronunciation: "veinticuatro",
            writtenNumber: "twenty-four"
        },
        {
            number: 25,
            pronunciation: "veinticinco",
            writtenNumber: "twenty-five"
        },
        {
            number: 30,
            pronunciation: "treinta",
            writtenNumber: "thirty"
        },
        {
            number: 40,
            pronunciation: "cuarenta",
            writtenNumber: "forty"
        },
        {
            number: 50,
            pronunciation: "cincuenta",
            writtenNumber: "fifty"
        },
        {
            number: 60,
            pronunciation: "sesenta",
            writtenNumber: "sixty"
        },
        {
            number: 70,
            pronunciation: "setenta",
            writtenNumber: "seventy"
        },
        {
            number: 80,
            pronunciation: "ochenta",
            writtenNumber: "eighty"
        },
        {
            number: 90,
            pronunciation: "noventa",
            writtenNumber: "ninety"
        },
        {
            number: 100,
            pronunciation: "cien",
            writtenNumber: "one hundred"
        },
        {
            number: 1000,
            pronunciation: "mil",
            writtenNumber: "one thousand"
        },
        {
            number: 10000,
            pronunciation: "diez mil",
            writtenNumber: "ten thousand"
        },
        {
            number: 100000,
            pronunciation: "cien mil",
            writtenNumber: "one hundred thousand"
        },
        {
            number: 1000000,
            pronunciation: "un millón",
            writtenNumber: "one million"
        }
    ]
    tbodyNumbers = document.getElementById("tbody-numbers")
    tbodyNumbers.innerHTML = ""
    let switchTable = true
    numbers.forEach(element => {
        if (switchTable) {
            tbodyNumbers.innerHTML += `
            <tr class="bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${element.number}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${element.writtenNumber}
                </td>
            </tr>`
            switchTable = false
        } else {
            tbodyNumbers.innerHTML += `
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${element.number}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronunciation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${element.writtenNumber}
                </td>
            </tr>`
            switchTable = true
        }
    })
}