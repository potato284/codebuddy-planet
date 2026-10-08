import officialBuddy from '@/assets/buddy-official.png'

interface Props {
  size?: number
  className?: string
}

/**
 * 腾讯 CodeBuddy 官方 IP 形象（取自 codebuddy.ai 官网 Hero 区原图）。
 * 原图直出，不做任何形象上的改动，仅由外层容器控制尺寸与悬浮动效。
 */
export default function BuddyMascot({ size = 320, className = '' }: Props) {
  return (
    <img
      src={officialBuddy}
      alt="CodeBuddy 官方 IP 形象"
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  )
}
