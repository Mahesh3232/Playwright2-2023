const { test, expect } = require('@playwright/test')


test('Children elements in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let children =await page.$$('.traversal-buttons > *')
    expect(children.length).toBe(5)
})