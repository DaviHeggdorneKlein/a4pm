// const { test, expect } = require("@playwright/test");

// export const homepage = "http://localhost:8080/";

// test.describe("NavbarComponent", () => {
//   test("Verifica se o componente da navbar está sendo exibido", async ({
//     page,
//   }) => {
//     await page.goto(homepage);
//     const navbar = page.locator(".navbar");
//     await expect(navbar).toBeVisible();
//   });

//   test("Verifica se ao clicar no botão de login é redirecionado pra página de login", async ({
//     page,
//   }) => {
//     await page.goto(homepage);

//     const loginButton = page.locator(".login-button");
//     await expect(loginButton).toBeVisible();

//     await Promise.all([
//       page.waitForNavigation({ timeout: 10000 }),
//       loginButton.click(),
//     ]);

//     const loginFormWrapper = page.locator("#login-form-wrapper");
//     await expect(loginFormWrapper).toBeVisible();
//   });
// });

// test.describe("LoginFormComponent", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(`${homepage}login`);
//   });

//   test("Verifica se o formulário de login é exibido corretamente", async ({
//     page,
//   }) => {
//     const loginForm = page.locator("#login-form-wrapper");
//     await expect(loginForm).toBeVisible();

//     const formTitle = page.locator(".form-title");
//     await expect(formTitle).toHaveText("Login");

//     const loginInput = page.locator("input[placeholder='Login']");
//     const senhaInput = page.locator("input[placeholder='Senha']");
//     const submitButton = page.locator(".form-submit-button");

//     await expect(loginInput).toBeVisible();
//     await expect(senhaInput).toBeVisible();
//     await expect(submitButton).toHaveText("Entrar");
//   });

//   test("Verifica se a mudança para o formulário de cadastro funciona corretamente", async ({
//     page,
//   }) => {
//     const toggleLink = page.locator(".toggle-form-link");

//     await toggleLink.click();

//     const formTitle = page.locator(".form-title");
//     await expect(formTitle).toHaveText("Cadastro");

//     const nomeInput = page.locator("input[placeholder='Nome']");
//     await expect(nomeInput).toBeVisible();

//     const submitButton = page.locator(".form-submit-button");
//     await expect(submitButton).toHaveText("Registrar");
//   });

//   test("Verifica se a mudança para o formulário de login a partir do cadastro funciona corretamente", async ({
//     page,
//   }) => {
//     const toggleLink = page.locator(".toggle-form-link");

//     await toggleLink.click();
//     await toggleLink.click();

//     const formTitle = page.locator(".form-title");
//     await expect(formTitle).toHaveText("Login");

//     const loginInput = page.locator("input[placeholder='Login']");
//     const senhaInput = page.locator("input[placeholder='Senha']");
//     const submitButton = page.locator(".form-submit-button");

//     await expect(loginInput).toBeVisible();
//     await expect(senhaInput).toBeVisible();
//     await expect(submitButton).toHaveText("Entrar");
//   });

//   test("Verifica o comportamento de cadastro com dados válidos", async ({
//     page,
//   }) => {
//     const toggleLink = page.locator(".toggle-form-link");
//     await toggleLink.click();

//     const nomeInput = page.locator("input[placeholder='Nome']");
//     const loginInput = page.locator("input[placeholder='Login']");
//     const senhaInput = page.locator("input[placeholder='Senha']");
//     const submitButton = page.locator(".form-submit-button");

//     await nomeInput.fill("Novo Usuário");
//     await loginInput.fill("novo@exemplo.com");
//     await senhaInput.fill("senha123");

//     await Promise.all([
//       page.waitForNavigation({ url: `${homepage}`, timeout: 10000 }),
//       submitButton.click(),
//     ]);

//     await expect(page).toHaveURL(`${homepage}`);
//   });

//   test("Verifica o comportamento de cadastro com dados inválidos", async ({
//     page,
//   }) => {
//     const toggleLink = page.locator(".toggle-form-link");
//     await toggleLink.click();

//     const nomeInput = page.locator("input[placeholder='Nome']");
//     const loginInput = page.locator("input[placeholder='Login']");
//     const senhaInput = page.locator("input[placeholder='Senha']");
//     const submitButton = page.locator(".form-submit-button");

//     await nomeInput.fill("Novo Usuário");
//     await loginInput.fill("novo@exemplo.com");
//     await senhaInput.fill("senhaErrada");

//     await submitButton.click();

//     await expect(page).toHaveURL(`${homepage}login`);
//   });

//   test("Verifica o comportamento de login com dados válidos", async ({
//     page,
//   }) => {
//     const loginInput = page.locator("input[placeholder='Login']");
//     const senhaInput = page.locator("input[placeholder='Senha']");
//     const submitButton = page.locator(".form-submit-button");

//     await loginInput.fill("novo@exemplo.com");
//     await senhaInput.fill("senha123");

//     await Promise.all([
//       page.waitForNavigation({ url: `${homepage}`, timeout: 10000 }),
//       submitButton.click(),
//     ]);

//     await expect(page).toHaveURL(`${homepage}`);
//   });

//   test("Verifica o comportamento de login com dados inválidos", async ({
//     page,
//   }) => {
//     const loginInput = page.locator("input[placeholder='Login']");
//     const senhaInput = page.locator("input[placeholder='Senha']");
//     const submitButton = page.locator(".form-submit-button");

//     await loginInput.fill("novo@exemplo.com");
//     await senhaInput.fill("senhaErrada");

//     await submitButton.click();

//     await expect(page).toHaveURL(`${homepage}login`);
//   });
// });
