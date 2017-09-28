"use strict";

const webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    chromedriver = require('chromedriver');

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();

driver.get("http://google.co.in");
driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.quit();