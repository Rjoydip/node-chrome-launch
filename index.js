"use strict";

const puppeteer = require('puppeteer');
const spawn = require('child_process').spawn;
const html2json = require('html2json').html2json;

(async() => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    page.on('console', console.log);
    console.log("Please wait ...");
    await page.goto('https://www.google.co.in/flights', {
        waitUntil: 'networkidle'
    });
    const bodyHandle = await page.$('body table table tbody table tbody td');
    const html = await page.evaluate(async body => body.innerHTML, bodyHandle);
    // const htmlJSON = await html2json(html);
    console.log(html);
    await bodyHandle.dispose();
    await browser.close();
})();