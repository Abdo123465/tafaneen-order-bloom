
from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://127.0.0.1:8080/")

        # Click the login button to open the dialog
        login_button = page.get_by_role("button", name="تسجيل الدخول").first
        login_button.click()

        # Enter phone number and click send OTP
        phone_input = page.get_by_label("رقم الهاتف")
        phone_input.fill("01234567890")
        send_otp_button = page.get_by_role("button", name="إرسال الرمز")
        send_otp_button.click()
        
        # Wait for the OTP input to be visible
        try:
            otp_input = page.get_by_label("رمز التحقق")
            expect(otp_input).to_be_visible(timeout=10000)
            # Take a screenshot of the OTP dialog
            page.screenshot(path="jules-scratch/verification/verification.png")
        except Exception as e:
            page.screenshot(path="jules-scratch/verification/failure.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()
