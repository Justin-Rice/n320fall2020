let king = {
    age: 24,
    disposition: "dour"

}

let templateStr = `
<h2>KingStats</h2>
    <ul>
        <li>Age: ${king.age}</li>
        <li>Disposition: ${king.disposition}</li>
    </ul>

`;
console.log(templateStr);

//creates new div elment and displays everything in templateStr to the page 
let newContainer = document.createElement("div");
newContainer.innerHTML = templateStr;
document.body.appendChild( newContainer );