const insert = document.querySelector("#insert");

window.addEventListener("keydown", (event) => {
	// console.log(event.key);
	// console.log(event.code);
	// console.log(event.keyCode);

	insert.innerHTML = `
     <div class="key">
        ${event.key}
        <small>event.key</small>
    </div>;
    
    <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>;
    
    <div class="key">
    ${event.code} 
    <small>event.code</small>
    </div>;
    
    `;
});
