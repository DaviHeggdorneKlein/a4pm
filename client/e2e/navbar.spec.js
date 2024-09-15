const { test, expect } = require("@playwright/test");

export const homepage = "http://localhost:8080/";

test.describe("NavbarComponent", () => {
  test("Verifica se o componente da navbar está sendo exibido", async ({
    page,
  }) => {
    await page.goto(homepage);
    const navbar = page.locator(".navbar");
    await expect(navbar).toBeVisible();
  });
  test("Verifica se o componente da navbar está sendo exibido", async ({
    page,
  }) => {
    await page.goto(homepage);
    const navbar = page.locator(".navbar");
    await expect(navbar).toBeVisible();
  });
});
