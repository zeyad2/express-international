# Contact Form Setup Instructions

This document explains how to configure the contact form to automatically send emails to `zeyadsattar.me@gmail.com`.

## Current Implementation

The contact form uses **EmailJS** for sending emails directly from the frontend without requiring a backend server. When EmailJS is not configured, it falls back to opening the user's default email client.

## EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for Gmail:
   - Click on Gmail
   - Authorize EmailJS to access your Gmail
   - Note down the **Service ID** (e.g., `service_abcd123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   Company: {{company}}
   Phone: {{phone}}
   Service Interest: {{service_interest}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```
4. Note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (e.g., `abcd1234567890`)

### Step 5: Update Environment Variables
1. Open the `.env` file in the project root
2. Replace the placeholder values:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abcd123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcd1234567890
   ```

### Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check `zeyadsattar.me@gmail.com` for the email

## Alternative: Formspree (Simpler Setup)

If you prefer a simpler setup, you can use Formspree instead:

### Option 1: Formspree Setup
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a new form
3. Get your form endpoint URL
4. Update the form action in `Contact.tsx` to point to Formspree

### Option 2: Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to the form
2. Netlify will automatically handle form submissions

## Current Fallback Behavior

If EmailJS is not configured (default state), the form will:
1. Validate the required fields
2. Open the user's default email client
3. Pre-fill an email to `zeyadsattar.me@gmail.com` with all form data
4. User needs to manually send the email

## Troubleshooting

### EmailJS Not Sending Emails
1. Check console for error messages
2. Verify all environment variables are set correctly
3. Ensure EmailJS service is active
4. Check EmailJS dashboard for usage limits

### Gmail Specific Issues
1. Make sure 2-factor authentication is enabled
2. Use app-specific password if required
3. Check Gmail spam folder

### Development vs Production
- Environment variables with `VITE_` prefix work in both development and production
- Make sure to set the same variables in your production environment

## Security Notes

- Never commit actual EmailJS credentials to version control
- The `.env` file is already in `.gitignore`
- For production, set environment variables in your hosting platform
- EmailJS public key is safe to expose in frontend code

## Support

If you need help setting up EmailJS, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)