import { test, expect } from '@playwright/test'

test('SEO', async ({ page, request }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Ronny Haase/)

  const metaDescription = await page.getAttribute('meta[name="description"]', 'content')
  await expect(metaDescription.length).toBeGreaterThan(0)

  const msValidate = await page.getAttribute('meta[name="msvalidate.01"]', 'content')
  await expect(msValidate.length).toBeGreaterThan(0)

  const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content')
  await expect(ogTitle.length).toBeGreaterThan(0)

  const ogDescription = await page.getAttribute('meta[property="og:description"]', 'content')
  await expect(ogDescription.length).toBeGreaterThan(0)

  const robotsTxtRespone = await request.get('/robots.txt')
  expect(robotsTxtRespone.ok()).toBeTruthy()
  expect((await robotsTxtRespone.text()).length).toBeGreaterThan(0)
})
