import{test,expect} from '@playwright/test'

test('applitools_login_test',async({page})=>{
    await page.goto('https://demo.applitools.com/');
    //await page.pause();
    await page.getByPlaceholder('Enter your username').fill('Lakshmi');
    await page.getByPlaceholder('Enter your password').fill('my_secret_password');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page.locator('//div[@class="logged-user-name"]')).toContainText("Gomez");
});

test('orangeHRM_login_test',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   // await page.pause();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('//span/p[@class="oxd-userdropdown-name"]')).toHaveText("Gigi Mamaladze");
   // page.pause();
});

test('demoPcommerce_login_test',async({page})=>{
   
  await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').press('Control+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').press('Control+a');
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  page.close();
   
});

