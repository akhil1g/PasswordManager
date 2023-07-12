export function getRandomChar(min, max){
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}
export function getSpecialChar(){
    const specialChar="\.[]{}()<>*+-=!?^$|#@%^&<>,/:;=|~`";
    return specialChar[Math.floor(Math.random()*specialChar.length)];
}