const {test,expect} = require('@playwright/test');
test('googleHomeTest',async ({page}) => {
        await page.goto('https://google.com')
        await expect(page).toHaveTitle('Google')
        await page.close
})