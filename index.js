"use strict";

const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log("Please wait");
    await page.goto('https://www.yatra.com/', {
        waitUntil: 'networkidle'
    });
    await page.on('console', console.log);
    console.log("Content loaded");

    const BE_flight_origin_city = await page.evaluate((data) => {
        return document.querySelector("#BE_flight_origin_city").value = "Kolkata"
    }, err => console.log(err));

    const BE_flight_arrival_city = await page.evaluate((data) => {
        return document.querySelector("#BE_flight_arrival_city").value = "Bangalore"
    }, err => console.log(err));

    const BE_flight_depart_date = await page.evaluate((data) => {
        return document.querySelector("#BE_flight_depart_date").value = "28/9/2017"
    }, err => console.log(err));

    const BE_flight_return_date = await page.evaluate((data) => {
        return document.querySelector("#BE_flight_return_date").value = "29/9/2017"
    }, err => console.log(err));

    const searchForm = await page.evaluate((data) => {
        return document.querySelector("#BE_flight_flsearch_btn").submit();
    }, err => console.log(err));

    console.log(searchForm);

    await page.evaluate((data) => {
        console.log(
            BE_flight_origin_city, document.querySelector("#BE_flight_origin_city").value, "|",
            BE_flight_arrival_city, document.querySelector("#BE_flight_arrival_city").value, "|",
            BE_flight_depart_date, document.querySelector("#BE_flight_depart_date").value, "|",
            BE_flight_return_date, document.querySelector("#BE_flight_return_date").value, "|"
        )
    });
    // await browser.close();
})();