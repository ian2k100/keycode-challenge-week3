const insert = document.getElementById("insert");

window.addEventListener("keydown",(e) => {

    const { key, code, keyCode} = e;

    insert.innerHTML = `
        <h1 class="center text">${keyCode}</h1>
        <div class="key text">${e.key === " " ? "Space" : key}<small>event.Key</small></div>
        <div class="key text">${code}<small>event.Code</small></div>
        <div class="key text">${keyCode}<small>event.Which</small></div>
    `
})