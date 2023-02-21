import test,{page,expect} from '@playwright/test'

test('assertions',async({page}) => {
await page.goto('https://kitchen.applitools.com/');  
//await page.pause();
//assertions
//Check if element present or not using expert
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
//Checking if the element is present and performing an action if present
if(page.$('//h1[text()="The Kitchen"]')){   
        console.log('visible');
    }

//check if element hidden or not 
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
//await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

//check if element enabled or not 
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();


//Check text
await expect.soft(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
await expect.soft(page.locator('text=The Kitchen')).toHaveText(/The.*/);
await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('THE KITCHEn');

//check attribute value 
await expect.soft(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a');
await expect.soft(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

//check url & title
await expect.soft(page).toHaveURL('https://kitchen.applitools.com/');
await expect.soft(page).toHaveTitle(/.*Kitchen/);


await expect.soft(page).toHaveScreenshot();
});


