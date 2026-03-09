import type { TranslationMap } from "./en.js";

export const zhCN: TranslationMap = {
  cli: {
    start: "正在启动 OpenClaw 网关...",
    ready: "网关已就绪，运行在端口 {port}。",
    error: "网关错误：{message}",
    restarting: "网关正在重启",
    stopping: "网关正在停止",
    shutdownTimeout: "关闭超时，未进行完全清理即退出。",
  },
  errors: {
    authRequired: "需要身份验证。",
    invalidToken: "无效凭证。",
    portInUse: "端口 {port} 正在被占用。",
    portFree: "端口 {port} 空闲。",
    authTooManyAttempts: "身份验证失败尝试次数过多。请稍后再试。",
    authTooManyAttemptsWs: "未获取授权：身份验证失败尝试次数过多（请稍后再试）",
  },
  security: {
    nonLoopbackWarning: "⚠️ 网关正在绑定至非环回地址。在暴露给公共网络之前，请确保已配置身份验证。",
  },
};
