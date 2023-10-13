function syncLoop1(ms) {
    performance.mark('SL1-START')
    var end = new Date().getTime() + ms;
    while (new Date().getTime() < end) ;
    performance.mark('SL1-END')
}


function exec1() {
    console.log('exec1');
    syncLoop1(100);
    // get div
    var div = document.getElementById('targetDiv');
    new MutationObserver(function (mutations) {
        console.log('mutationObserver called')
        syncLoop1(100);
    }
    ).observe(div, {
        attributes : true,
    });
}

exec1();


