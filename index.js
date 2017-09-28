"use strict";

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log("Please wait ...");

    await page.goto('https://www.google.co.in', {
        waitUntil: 'networkidle'
    });

    console.log("Content loaded");
    console.log(page);
    await browser.close();

})();