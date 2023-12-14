let data;
const getData = () => {
    return new Promise (async (resolve, reject) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        data = await response.json();
        resolve(data);
        searchData(data);
    })
}
getData();
const searchData = (item) => {
    const header = document.querySelector(".header");
    const search = document.querySelector(".search");
    const searchInside = (text = "") => {
        const value = item.filter(key => key.title.includes(text) || key.body.includes(text));
        return value;
    }
    printData(searchInside());
    search.addEventListener("input", () => {
        const text  = event.target.value;
        printData(searchInside(text));
    })
}

const printData = (data) => {
    const body = document.querySelector(".bodyy");
    let string = "";
    for (let items of data) {
        string += `<div class="card" id="${items.id}">`
            string += `<div class="title">${items.title}</div>`;
            string += `<div class="body">${items.body}</div>`;
            string += `<button type="button" onclick="deleteCard(${items.id})">Delete</button>`;
        string += `</div>`

    }
    body.innerHTML = `
        <div class="form">${string}</div>
        `;
}

const deleteCard = (items = "") => {
    console.log(data);
    const id = document.getElementById(items);
    id.remove();

    const index = data.findIndex(item => item.id === items);

    if (index !== -1) {
        data.splice(index, 1);
        console.log(data);
    }
}
