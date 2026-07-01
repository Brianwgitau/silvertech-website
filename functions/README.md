# Firebase Functions

1. Install dependencies:
   cd functions
   npm install

2. Set mail config values:
   firebase functions:config:set mail.user="your-email@gmail.com" mail.pass="your-email-password" mail.recipient="notify@yourcompany.com"

3. Deploy:
   firebase deploy --only functions

The Cloud Function listens for new documents in the `requests` collection and sends an email notification via Nodemailer.
