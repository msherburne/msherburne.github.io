function decode() {
    let message = document.getElementById('mes').value;
    let cypher = document.getElementById('value').value;
    cypher = parseInt(cypher);

    let final = [];
    let list = message.split(" ");
    for(let i =0; i < list.length; i++) {
        num = list[i];

        if (num === "/") {
            final.push(" ");
        } else {
            num = num - cypher;
            let char = String.fromCharCode(num)
            final.push(char)
        }
        

    }
    output = ""
    for(let i =0; i < final.length; i++) {
        output += final[i]
    }


    document.getElementById("mes").value = output;
}