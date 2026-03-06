import { expect, test } from "vitest";
import { i18n, t, OpenClawError } from "./index.js";

test("i18n localization wrapper", () => {
  i18n.setLocale("en");
  expect(t("cli.start")).toBe("Starting OpenClaw gateway...");
  expect(t("errors.portInUse", { port: 8080 })).toBe("Port 8080 is already in use.");

  i18n.setLocale("zh-CN");
  expect(t("cli.start")).toBe("正在启动 OpenClaw 网关...");
  expect(t("errors.portInUse", { port: 8080 })).toBe("端口 8080 正在被占用。");

  // Fallback testing: key that doesn't exist
  expect(t("cli.unknown")).toBe("cli.unknown");

  // Error wrapper
  const err = new OpenClawError("authRequired");
  expect(err.message).toBe("需要身份验证。");
  expect(err.code).toBe("authRequired");
});
