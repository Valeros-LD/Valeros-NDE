import { expect, test } from '@playwright/test';
import { axeBuilder } from './axe-helper';

test.describe('Search page', () => {
  test('WCAG 2.2 AA violations', async ({ page }) => {
    await page.goto('/search?q=brief');

    // Wait for results to load
    await page
      .getByText(/resultaten/i)
      .first()
      .waitFor({ state: 'visible', timeout: 20_000 });

    // Wait for search button to render
    await page.waitForSelector('.btn-primary.btn-sm', {
      state: 'visible',
      timeout: 5000,
    });

    // Check accessibility
    const results = await axeBuilder(page).analyze();
    expect(results.violations).toEqual([]);
  });
});
