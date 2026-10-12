import { test, expect } from '@playwright/test';

test('verify flipcart login', async ({ page }) => {

await page.goto('https://www.flipkart.com/');

await page.locator('//span[@class="b3wTlE"]').click();

await page.locator('(//input[@style="color:#3d3d3dff"])').nth(0).fill('mobiles')

await page.locator('(//input[@style="color:#3d3d3dff"])').nth(0).press('Enter');

});
