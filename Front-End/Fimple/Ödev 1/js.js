import {loading, stopLoading} from "./loading.js";
loading();
let items;
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (response.ok) {
            items = await response.json();
            printTable(items);
            stopLoading();
            // console.table(items);
        } else {
            throw new Error("HTTP Error! status: " + response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

getData();

window.changeCheck = (id) => {
    const item = items.find(item => item.id === id);
    if (item) {
        item.completed = !item.completed;
        printTable(items);
    }
}

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
        if (item.completed) {
            rights += `
                <tr>
                    <td><s>${item.title}</s></td>
                    <td><input type="checkbox" checked onchange="changeCheck(${item.id})" </td>
                </tr>
            `;
        } else {
                rights += `
                <tr>
                    <td>${item.title}</td>
                    <td><input type="checkbox" onchange="changeCheck(${item.id})"  </td>
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
