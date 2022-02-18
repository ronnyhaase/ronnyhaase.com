import { test as baseTest, expect } from '@playwright/test'

// Removes auto-suffix of snapshot filenames
// https://github.com/microsoft/playwright/issues/11134#issuecomment-1044707761
const test = baseTest.extend<{ _autoSnapshotSuffix: void }>({
  _autoSnapshotSuffix: [async ({ }, use, testInfo) => {
      testInfo.snapshotSuffix = "";
      await use();
  }, { auto: true }]
})

test('Visual Regressions', async ({ page, request }) => {
  const breakpoints = [
    { name: 'xs', size: 0 },
    { name: 'sm', size: 576 },
    { name: 'md', size: 768 },
    { name: 'lg', size: 992 },
    { name: 'xl', size: 1200 },
    { name: 'xxl', size: 1400 },
  ];

  await page.goto('/');
  // Wait for intro animation to finish
  await page.waitForTimeout(2000);
  for (let breakpoint of breakpoints) {
    await page.setViewportSize({ width: breakpoint.size, height: 480 })
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(`home-${breakpoint.name}.png`)
  }
})
