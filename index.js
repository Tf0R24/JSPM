window.addEventListener('load', function () {

    const passLength = 16;

    const password = genPassword(passLength);
    const hashedPassword = hash(password);
    console.log(`Generated Password: ${password}`);
    console.log(`Hashed Password: ${hashedPassword}`)

})

function genPassword(passLength) {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let x = 0; x < passLength; x++){
        password = password + characters[randInt(charactersLength)]
    }
    return password;
}

function hash(toHashString){
    argon2.hash({ pass: toHashString, salt: genPassword(32) })
    .then(h => console.log(h.hash, h.hashHex, h.encoded))
    .catch(e => console.error(e.message, e.code))
}

function randInt(charactersLength) {
    return Math.floor(Math.random() * (charactersLength - 0) + 0); // The maximum is exclusive and the minimum is inclusive
}