const { test, expect } = require('@playwright/test');

const BASE = process.env.BASE_URL || 'http://localhost:8080';

test('index carga y muestra contenido de Login', async ({ page }) => {
  await page.goto(`${BASE}/`);


  await expect(page).toHaveTitle(/.+/);


  await expect(page.locator('body')).toContainText(/Iniciar Sesión/i);
  await expect(page.locator('body')).toContainText(/Correo electrónico/i);
  await expect(page.locator('body')).toContainText(/Contraseña/i);


  await expect(page.getByRole('button', { name: /Ingresar/i })).toBeVisible();
});

test('panel-admin responde 200 y carga', async ({ page }) => {
  const res = await page.goto(`${BASE}/panel-admin.html`);
  expect(res.status()).toBe(200);


  await expect(page.locator('body')).toContainText(/Panel/i);
});
