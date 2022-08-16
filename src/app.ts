// doing some tests using ecmascript functions newer then target tsconfig.json
// included specified libs on tsconfig 
// "lib": ["es2016", "DOM"],   
// strict null checks can be desactivated!!! 
let testButton = document.getElementById('button');

function implicitSum(p1, p2) {
    return p1
}

testButton.addEventListener('click', () => {
    console.log('works!');
});