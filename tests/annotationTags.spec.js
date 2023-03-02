import { test, expect } from '@playwright/test';

test.skip('Skipped Test', async({page})=>{
    console.log ('This is not skipped');
});

test('Test Not Ready', async({page})=>{
    test.fail();
    //console.log ('This is maked failed')
});

test.fixme('Test to be fixed', async({page})=>{
       console.log ('This is maked for fixing');
});

test.slow('Test to slowed - 3', async({page})=>{
    console.log ('This will slow down the testtime out to 3 times');
});

// test.only('Only Test', async({page})=>{
//     console.log ('This will run only this test');
// });


test('skip on condition', async({page, browserName })=>{
     test.skip(browserName === 'Chromium', 'This feature is not implemented for Mac')
});

//tags
test('skip on condition @Smoke', async({page, browserName })=>{
    console.log('this is a tagged test')
});



