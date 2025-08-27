# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7aec8b54-b785-4515-ae86-bca1479d557f

## Recent Updates

### Resend API Integration & Egyptian Phone Validation

This project has been updated with the following features:

1. **Resend API Integration**
   - Integrated Resend API for email/SMS services
   - Updated email service to support SMS simulation
   - Proper error handling and authentication
   - API key configured via environment variables for security

2. **Egyptian Phone Number Validation**
   - Comprehensive validation for Egyptian phone numbers
   - Supports mobile numbers: 010, 011, 012, 015 (11 digits total)
   - Supports landline numbers with area codes (9-11 digits total)
   - International format support: +20 followed by local number
   - Real-time validation with user-friendly error messages

3. **Form Modifications**
   - Removed all email input fields from authentication forms
   - Updated cart customer information form
   - Phone-based authentication system
   - Updated database schema to remove email dependency

4. **Validation Features**
   - `validateEgyptianPhone()` - Validates Egyptian phone numbers
   - `formatEgyptianPhone()` - Formats phone numbers for display
   - `normalizeEgyptianPhone()` - Normalizes phone numbers for storage
   - Real-time validation feedback in forms
   - Proper error handling and user guidance

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7aec8b54-b785-4515-ae86-bca1479d557f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7aec8b54-b785-4515-ae86-bca1479d557f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
