import type { TranslationMap } from "./en.ts";

export const zhCN: TranslationMap = {
  cli: {
    start: "正在启动 OpenClaw 网关...",
    ready: "网关已就绪，运行在端口 {port}。",
    error: "网关错误：{message}",
  },
  errors: {
    authRequired: "需要身份验证。",
    invalidToken: "无效令牌。",
    portInUse: "端口 {port} 正在被占用。",
    portFree: "端口 {port} 是空闲的。",
  },
};
