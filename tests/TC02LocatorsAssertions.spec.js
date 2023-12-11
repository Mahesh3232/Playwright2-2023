const { test, expect } = require('@playwright/test')



test('Verify locators methods assertions in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')

    //find singal element 
    let fstNameFiled = await page.$('input[name="first_name"]')
    await expect(fstNameFiled).not.toBeNull()
    await expect(fstNameFiled).toBeVisible()

    let fstNameFiled1 = await page.locator('input[name="first_name"]')
    await expect(fstNameFiled1).toBeVisible()
    await expect(fstNameFiled1).toHaveCount(1)

    //Find multiple elements
    let multiEle = await page.$$('input[type="text"]')
    await expect(multiEle.length).toBe(3)

    let multiEle1 = await page.locator('input[type="text"]').count()
    await expect(multiEle1).toBe(3)
    await expect(multiEle1).toEqual(3)

    let multiEle2 = await page.locator('input[type="text"]')
    await expect(multiEle2).toHaveCount(3)

    //find element by class name
    let eleByClass = await page.$$('.text-center')
    await expect(eleByClass.length).toBe(2)

    let eleByClass1 = await page.locator('.text-center').count()
    await expect(eleByClass1).toBe(2)
    await expect(eleByClass1).toEqual(2)

    let eleByClass2 = await page.locator('.text-center')
    await expect(eleByClass2).toHaveCount(2)

    //Find element by id 
    let eleById = await page.$('#contact_form')
    await expect(eleById).not.toBeNull()

    let eleById1 = await page.locator('#contact_form')
    await expect(eleById1).toBeVisible()
    await expect(eleById1).toHaveCount(1)

    //find element by CSS selector
    let eleByCSS = await page.$('input[name="first_name"]')
    await expect(eleByCSS).not.toBeNull()

    let eleByCSS1 = await page.locator('input[name="first_name"]')
    await expect(eleByCSS1).toBeVisible()

    //find element by tag name
    let eleBytagName1 =await page.locator('h2')
    await expect(eleBytagName1).toBeVisible()
})