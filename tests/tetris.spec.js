import { test, expect } from "@playwright/test";

test("Tetris game", async ({ page }) => {
  const SPACE_BAR = "";
  const { TETRIS_APP_HOST, TETRIS_APP_PORT, TETRIS_APP_PATH } = process.env;

  // should be similar to http://127.0.0.1:8000/pages/githubuniverseworkshops/github-devsecops-fundamentals/
  console.log(
    `http://${TETRIS_APP_HOST}:${TETRIS_APP_PORT}/${TETRIS_APP_PATH}`
  );
  await page.goto(
    `http://${TETRIS_APP_HOST}:${TETRIS_APP_PORT}/${TETRIS_APP_PATH}`
  );

  await page.getByRole("link", { name: "Tetris Game" }).click();
  await expect(page.getByText("score 00000")).toBeVisible();
  await expect(page.getByText("rows 0")).toBeVisible();
  await expect(page.locator("#upcoming")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Press Space to Play." })
  ).toBeVisible();

  // await page.press(SPACE_BAR);
  await page.getByRole("link", { name: "Press Space to Play." }).click();
  await page.waitForTimeout(1 * 10 * 1000);
  await expect(page.getByText("score 00000")).not.toBeVisible();
});
