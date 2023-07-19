function syncLoop3(ms) {
    performance.mark('SL3-START')
    var end = new Date().getTime() + ms;
    while (new Date().getTime() < end) ;
    performance.mark('SL3-END')
}

function exec3() {
    syncLoop3(300);
}