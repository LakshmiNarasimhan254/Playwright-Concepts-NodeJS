import { test, expect} from '@playwright/test';
test('Selector demo', async({page}) =>
{
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    //using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Edison');
   
    // await page.locator('[id="user-name"]').fill('standard_user');
    
    // //using CSS Selector
    //  await page.locator('#login-button').click();

    // //using Text
    // await page.locator('text=LOGIN').click();
    // await page.locator('#password').fill('secret_sauce');

    // //using xpath     
    // await page.locator('//*[@id="password"]').fill('secret_sauce');
    // await page.locator('xpath=//*[@id="password"]').fill('secret_sauce1');
  
    // //using has-text
    // await page.locator('input:has-text("GIN")').click();
    

    


    
   


})
