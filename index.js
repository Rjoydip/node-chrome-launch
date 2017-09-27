"use strict";

const webdriver = require("selenium-webdriver");
const chromedriver = require('chromedriver');

const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build();

driver.get("http://google.co.in");
driver.quit();