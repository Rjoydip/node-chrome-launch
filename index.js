"use strict";

const puppeteer = require('puppeteer');
const spawn = require('child_process').spawn;

/*
(async() => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();

    console.log("Please wait ...");

    await page.goto('https://www.google.co.in', {
        waitUntil: 'networkidle'
    });
    console.log("Content loaded");
    console.log(page);
    // await browser.close();
})();
*/


(() => {
    console.log("Please wait ...");

    const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
    spawn(CHROME, ['--headless --new-window --disable-gpu http://google.co.in'])
        .on("error", function (error) {
            console.log("Error!!! : " + error);
            throw error;
        });
})()