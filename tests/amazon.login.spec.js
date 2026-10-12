import { test, expect } from '@playwright/test';

test('verify login mobiles', async ({ page }) => {


    await page.goto('https://www.amazon.in/');

    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobiles');

    await page.locator('//input[@type="submit"]').click();

    const firstProduct =
    page.locator('//a[@class="a-link-normal s-line-clamp-3 s-link-style a-text-normal"]').nth(1);

    await expect(firstProduct).toBeVisible();

    });