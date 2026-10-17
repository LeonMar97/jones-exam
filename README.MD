# Jones Automation Exercise

A Playwright-based UI automation test for the callback request form By Leon Markovich 
    
    #NOTE:
    i wasnt sure if you want the console.log in terminal or in the explorer,
    i did both

## Prerequisites

- Node.js
- npm
- Playwright browsers

## Installation

```bash
npm install
npx playwright install chromium
```

## Running the Test

Run the test in Chromium:

```bash
npx playwright test tests/callback.spec.js --project=chromium
```

Run with a visible browser:

```bash
npx playwright test tests/callback.spec.js --project=chromium --headed
```

## Test Flow

1. Navigate to the callback request form.
2. Fill in the contact information.
3. Select 51–500 employees.
4. Capture a screenshot before submission.
5. Submit the form.
6. Verify that the thank-you message is displayed.
7. Log a success message to the console.

## Screenshots

Screenshots are stored in `screenshots/` directory, using a separate output name for each test.

## Technologies

- JavaScript
- Node.js
- Playwright Test