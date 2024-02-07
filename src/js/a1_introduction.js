const loadComponentTbodyAlphabet= () => {
    const alphabet = [
        {
            letter: "a",
            pronuncitation: "eí",
            military: "apha"
        },
        {
            letter: "b",
            pronuncitation: "bí",
            military: "bravo"
        },
        {
            letter: "c",
            pronuncitation: "sí",
            military: "charlie"
        },
        ,
        {
            letter: "d",
            pronuncitation: "dí",
            military: "delta"
        },
        {
            letter: "e",
            pronuncitation: "í",
            military: "echo"
        },
        {
            letter: "f",
            pronuncitation: "éf",
            military: "foxtrot"
        },
        {
            letter: "g",
            pronuncitation: "yí",
            military: "golf"
        },
        {
            letter: "h",
            pronuncitation: "éich",
            military: "hotel"
        },
        {
            letter: "i",
            pronuncitation: "ái",
            military: "india"
        },
        {
            letter: "j",
            pronuncitation: "yéi",
            military: "juliett"
        },
        {
            letter: "k",
            pronuncitation: "kéi",
            military: "kilo"
        },
        {
            letter: "l",
            pronuncitation: "él",
            military: "lima"
        },
        {
            letter: "m",
            pronuncitation: "em",
            military: "mike"
        },
        {
            letter: "n",
            pronuncitation: "en",
            military: "november"
        },
        {
            letter: "o",
            pronuncitation: "óu",
            military: "oscar"
        },
        {
            letter: "p",
            pronuncitation: "pí",
            military: "papa"
        },
        {
            letter: "q",
            pronuncitation: "kiú",
            military: "quebec"
        },
        {
            letter: "r",
            pronuncitation: "ar",
            military: "romeo"
        },
        {
            letter: "s",
            pronuncitation: "és",
            military: "sierra"
        },
        {
            letter: "t",
            pronuncitation: "tí",
            military: "tango"
        },
        {
            letter: "u",
            pronuncitation: "iú",
            military: "uniform"
        },
        {
            letter: "v",
            pronuncitation: "ví",
            military: "victor"
        },
        {
            letter: "w",
            pronuncitation: "dábliu",
            military: "whiskey"
        },
        {
            letter: "x",
            pronuncitation: "ex",
            military: "x-ray"
        },
        {
            letter: "y",
            pronuncitation: "uái",
            military: "yankee"
        },
        {
            letter: "z",
            pronuncitation: "zíd",
            military: "zulu"
        }
    ]
    const tbodyAlphabet = document.getElementById("tbody-alphabet")
    tbodyAlphabet.innerHTML = ""
    let switchTable = true
    alphabet.forEach(element => {
        if (switchTable) {
            tbodyAlphabet.innerHTML +=`
            <tr class="bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${element.letter}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronuncitation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${element.military}
                </td>
            </tr>`
            switchTable=false
        }else{
            tbodyAlphabet.innerHTML += `
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${element.letter}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${element.pronuncitation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${element.military}
                </td>
            </tr>`
            switchTable=true
        }
    })
}

loadComponentTbodyAlphabet()