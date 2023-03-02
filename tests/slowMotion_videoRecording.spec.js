import { test, expect, chromium } from '@playwright/test'

let browser
let context
let page

test.beforeAll(async ({}) => {

    browser = chromium.launch(
        {
            slowMo: 1000,
            headless: false
        }
    );
    context = await (await browser).newContext(
        {
            recordVideo: {
                dir: 'videos/',
                size: { width: 800, height: 600 }
            }
        }
    );

    page = await context.newPage();
})

test.afterAll(async () => {
    await context.close();
})

test('slowmotion and video recoding test', async ({}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.pause();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    expect((await page).locator('//span/p[@class="oxd-userdropdown-name"]')).toHaveText("Gigi Mamaladze");

})