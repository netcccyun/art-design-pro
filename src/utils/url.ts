/**
 * 获取管理后台基础路径（支持相对路径部署）
 * 部署到任意目录均可正确解析，如 /admin、/manage 等
 */
export function getAdminBaseUrl(): string {
  const base = import.meta.env.BASE_URL
  return base.endsWith('/') ? base : base + '/'
}
