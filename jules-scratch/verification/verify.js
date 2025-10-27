const { test, expect } = require('@playwright/test');

test('Login flow', async ({ page }) => {
  // Capture all console logs
  page.on('console', msg => {
    console.log(`Browser Console [${msg.type()}]: ${msg.text()}`);
  });

  await page.goto('http://127.0.0.1:8080');

  // Find all login buttons
  const loginButtons = await page.locator('button:has-text("تسجيل الدخول")');
  const count = await loginButtons.count();
  console.log(`Found ${count} "Login" buttons. Clicking the first one.`);

  // Click the first login button
  await loginButtons.first().click();
  console.log('Login button clicked.');

  // Wait for the phone input to be visible and fill it
  const phoneInput = page.locator('[placeholder="ادخل رقم الهاتف"]');
  await phoneInput.waitFor({ state: 'visible', timeout: 5000 });
  console.log('Phone input found.');
  await phoneInput.fill('+972598765432');
  console.log('Phone number typed.');

  // Click the send OTP button
  const sendOtpButton = page.locator('button:has-text("ارسال الرمز")');
  await sendOtpButton.click();
  console.log('"Send OTP" button clicked.');

  // Wait for the OTP input to appear
  console.log('Waiting for OTP input...');
  const otpInput = page.locator('[placeholder="ادخل الرمز"]');
  try {
    await otpInput.waitFor({ state: 'visible', timeout: 10000 });
    console.log('OTP input found!');
  } catch (error) {
    console.error('Failed to find OTP input.');
    await page.screenshot({ path: 'jules-scratch/verification/failure.png' });
    throw error;
  }
});
