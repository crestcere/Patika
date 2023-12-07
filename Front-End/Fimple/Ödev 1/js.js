console.log("JS Loaded");
let items;
let loaded = false;
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (response.ok) {
            // const items = await response.json();
            items = await response.json();
            printTable(items);
        } else {
            throw new Error("HTTP Error! status: " + response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

getData();

const printTable = (items) => {
    // Create temporary string that it will attach to innerHTML
    const right = document.querySelector(".right");
    let rights = `
        <table>
            <tr>
                <th>Title</th>
                <th>Completed</th>
            </tr>
    `;
    for (let item of items) {
        rights += `
            <tr>
                <td>${item.title}</td>
                <td>${item.completed}</td>
            </tr>
        `;
    }
    rights += `
            <tr>
                <td>Does it works?</td>
                <td>Yes</td>
            </tr>
        </table>
    `;

    // Bind string to innerHTML
    right.innerHTML = rights;

}



// items.forEach((item) => {
//     console.log(item);
// });
