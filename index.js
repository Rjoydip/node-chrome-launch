"use strict";

const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const chromedriver = require('chromedriver');

(async() => {
    const driver = await new webdriver.Builder()
        .forBrowser("chrome")
        .build();

    await driver.manage().window().maximize()
    // go to site
    await driver.get("https://www.yatra.com");

    // find target element
    driver.findElement(By.name('flight_origin_city')).sendKeys('kolkata');
    driver.findElement(By.name('flight_destination_city')).sendKeys('bangalore');
    await driver.quit();
})()