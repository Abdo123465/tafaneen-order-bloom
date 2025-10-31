import { test, expect } from '@playwright/test';

test.describe('Cart Authentication Flow', () => {
  // Run tests in this file in parallel
  test.use({
    // We need to be logged in for this test.
    storageState: 'src/tests/state.json',
  });

  test('should show "Complete Order" button when user is logged in', async ({ page }) => {
    // 1. Navigate to the application's root page.
    await page.goto('http://127.0.0.1:8080/');

    // 2. Click the cart button to open the cart.
    await page.locator('button:has(svg > path[d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"])').click();

    // 3. Wait for the "Complete Order" button to be visible and enabled.
    // This also serves to test that the "Loading..." state is handled correctly.
    const completeOrderButton = page.locator('button:has-text("إتمام الطلب")');
    await expect(completeOrderButton).toBeVisible({ timeout: 10000 });
    await expect(completeOrderButton).toBeEnabled();

    // 4. Take a screenshot for visual confirmation.
    await page.screenshot({ path: 'src/tests/screenshots/cart-auth-fix.png' });
  });
});
