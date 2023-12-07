export function loading() {
    const body = document.querySelector("body");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    right.style.display = "none";
    left.style.display = "none";
    // body.style.display = "none";
    // console.log("loading enabled");

    let animation = `
        <div class="loading">Loading</div>
    `;

    body.innerHTML += animation;
}

export function stopLoading() {
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    right.style.display = "flex";
    left.style.display = "flex";
    document.querySelector(".loading").remove();
}

