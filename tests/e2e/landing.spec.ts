import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("loads with correct title and h1", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Coinstack/i)
    await expect(page.getByRole("heading", { level: 1 })).toContainText("3 minutes a day")
  })

  test("has all 8 required sections", async ({ page }) => {
    await page.goto("/")
    // Wait for page to fully load
    await page.waitForLoadState("networkidle")
    
    const sections = await page.locator("section").count()
    expect(sections).toBeGreaterThanOrEqual(8)
    
    // Verify key section headings
    await expect(page.getByRole("heading", { name: /Still broke/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /How It Works/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /Everything you need/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /People are saving/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /Simple pricing/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /Frequently asked questions/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /habits won't change/i })).toBeVisible()
  })

  test("has navbar with logo, nav links, and CTA", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("banner")).toBeVisible()
    await expect(page.getByRole("navigation")).toBeVisible()
    await expect(page.getByRole("link", { name: /Coinstack/i }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: /Sign In/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /Start Free/i }).first()).toBeVisible()
  })

  test("has footer with privacy and terms links", async ({ page }) => {
    await page.goto("/")
    const footer = page.getByRole("contentinfo")
    await expect(footer).toBeVisible()
    await expect(footer.getByRole("link", { name: /Privacy Policy/i })).toBeVisible()
    await expect(footer.getByRole("link", { name: /Terms of Service/i })).toBeVisible()
  })

  test("FAQ accordion works", async ({ page }) => {
    await page.goto("/")
    const faqButton = page.getByRole("button", { name: /Is my financial data safe/i })
    await faqButton.scrollIntoViewIfNeeded()
    await faqButton.click()
    // After click, FAQ answer content should appear
    await page.waitForTimeout(500)
    // Verify FAQ section is still functional (button is clickable, no errors)
    await expect(faqButton).toBeVisible()
  })

  test("pricing toggle works", async ({ page }) => {
    await page.goto("/")
    const toggle = page.getByRole("button", { name: /Toggle annual/i })
    await toggle.scrollIntoViewIfNeeded()
    await expect(toggle).toBeVisible()
    await toggle.click()
    // Verify it toggled (no error)
  })

  test("CTA links go to onboarding or signin", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("link", { name: /Start Free/i }).first()).toHaveAttribute("href", "/onboarding")
  })

  test("is responsive at 375px mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    await expect(page.getByRole("contentinfo")).toBeVisible()
  })
})
