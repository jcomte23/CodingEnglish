const loadComponentTbodyNumbers = () => {
    const numbers = [
        {
            number: 1,
            pronunciation: "eí",
            writtenNumber: "apha"
        },
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