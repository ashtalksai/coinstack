import { test, expect } from "@playwright/test"

test.describe("Dashboard — Core Product", () => {
  test("loads with challenge card, streak, and activity", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText(/Good morning/i)).toBeVisible()
    await expect(page.getByText(/streak/i).first()).toBeVisible()
    await expect(page.getByText(/TODAY'S CHALLENGE/i)).toBeVisible()
    await expect(page.getByText(/RECENT ACTIVITY/i)).toBeVisible()
  })

  test("challenge card has Done and Skip buttons", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByRole("button", { name: /Done/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /Skip/i })).toBeVisible()
  })

  test("sidebar navigation works", async ({ page }) => {
    await page.goto("/dashboard")
    await page.getByRole("link", { name: /History/i }).click()
    await expect(page).toHaveURL(/history/)
    await page.getByRole("link", { name: /Profile/i }).click()
    await expect(page).toHaveURL(/profile/)
  })

  test("challenge complete API returns success", async ({ page }) => {
    const response = await page.request.post("/api/challenges/complete", {
      data: { challengeId: "c1", action: "complete" },
      headers: { "Content-Type": "application/json" },
    })
    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body.success).toBeTruthy()
  })

  test("challenge today API returns challenge data", async ({ page }) => {
    const response = await page.request.get("/api/challenges/today")
    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body).toHaveProperty("id")
    expect(body).toHaveProperty("text")
    expect(body).toHaveProperty("category")
  })

  test("health endpoint returns ok", async ({ page }) => {
    const response = await page.request.get("/api/health")
    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body.status).toBe("ok")
  })

  test("history page shows calendar and stats", async ({ page }) => {
    await page.goto("/history")
    await expect(page.getByRole("heading", { name: "History", exact: true })).toBeVisible()
    await expect(page.getByText(/Completion Rate/i)).toBeVisible()
    await expect(page.getByText(/Total Challenges/i)).toBeVisible()
  })

  test("profile page shows behavioral radar and settings", async ({ page }) => {
    await page.goto("/profile")
    await expect(page.getByText(/Behavioral Profile/i)).toBeVisible()
    await expect(page.getByText(/Account/i)).toBeVisible()
    await expect(page.getByText(/Subscription/i)).toBeVisible()
  })

  test("dashboard mobile layout has bottom tabs", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/dashboard")
    // Bottom tab bar should have navigation items
    await expect(page.getByRole("link", { name: /Today/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /History/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /Profile/i })).toBeVisible()
  })
})
