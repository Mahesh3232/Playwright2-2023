const { test, expect } = require('@playwright/test')
const { subscribe } = require('diagnostics_channel')

test('Click on the element',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[placeholder="First Name"]').fill('Mahesh')
    await page.locator('input[placeholder="Last Name"]').fill('Aher')
    await page.locator('input[placeholder="Email Address"]').fill('mahesh@gmail.com')
    await page.locator('textarea[placeholder="Comments"]').fill('I am learning playwright')
    await page.locator('input[type="submit"]').click()
    //await page.waitForTimeout(4000)
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

test('type into input fields',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('input[placeholder="First Name"]','Mahesh')
    await page.fill('input[placeholder="Last Name"]','Aher')
    await page.fill('input[placeholder="Email Address"]','mahesh.aher@gmail.com')
    await page.fill('textarea[placeholder="Comments"]','I am learning playwright')
    let SubmitBtn = await page.locator('input[type="submit"]')
    SubmitBtn.click()
    //await page.waitForTimeout(4000)
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

test.only('Clearing the input filed',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('input[placeholder="First Name"]','Mahesh')
    await page.fill('input[placeholder="Last Name"]','Aher')
    await page.locator('input[value="RESET"]').click()
    let fstNameFiled = await page.$eval('input[placeholder="First Name"]',x => x.value)
    expect(fstNameFiled).toBe('')
    const lastNamefield = await page.locator('input[placeholder="Last Name"]').inputValue();
    await expect(lastNamefield).toBe('')
})