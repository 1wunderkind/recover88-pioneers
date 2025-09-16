# Google Forms Setup Guide for Recover88 Pioneer List

## Step 1: Create Your Google Form

1. **Go to Google Forms**
   - Visit: https://forms.google.com
   - Click "Create a new form" (+ button)

2. **Set Up Form Title**
   - Title: "Recover88 Pioneer List Signup"
   - Description: "Join the Pioneer List for exclusive early access"

## Step 2: Add Required Fields

Create these fields in order:

### Field 1: First Name
- **Type**: Short answer
- **Question**: "First Name"
- **Required**: Yes

### Field 2: Email Address  
- **Type**: Short answer
- **Question**: "Email Address"
- **Required**: Yes
- **Response validation**: Email address

### Field 3: GDPR Consent
- **Type**: Multiple choice
- **Question**: "GDPR Consent"
- **Options**: "Yes", "No"
- **Required**: Yes

### Field 4: UTM Source
- **Type**: Short answer
- **Question**: "UTM Source"
- **Required**: No

### Field 5: UTM Medium
- **Type**: Short answer
- **Question**: "UTM Medium"
- **Required**: No

### Field 6: UTM Campaign
- **Type**: Short answer
- **Question**: "UTM Campaign"
- **Required**: No

### Field 7: UTM Content
- **Type**: Short answer
- **Question**: "UTM Content"
- **Required**: No

### Field 8: Timestamp
- **Type**: Short answer
- **Question**: "Timestamp"
- **Required**: No

## Step 3: Get Your Form ID and Field IDs

1. **Get Form ID**
   - Click "Send" button
   - Copy the form URL
   - Extract the form ID from the URL: `https://docs.google.com/forms/d/YOUR_FORM_ID_HERE/viewform`

2. **Get Field IDs**
   - Right-click on the form page → "View Page Source"
   - Search for "entry." to find field IDs
   - Each field will have an ID like `entry.123456789`

   **Alternative Method:**
   - Fill out the form once
   - Check browser developer tools → Network tab
   - Submit the form and look at the POST request to see field names

## Step 4: Update Landing Page Code

Replace these placeholders in your landing page:

```javascript
// Replace YOUR_GOOGLE_FORM_ID with your actual form ID
'https://docs.google.com/forms/d/YOUR_GOOGLE_FORM_ID/formResponse'

// Replace field IDs with your actual field IDs
entry.FIRSTNAME_FIELD_ID     → entry.123456789
entry.EMAIL_FIELD_ID         → entry.987654321
entry.GDPR_FIELD_ID          → entry.555666777
entry.UTM_SOURCE_FIELD_ID    → entry.111222333
entry.UTM_MEDIUM_FIELD_ID    → entry.444555666
entry.UTM_CAMPAIGN_FIELD_ID  → entry.777888999
entry.UTM_CONTENT_FIELD_ID   → entry.000111222
entry.TIMESTAMP_FIELD_ID     → entry.333444555
```

## Step 5: Set Up Email Notifications

1. **In Google Forms**
   - Click "Responses" tab
   - Click the three dots menu → "Get email notifications for new responses"
   - Enter: `pioneers@recover88.com`

2. **Set Up Google Sheets**
   - Click "Responses" tab
   - Click the Google Sheets icon
   - Create new spreadsheet: "Recover88 Pioneer List"
   - This automatically captures all submissions

## Step 6: Configure Form Settings

1. **Form Settings**
   - Click gear icon (Settings)
   - **General**: 
     - ✅ Collect email addresses
     - ✅ Limit to 1 response per person (optional)
   - **Presentation**:
     - Confirmation message: "Thank you! You've been added to the Pioneer List."

## Step 7: Test Your Setup

1. **Test Form Submission**
   - Fill out your landing page form
   - Check Google Sheets for new row
   - Verify email notification received at pioneers@recover88.com

2. **Verify Data Capture**
   - Check all fields are populated correctly
   - Confirm UTM parameters are captured
   - Test GDPR consent recording

## Example Field ID Mapping

After you get your actual field IDs, update the code like this:

```javascript
// Example with real field IDs (yours will be different)
formData.append('entry.1234567890', firstName);        // First Name
formData.append('entry.0987654321', email);            // Email
formData.append('entry.1122334455', gdprConsent ? 'Yes' : 'No'); // GDPR
formData.append('entry.5566778899', utmData.source || 'Direct'); // UTM Source
// ... etc for all fields
```

## Benefits of This Setup

✅ **Completely Free** - No monthly costs ever
✅ **Unlimited Submissions** - Handle thousands of signups
✅ **Automatic Google Sheets** - Perfect for your workflow
✅ **Email Notifications** - Get notified of each signup
✅ **Reliable Infrastructure** - Google's 99.9% uptime
✅ **Easy Data Export** - Download CSV anytime
✅ **GDPR Compliant** - Google handles data protection
✅ **Ready for Gum Loop** - Easy to integrate later

## Troubleshooting

**Form not submitting?**
- Check form ID is correct
- Verify field IDs match exactly
- Test form directly in Google Forms first

**Not receiving emails?**
- Check spam folder
- Verify email notification is enabled
- Test with a different email address

**Missing data in sheets?**
- Confirm all field IDs are correct
- Check field names match exactly (case sensitive)
- Test each field individually

## Next Steps

1. Create your Google Form following this guide
2. Get your form ID and field IDs
3. Update the landing page code with your specific IDs
4. Test thoroughly
5. Launch and start capturing Pioneer List signups!

Once you have signups flowing, you can easily add Gum Loop integration to automate your Google Drive workflows.

