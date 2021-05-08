import puppeteer from "puppeteer"; // 1

let browser;
let page;

// 2
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

// 3
test("renders the home page", async () => {
    await page.waitForSelector("#root > div > main > div > div.subreaditsSection > div:nth-child(1) > div > a:nth-child(1)")
    await page.waitForSelector('#root > div > main > div > div.subreaditsSection > div:nth-child(1) > div > h3 > a')
});

// 4
afterAll(() => {
  browser.close();
});