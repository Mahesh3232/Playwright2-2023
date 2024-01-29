// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle

const { test, expect } = require('@playwright/test')
test('Get element by getByAltText in playwright',async({page})=>{
 await page.goto('https://letcode.in/test#google_vignette')
 let ele = await page.getByAltText('letcode')
 await expect(ele).toBeVisible()
})

test('Get element by getBylable in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele1 = await page.getByLabel('main navigation')
    await expect(ele1).toBeVisible()
})

test('Get element by getByPlaceholder in playwrigth',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('Minskole')
    await page.waitForTimeout(4000)
})

test.only('get elemts by getByRole in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.getByRole('checkbox',{name:' I agree to the '}).check()
    await page.waitForTimeout(4000)
})