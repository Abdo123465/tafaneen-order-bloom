import { test as setup, expect } from '@playwright/test';

const authFile = 'src/tests/state.json';

setup('authenticate', async ({ page }) => {
  // This test will log in and save the authentication state.
  // Since this app uses Google OAuth, a manual login flow is required the first time.
  // For subsequent runs, the saved state will be used.

  await page.goto('http://127.0.0.1:8080/');

  // Check if we are already logged in from a previous run
  const logoutButton = page.locator('button:has-text("تسجيل الخروج")');
  if (await logoutButton.isVisible()) {
    console.log('Already logged in. Saving state.');
    await page.context().storageState({ path: authFile });
    return;
  }

  // If not logged in, perform the login flow.
  // This part is tricky with OAuth and may require manual intervention the first time.
  // The goal is to get the browser into a logged-in state.

  // Click the main login button in the header
  await page.locator('button:has-text("تسجيل الدخول")').click();

  // The login dialog should appear. Click the Google login button.
  // NOTE: This will open a popup. Playwright needs to be configured to handle it.
  const googleLoginButton = page.locator('button:has-text("الدخول باستخدام جوجل")');
  await expect(googleLoginButton).toBeVisible();

  // This is where it gets complex. For a real CI/CD environment,
  // we would use a mocked login. For this interactive session,
  // I will rely on the fact that I can manually complete the login in the browser
  // that Playwright opens, and then Playwright can save the state.

  console.log('Please complete the Google login in the browser window...');

  // After manual login, the page will redirect back. We wait for the logout button to be visible.
  await expect(logoutButton).toBeVisible({ timeout: 60000 }); // 1 minute timeout for manual login

  // Once we're logged in, save the storage state.
  await page.context().storageState({ path: authFile });
});
