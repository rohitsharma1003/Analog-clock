setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMiniutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    Hour.style.transfrom = `rotate(${hrotation}deg)`;
    Minute.style.transfrom = `rotate(${mrotation}deg)`;
    Second.style.transfrom = `rotate(${srotation}deg)`;

}, 1000);