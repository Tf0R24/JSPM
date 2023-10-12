window.addEventListener('load', function () {

    const passLength = 16;

    const wrapper = this.document.getElementsByClassName("wrapper")[0];

    const button = this.document.createElement('button');
    button.innerHTML = "Generate!"
    button.addEventListener("click", /*Do Animation Setup */);
    wrapper.appendChild(button);

    let testbaffle = baffle('.testp',{
        speed: 10
    });

    testbaffle.start();


})

function animate {
    
}

function genPassword(passLength) {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let x = 0; x < passLength; x++){
        password = password + characters[randInt(charactersLength)]
    }
    return password;
}
function randInt(charactersLength) {
    return Math.floor(Math.random() * (charactersLength - 0) + 0); // The maximum is exclusive and the minimum is inclusive
}