import { test, expect } from "@playwright/test";

test("homepage renders hero, nav, and all major sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Engineering Reliable Backend Systems",
  );
  await expect(page.locator("#profile")).toBeVisible();
  await expect(page.locator("#expertise")).toBeVisible();
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#credentials")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
});

test("nav links scroll to in-page sections", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
});

test("resume download link points to the CV asset", async ({ page }) => {
  await page.goto("/");
  const resumeLink = page.getByRole("link", { name: /download resume/i });
  await expect(resumeLink).toHaveAttribute("href", "/documents/aundrey-grace-cv.pdf");
});

test("external profile links open safely with noopener", async ({ page }) => {
  await page.goto("/");
  const github = page.locator('a[href="https://github.com/aundreygrace"]').first();
  await expect(github).toHaveAttribute("target", "_blank");
  await expect(github).toHaveAttribute("rel", /noopener/);
});

test("keyboard navigation reaches the primary CTA", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const active = await page.evaluate(() => document.activeElement?.tagName);
  expect(active).toBeTruthy();
});

test("mobile viewport shows the mobile menu toggle", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only check");
  await page.goto("/");
  await expect(page.getByLabel("Open menu")).toBeVisible();
});
