function syncLoop1(ms) {
    performance.mark('SL1-START')
    var end = new Date().getTime() + ms;
    while (new Date().getTime() < end) ;
    performance.mark('SL1-END')
}


function exec1() {
    syncLoop1(100);
    exec2();
    syncLoop1(100);
}

document.onload = exec1();


