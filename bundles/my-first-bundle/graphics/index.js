import { gsap } from '../../../node_modules/gsap/src/index.js';

const nameplateEl = document.getElementById('nameplate');
const nameEl = document.getElementById('name');
const twitterEl = document.getElementById('twitter');

nodecg.listenFor('showLowerthird', (data) => {
    nameEl.innerHTML = data.name;
    twitterEl.innerHTML = data.twitter;

    const tl = gsap.timeline();

    tl.from([nameplateEl, nameEl, twitterEl], 1, {width: 0 });

    tl.to([nameplateEl, nameEl, twitterEl], 1, {width: 0 }, "+=4");

    tl.call(() => {
        nameEl.innerHTML = "";
        twitterEl.innerHTML = "";
    })
    tl.set([nameplateEl, nameEl, twitterEl], { width: "" })
})