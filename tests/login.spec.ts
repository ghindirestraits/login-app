import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://login-app-qacademy.vercel.app/');
  
  const title = page.locator('.App-header p');
  
  await expect(title).toHaveText('Login');
});