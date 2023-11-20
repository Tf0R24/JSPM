window.addEventListener('load', function () {

    const wrapper = this.document.getElementsByClassName("wrapper")[0];

    $('body').terminal({
        gen: function(passLength) {
            this.echo(genPassword(passLength));
        },
    }, {
        greetings: 'Welcome to JSPM! (copyright me, just now.)'
    });    

})

function animate() {

    let testbaffle = baffle(toAnimate,{
        speed: 100
    });
    testbaffle.reveal(1000);
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

//to use getOutputValue, call as getOutputValue(this); - terminal object must be passed from where it is, cant be called externally

function getOutputValue(terminal){
    const outArray = terminal.get_output([true]);
    const outArrayLength = outArray.length;
    const lastOut = outArray[outArrayLength - 1];
    const lastValue = lastOut[0];
    return lastValue;
}