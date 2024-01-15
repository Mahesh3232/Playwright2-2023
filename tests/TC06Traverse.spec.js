const { test, expect } = require('@playwright/test')
const exp = require('constants')


test('Children elements in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let children =await page.$$('.traversal-buttons > *')
    expect(children.length).toBe(5)
})

test('fst  element in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let fstelement = await page.locator('.traversal-drinks-list > li').first()
    await expect(fstelement).toHaveText('Coffee')
})

test('last  element in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let lastEle = await page.locator('.traversal-drinks-list > li').last()
    await expect(lastEle).toHaveText('Sugar')
})

test('nth element in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let milkele = await page.locator('.traversal-drinks-list > li').nth(2)
    await expect(milkele).toHaveText('Milk')
    let vegEle = await page.locator('.traversal-food-list >li').nth(6)
    await expect(vegEle).toHaveText('Vegetables')
})

test.only('PrevElement in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let MilkEle = await page.$('#milk')
    let prevEle = await MilkEle.evaluate((el)=>{
        let txt = el.previousElementSibling.textContent
        return txt
    })
    expect(prevEle).toBe('Tea')
})

