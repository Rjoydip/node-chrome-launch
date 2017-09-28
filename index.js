"use strict";

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.kiwi.com', {
        waitUntil: 'networkidle'
    });

    await page.screenshot({
        path: `./screenshots/${Date.now()}.png`
    });

    await browser.close();

})();