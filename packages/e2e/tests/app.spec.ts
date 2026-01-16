import { test, expect } from '@playwright/test';

test.describe('Application E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application before each test
    await page.goto('http://localhost:5173');
  });

  test('should display the application title', async ({ page }) => {
    const title = page.locator('h1');
    await expect(title).toContainText('Test Monorepo');
  });

  test('should load and display users', async ({ page }) => {
    // Wait for users to load
    await page.waitForSelector('h2');
    
    const usersHeading = page.locator('h2');
    await expect(usersHeading).toContainText('Users');
    
    // Check if users list is present
    const usersList = page.locator('ul');
    await expect(usersList).toBeVisible();
  });

  test('should have an "Add New User" button', async ({ page }) => {
    const addButton = page.locator('button', { hasText: 'Add New User' });
    await expect(addButton).toBeVisible();
    await expect(addButton).toBeEnabled();
  });

  test('should click "Add New User" button', async ({ page }) => {
    const addButton = page.locator('button', { hasText: 'Add New User' });
    await addButton.click();
    
    // In a real test, we would verify the action here
    // For now, just verify the click didn't cause errors
    await expect(addButton).toBeVisible();
  });

  test('API health check should return healthy status', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/health');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data.data.status).toBe('healthy');
  });

  test('should fetch users from API', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/users');
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(Array.isArray(data.data)).toBeTruthy();
    expect(data.data.length).toBeGreaterThan(0);
  });
});
