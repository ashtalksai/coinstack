import { test, expect } from "@playwright/test"

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
]

const marketingPages = ["/", "/pricing", "/auth/signin", "/privacy", "/terms"]
const appPages = ["/dashboard", "/history", "/profile", "/onboarding"]

for (const vp of viewports) {
  test.describe(`Marketing pages @ ${vp.name} (${vp.width}px)`, () => {
    for (const path of marketingPages) {
      test(`${path} renders without errors`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height })
        
        const errors: string[] = []
        page.on("pageerror", (err) => errors.push(err.message))
        
        await page.goto(path)
        await page.waitForLoadState("networkidle")
        
        // No JS errors
        expect(errors).toHaveLength(0)
        
        // Page has content
        await expect(page.locator("body")).toBeVisible()
        
        // Has navbar (except auth page which has custom layout)
        if (!path.includes("signin")) {
          await expect(page.getByRole("banner")).toBeVisible()
        }
      })
    }
  })

  test.describe(`App pages @ ${vp.name} (${vp.width}px)`, () => {
    for (const path of appPages) {
      test(`${path} renders without errors`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height })
        
        const errors: string[] = []
        page.on("pageerror", (err) => errors.push(err.message))
        
        await page.goto(path)
        await page.waitForLoadState("networkidle")
        
        // No JS errors
        expect(errors).toHaveLength(0)
        
        // Page has content
        await expect(page.locator("body")).toBeVisible()
      })
    }
  })
}
