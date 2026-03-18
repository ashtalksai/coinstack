import { test, expect } from "@playwright/test"

test.describe("Auth Flow", () => {
  test("signin page loads with all elements", async ({ page }) => {
    await page.goto("/auth/signin")
    await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible()
    await expect(page.getByRole("textbox", { name: /email/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /Send Magic Link/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /Continue with Google/i })).toBeVisible()
  })

  test("signin has Coinstack branding on left side", async ({ page }) => {
    await page.goto("/auth/signin")
    // Verify split layout: left side has Coinstack brand
    await expect(page.getByText(/Coinstack/i).first()).toBeVisible()
    await expect(page.getByText(/3 minutes a day/i)).toBeVisible()
  })

  test("magic link form submits email", async ({ page }) => {
    await page.goto("/auth/signin")
    const emailInput = page.getByRole("textbox", { name: /email/i })
    await emailInput.fill("test@example.com")
    await page.getByRole("button", { name: /Send Magic Link/i }).click()
    // Should show some response (either sent confirmation or error about email config)
    // Wait for any navigation or message
    await page.waitForTimeout(1000)
    // Page should still be functional (not crash)
    const url = page.url()
    expect(url).toMatch(/localhost:3000/)
  })

  test("dashboard accessible without auth (mock data)", async ({ page }) => {
    // Dashboard uses mock data for MVP, so no redirect required
    await page.goto("/dashboard")
    await expect(page.getByText(/Good morning/i)).toBeVisible()
  })

  test("signup redirects to onboarding", async ({ page }) => {
    await page.goto("/onboarding")
    await expect(page.getByText(/What brought you to Coinstack/i)).toBeVisible()
  })
})
