
import { test, expect } from '@playwright/test';

test('Successfully submit callback request', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://test.netlify.app/');

  // Fill out the contact form
  await page.getByRole('textbox', { name: 'Name *' }).fill('Leon');
  await page.getByRole('textbox', { name: 'Email *' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'Phone *' }).fill('+972501234567');
  await page.getByRole('textbox', { name: 'Company' }).fill('Jones');
  await page.getByRole('textbox', { name: 'Website' }).fill('https://example.com');

  // Bonus: Select the number of employees
  await page.getByLabel('Number of Employees').selectOption('51-500');

  // Take a screenshot before submitting
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

await page.screenshot({
  path: `screenshots/callback-${timestamp}.png`,
  fullPage: true
});

  // Submit the form
  await page.getByRole('button', { name: 'Request a call back' }).click();

  page.on('console', msg => {
    console.log(`[BROWSER]: ${msg.text()}`);
  });
  
  await expect(page.getByText(/thank you/i)).toBeVisible();
  


  // i wasnt sure if you want the console/log in terminal or in the explorer,
  // i did both
  await page.evaluate(() => {
    console.log('Successfully reached the thank-you page!');
  });

  console.log('Successfully reached the thank-you page!');
});
