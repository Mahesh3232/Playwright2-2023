const { test, expect } = require('@playwright/test')

test('Verify contactus functionality', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill('Mahesh')
    await page.locator('[name="last_name"]').fill('Aher')
    await page.locator('[placeholder="Email Address"]').fill('mahesh.aher@gmail.com')
    await page.locator('[name="message"]').fill('I am learning Playwright')
    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

test('Verify contactus functionality with invalid email', async ({ page }) => {
    //AAA
    //Arrange
    //Action 
    //Assert
    //tagname[att = value]
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Mahesh')
    await page.locator('input[name="last_name"]').fill('Aher')
    await page.locator('input[name="email"]').fill('Mahesh')
    await page.locator('textarea[name="message"]').fill('I am learning Js')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toHaveText('Error: Invalid email address')
})

test('Verify reset button functionality', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Mahesh')
    await page.locator('input[name="last_name"]').fill('Aher')
    await page.locator('input[name="email"]').fill('Mahesh')
    await page.locator('textarea[name="message"]').fill('I am learning Js')
    await page.locator('input[type="reset"]').click()
    const firstNamefield = await page.locator('input[name="first_name"]').inputValue();
    console.log(firstNamefield)
    await expect(firstNamefield).toBe('')
    await expect(firstNamefield).toEqual('')
    await expect(page.locator('input[name="first_name"]').inputValue()).toBe('')
})
