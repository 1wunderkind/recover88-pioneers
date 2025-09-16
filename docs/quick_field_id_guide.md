# Quick Guide: Finding Entry Field IDs

## You're in the right place! 

The page source you're viewing contains the field IDs. Here's exactly what to do:

## Step 1: Search for Entry Fields
1. **Press Ctrl+F** (Windows) or **Cmd+F** (Mac)
2. **Type**: `entry.`
3. **Press Enter**

## Step 2: Look for These Patterns
You'll find lines that look like:
```html
<input type="text" name="entry.123456789" ...>
<input type="email" name="entry.987654321" ...>
<div data-params="%.@.[entry.555666777]" ...>
```

## Step 3: Match Fields to IDs
The fields appear in the order you created them:
1. **First Name** → `entry.XXXXXXXXX`
2. **Email Address** → `entry.XXXXXXXXX` 
3. **GDPR Consent** → `entry.XXXXXXXXX`
4. **UTM Source** → `entry.XXXXXXXXX`
5. **UTM Medium** → `entry.XXXXXXXXX`
6. **UTM Campaign** → `entry.XXXXXXXXX`
7. **UTM Content** → `entry.XXXXXXXXX`
8. **Timestamp** → `entry.XXXXXXXXX`

## Step 4: Copy the Numbers
For each field, copy just the number part:
- If you see `entry.123456789`, copy `123456789`
- If you see `entry.987654321`, copy `987654321`

## Step 5: Send Me the List
Format like this:
```
First Name: entry.123456789
Email Address: entry.987654321
GDPR Consent: entry.555666777
UTM Source: entry.111222333
UTM Medium: entry.444555666
UTM Campaign: entry.777888999
UTM Content: entry.000111222
Timestamp: entry.333444555
```

The entry fields are definitely in that page source - just search for "entry." and you'll find them!

