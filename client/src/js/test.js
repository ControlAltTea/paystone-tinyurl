function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomChar(max) {
    return Math.random().toString(max).substring(2,3);
}

export default function generateTinyURLarr(tinyURLdispatcher) {
    let tinyURL = "";
    let tinyURLarr = [];
    let maxTinyUrlLength = 6;
    for (let i = 0; i < maxTinyUrlLength; i++) {
        const coinFlip = getRandomInt(2)
        console.log("coinFlip", coinFlip)
        
        if (coinFlip === 0) {
            const newChar = getRandomInt(9);
            console.log("newChar", newChar);
            tinyURLarr.push(newChar.toString());
        }
        else if(coinFlip === 1 || 2) {
            const newChar = getRandomChar(16);
            console.log("newChar", newChar);
            tinyURLarr.push(newChar);
        }
    }
    console.log(tinyURLarr);
    // console.log("tinyURL", tinyURL);
    tinyURL = tinyURLarr.join("");
    tinyURLdispatcher(tinyURL);
}