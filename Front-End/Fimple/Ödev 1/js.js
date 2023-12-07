let items;
let loaded = false;
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (response.ok) {
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

    // items.push({title: "Does it works?", completed: true});


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
        `;
        if (item.completed) {
            rights += `
                    <td><input type="checkbox" checked disabled </td>
                </tr>
            `;
        } else {
                rights += `
                    <td><input type="checkbox" disabled </td>
                </tr>
            `;
        }
    }

    // Bind string to innerHTML
    right.innerHTML = rights;
}

const inputTitle = document.querySelector("#ftitle");
const inputValue = document.querySelector("#fcompleted");

// Validate Forms
const formValidate = () => {
    if (inputTitle.value === "") {
        alert("Title cannot be empty!");
        return false;
    } else {
        return true;
    }
}

// Clear form
const formClear = () => {
    inputTitle.value = "";
    inputValue.checked = false;
}

// Submit Button
const form = document.querySelector("#formSubmit");
form.onsubmit = async (e) => {
    e.preventDefault();
    if (formValidate()) {
        items.push({title: inputTitle.value, completed: inputValue.checked});
        printTable(items);
        formClear();
    }
}

// TODO: Loading
