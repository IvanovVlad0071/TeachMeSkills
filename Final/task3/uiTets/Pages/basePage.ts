import { Locator, Page } from "@playwright/test";

export class BasePage {
  constructor(page: Page) {}

  async openSite(page: Page): Promise<void> {
    await page.goto("https://www.onliner.by/");
  }
}