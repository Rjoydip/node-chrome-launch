"use strict";
/*
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

    console.log(links.join('\n'));
    await browser.close();

})();
*/

/*
const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {
    args: ['--headless']
});

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();

// Navigate to google.com, enter a search.
driver.get('https://www.google.co.in/flights/#search;f=CCU;t=BLR;d=2017-10-12;r=2017-10-16');

// Take screenshot of results page. Save to disk.
driver.then(base64png => {
    fs.writeFileSync(`./screenshots/${Date.now()}.png`, new Buffer(base64png, 'base64'));
});

driver.quit();
*/

/*
const webdriverio = require('webdriverio');
const chromedriver = require('chromedriver');

const PORT = 9515;

chromedriver.start([
    '--url-base=wd/hub',
    `--port=${PORT}`,
    '--verbose'
]);

(async() => {

    const opts = {
        port: PORT,
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--headless']
            }
        }
    };

    const browser = webdriverio.remote(opts).init();

    await browser.url('https://www.google.co.in/flights/#search;f=CCU;t=BLR;d=2017-10-12;r=2017-10-16');

    const title = await browser.getTitle();
    console.log(`Title: ${title}`);

    const buffer = await browser.saveScreenshot(`./screenshots/${Date.now()}.png`);
    console.log('Saved screenshot...');

    chromedriver.stop();
    browser.end();

})();
*/

const webdriver = require("selenium-webdriver");
const chromedriver = require('chromedriver');

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();

driver.get("http://www.softpost.org");
driver.quit();