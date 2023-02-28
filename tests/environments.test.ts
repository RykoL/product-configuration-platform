import { expect, test } from '@playwright/test';

test.describe('Uploading an environment', () => {
	test('Visit the environment page', async ({ page }) => {
		await page.goto('/environments');
		await expect(page.getByRole('heading', { name: 'Environments' })).toBeVisible();
	});
});
