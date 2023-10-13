function syncLoop2(ms) {
    performance.mark('SL2-START')
    var end = new Date().getTime() + ms;
    while (new Date().getTime() < end) ;
    performance.mark('SL2-END')
}

function exec2() {
    console.log('exec2');
    setTimeout(()=>{
        console.log('exec2 body');
        syncLoop2(200);
        addAttributeToDiv();
        syncLoop2(200);
    },100)
}

function addAttributeToDiv() {
    var div = document.getElementById('targetDiv');
    div.setAttribute('class', 'div1');
}

exec2();