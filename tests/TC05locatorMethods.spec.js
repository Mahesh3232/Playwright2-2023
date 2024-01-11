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
    let ele =  await page.getByAltText('letcode')
    await expect(ele).toBeVisible()
})

test('Get element getByLabel in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByLabel('main navigation')
    await expect(ele).toBeVisible()
})

test('Get element getByPlaceholder in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('MAHESH')
    await page.waitForTimeout(4000)
})

test('get element by getByRole in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.getByRole('checkbox',{name:' I agree to the '}).check()
    await page.waitForTimeout(4000)
})

test('get element by getByText in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await expect(page.getByText('Log in')).toBeVisible()
    await page.getByText(' I agree to the ').check()
    await page.waitForTimeout(4000)
})

test('Get element by getByTitle in Playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele = await page.getByTitle('Koushik Chatterjee')
    await expect(ele).toHaveText(' Koushik Chatterjee ')
    await expect(ele).toBeVisible()
})

test.only('Get element by getByTestId in playwright',async({page})=>{
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await expect(page.locator('#global-nav-search-input')).toBeVisible()
    await page.locator('#global-nav-search-input').fill('Minskole')
    await page.waitForTimeout(4000)
})