const { test, expect } = require('@playwright/test')

test('Verify dynyamic dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    let optionsCount = await page.locator('.placeHolderMainText').count()
    console.log(optionsCount)
    for(let i = 0 ; i < optionsCount;i++){
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText)
        if(resultText == "Nigdi"){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(4000)
})