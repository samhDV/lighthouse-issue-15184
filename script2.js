function syncLoop2(ms) {
    performance.mark('SL2-START')
    var end = new Date().getTime() + ms;
    while (new Date().getTime() < end) ;
    performance.mark('SL2-END')
}

function exec2() {
    syncLoop2(200);
    exec3();
    syncLoop2(200);
}