function getUnicode(str) {
    return str.charCodeAt(0);
}
const codes = [7169777765];

function stringRun() {
    document.getElementById("error").style.visibility = "hidden"
    let runner = false;
    let uName = document.getElementById("uName").value;
    let pWord = document.getElementById("pWord").value;
    output = "";
    for (let char of uName) {
        let code = getUnicode(char);
        output += code;
    }
    
    if (output === "7169777765" && pWord === "7169777765") {
        runner = true;
    }
    
    if (runner === false) {
        document.getElementById("error").innerHTML = runner;
        document.getElementById("error").style.visibility = "visible"
    }
    else if (runner === true){
        window.location.href = "home.html"
        document.getElementById("error").innerHTML = runner;
        document.getElementById("error").style.visibility = "visible"
    }
    else {
        document.getElementById("error").style.visibility = "visible"
    }
    
}