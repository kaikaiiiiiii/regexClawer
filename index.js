const fs = require('fs');
const path = require('path');
const chromium = require('playwright-chromium')
const nodemailer = require('nodemailer');
const config = require('./config.js');


const browser = await chromium.launchPersistentContext(config.userDataDir, {})

async function (url, browser) {
    console.log(url);
    const page = await browser.newPage();
    await page.goto(url);
    page.close();
}