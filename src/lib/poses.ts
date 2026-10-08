/**
 * 官方 IP 形象姿势图（自动装配）
 *
 * 将图片放入 src/assets/poses/ 目录并按下表命名（png/jpg/jpeg/webp 均可）：
 *   hero.png       → 主页 Hero（坐姿形象）
 *   features.png   → 产品功能板块封面
 *   cases.png      → 用户案例板块封面
 *   practices.png  → 最佳实践板块封面
 *   events.png     → 活动合集板块封面
 *
 * 文件放入后无需修改任何代码，Vite 会通过 import.meta.glob 自动加载；
 * 缺失时回退到官方透明底形象 + CSS 合成的同款封面。
 */
const modules = import.meta.glob('@/assets/poses/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName: Record<string, string> = {}
for (const [path, url] of Object.entries(modules)) {
  const name = path.split('/').pop()?.replace(/\.(png|jpe?g|webp)$/i, '') ?? ''
  if (name) byName[name] = url
}

export function poseImage(id: string): string | undefined {
  return byName[id]
}

export const hasPose = (id: string) => Boolean(byName[id])
