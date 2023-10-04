import { test, expect } from "@playwright/test";

test("Tetris game", async ({ page }) => {
  const SPACE_BAR = "";
  const { TETRIS_APP_HOST, TETRIS_APP_PORT, TETRIS_APP_PATH } = process.env;

  await page.goto(
    `http://${TETRIS_APP_HOST}:${TETRIS_APP_PORT}/${TETRIS_APP_PATH}`
  );

  await page.getByRole("link", { name: "Tetris" }).click();
  await page.getByRole("link", { name: "play the game" }).click();

  await expect(page.getByText("score 00000")).toBeVisible();
  await expect(page.getByText("rows 0")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Press Space to Play." })
  ).toBeVisible();
  await expect(page.locator("#upcoming")).toBeVisible();

  await page.press(SPACE_BAR);
});
