# Jones QA Technical Assignment

A QA technical assignment completed by Leon Markovich, consisting of Playwright UI automation and a payment form QA assessment.

## Part 1: UI Automation

A Playwright-based automated test for the callback request form.

### Prerequisites

- Node.js
- npm
- Playwright browsers

### Installation

```bash
npm install
npx playwright install chromium
```

### Running the Test

Run the test in Chromium:

```bash
npx playwright test tests/callback.spec.js --project=chromium
```

Run with a visible browser:

```bash
npx playwright test tests/callback.spec.js --project=chromium --headed
```

### Test Flow

1. Navigate to the callback request form.
2. Fill in the contact information.
3. Select 51–500 employees.
4. Capture a screenshot before submission.
5. Submit the form.
6. Verify that the thank-you message is displayed.
7. Log a success message to the console.

### Console Logging

Since the assignment did not explicitly specify whether the message should appear in the test runner's terminal or the browser's developer console, I implemented logging in both environments.

The success message is logged only after the thank-you page has been verified.

### Screenshots

Screenshots are stored in the `screenshots/` directory, with a separate filename for each test execution.

## Part 2: Payment Form QA Assessment

This section contains a risk-based QA analysis of the provided payment form mockup.

The assessment covers:

- **Usability:** Field labeling, missing currency information, and payment flow clarity.
- **Functional Testing:** Credit card validation, expiration dates, and duplicate submissions.
- **Security:** Sensitive payment data handling, server-side validation, and 3D Secure authentication.
- **Performance and Reliability:** Processing delays, loading indicators, and network error handling.

### Manual Test Cases

Three sample test cases were designed:

1. **TC-01:** Successful submission with valid payment information.
2. **TC-02:** Invalid and expired credit card validation.
3. **TC-03:** Duplicate payment submission prevention.

### Proposed Solution

The assessment includes a proposed solution for preventing duplicate payments using server-side idempotency, safe retry handling, and appropriate UI feedback.

### Documentation

The complete analysis, test cases, and proposed solution are available in:

`docs/Payment_Form_QA_Assessment.docx`

**Note:** The payment form assessment is based on the provided mockup. Potential security and functional issues require further verification against a working application.

## Technologies

- JavaScript
- Node.js
- Playwright Test

## Author

Leon Markovich