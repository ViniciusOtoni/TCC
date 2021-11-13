
function convert(number){
    let num = number.toString();
    let conversion = num.replace(/[.]/, ",")
    return conversion;
}

function reconvert(number){
    let num = number.toString();
    let conversion = num.replace(/[,]/, ".")
    
    
    let r = Number(conversion)
    return r;
}

export {convert, reconvert }