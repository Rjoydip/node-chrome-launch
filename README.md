# node-chrome-launcher

> Launch chrome using node.js

## Running Locally

```bash
$ git clone https://github.com/Rjoydip/node-chrome-launcher.git # or clone your own fork
$ cd node-chrome-launcher
$ npm install
$ node index
```

> Note: Puppeteer requires at least Node v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater

## Using puppeteer

```js
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
```

## Using selenium-webdriver

```js
const webdriver = require("selenium-webdriver");
const chromedriver = require('chromedriver');

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();

driver.get("http://google.co.in");
driver.quit();
```