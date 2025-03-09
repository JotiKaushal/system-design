const puppeteer = require("puppeteer");
//IIFE (function(){})()
(async()=>{
    const browser = await puppeteer.launch({haedless:false,
        slowMo:100,
        ignoreDefaultArgs: ['--disable-extensions'], args: ["--window-size=1620,1080"]});
    const page = await browser.newPage();
    await page.goto("https://namastedev.com");
    await page.setViewport({width:1620, height:1080});
    const corsesLink = ".menu > li:nth-child(3) > a";
    await page.waitForSelector(corsesLink);
    await page.click(corsesLink);
    const corseLink = ".bg-sucess-btn";
    await page.waitForSelector(corseLink);
    await page.click(corseLink);
    console.log("we page loaded");
    await browser.close();
})();
///collect logs >> sens it to email >> CRON job to run script everyday at 8 am