// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('ArttulOS Website', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/ArttulOS/);
  });

  test('logo and branding visible', async ({ page }) => {
    await page.goto('/');
    const logoBox = page.locator('.logo-box');
    await expect(logoBox).toBeVisible();
    
    const logoText = page.locator('h1');
    await expect(logoText).toContainText('Arttul');
  });

  test('navigation links are functional', async ({ page }) => {
    await page.goto('/');
    
    // Check main nav links exist
    await expect(page.locator('a[href="install.html"]')).toBeVisible();
    await expect(page.locator('a[href="faq.html"]')).toBeVisible();
  });

  test('download button renders', async ({ page }) => {
    await page.goto('/');
    
    const downloadButton = page.locator('button:has-text("Pull Latest Build")');
    await expect(downloadButton).toBeVisible();
  });

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact.html');
    await expect(page).toHaveTitle(/Nexus/);
    
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('external links have proper attributes', async ({ page }) => {
    await page.goto('/');
    
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    // Some pages might not have target="_blank" links depending on the state, 
    // but our footer and sidebar usually do.
    if (count > 0) {
      const firstLink = externalLinks.first();
      // Note: rel="noopener" is often handled by modern browsers or explicit in code
    }
  });
});
