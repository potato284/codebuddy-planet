export interface Article {
  title: string
  url: string
  cover: string
}

export interface Section {
  id: string
  nav: string
  title: string
  subtitle: string
  accent: string
  albumUrl: string
  articles: Article[]
}

const ALBUM_FEATURES =
  'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkwMDY4OTI4MA==&action=getalbum&album_id=4241631434626482181#wechat_redirect'
const ALBUM_CASES =
  'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkwMDY4OTI4MA==&action=getalbum&album_id=4241619520756301852#wechat_redirect'
const ALBUM_PRACTICE =
  'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkwMDY4OTI4MA==&action=getalbum&album_id=3569211206067994626#wechat_redirect'
const ALBUM_EVENTS =
  'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkwMDY4OTI4MA==&action=getalbum&album_id=4241622922773053442#wechat_redirect'

export const sections: Section[] = [
  {
    id: 'features',
    nav: '产品功能',
    title: '产品功能',
    subtitle: '第一时间解锁 CodeBuddy 新功能，追踪每一次版本焕新',
    accent: 'linear-gradient(135deg,#22d3ee,#818cf8)',
    albumUrl: ALBUM_FEATURES,
    articles: [
      {
        title: '自动化复杂命令行任务：CodeBuddy Code 1.20 带来更强规划与扩展能力',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502673&idx=1&sn=d357e3ec34661a3fe331bdaebfe062b9&chksm=c042b7bef7353ea8fd0bfe2715ae7265975fc20b306bd6813c625d50c35045c47a9f6af21a02#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFwribEzLUJaQBHOagdkEeR2kFhBCOdiaxqjgID3xOJf5eqOz5pYDhLv03eLvzkR4mgyaYzhBA19kcsw/640?wx_fmt=jpeg',
      },
      {
        title: '真·沉浸式终端体验：支持多智能体任务并行、拖拽分析图片、YOLO 模式等',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502272&idx=1&sn=1e1060c958b41b2a339ad3d0986d321f&chksm=c042b52ff7353c392510f6da6e3c55d8ffc16beaaf7b4d737654c294d9569831fdc6095bb41b#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFxmZJp2xCPVTic1hmt4VSuavfibU9ticUGYVREwwqufwsUy9iaUI1BbiaXDTjGJR2Ta2t4sV6yibeqfL1jQ/640?wx_fmt=jpeg',
      },
      {
        title: 'CodeBuddy IDE 1.0 正式版焕新发布！支持 Web Fetch、自定义指令、MCP 市场等，打造你的专属工作流',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502532&idx=1&sn=4e995953f515da045262951a35ec6f54&chksm=c042b62bf7353f3d685bd5c05fd0a8ced8ccb32674daa089f355eac7eeaf01710cf9c7889ad8#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFwvnTTWdSNfzwhExKe0Aib5HyonNadmBe7uI7exhP1aiaIs39Doqd9ibKk4qNEeia1vCLbXukXjr3rpxQ/640?wx_fmt=jpeg',
      },
      {
        title: '腾讯的 AI CLI 上线！CodeBuddy 实现业界首个三端全开发场景覆盖',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502109&idx=1&sn=6683d29b2e00736240c7438e087a5edb&chksm=c042b5f2f7353ce4d03c209b75dece5a8ea9198afffd859faedd657575f6ca0ffe91f7843ec1#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFxKAdACI063FDeHS8OjSSUlSohFfTtflexFODmceZSUGpuyZ6XzJQr6PiaRl5T6cicITJ1yib2K8Gb3Q/640?wx_fmt=jpeg',
      },
      {
        title: '重磅升级丨CodeBuddy 全面融入微信开发者工具 2.0，一句话让你的小程序立等可取',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247503062&idx=1&sn=d00d218217d8fdf9d9866cfc082b9464&chksm=c042b039f735392f0c030765d8bb3d3ad2f344d5b43c7a5ec031ce1d79f95312c683b6d83ddd#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFzURUkxXhN23BN7bzAUM5SgfOdOjMMYU7b8YWKZypUCHtUL4utFT6OricricAqqsuTLnAzbXBJC4kxw/640?wx_fmt=jpeg',
      },
      {
        title: 'GLM-4.6 可用！IDE、插件、CLI 国内版已同步上线',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502907&idx=1&sn=3a8e5fa272f49281048ec9675aed240d&chksm=c042b0d4f73539c2122c56bf3753a3bac321ec2594a65832624554bdf9febadef4d71c34faac#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFzA5ArkSE1KaZYmicfpysnZw3sibESHqYc1wxVbDK2DyGDT2VaExf6iaOld6bUfedl1g5IibgxHibCZKEA/640?wx_fmt=jpeg',
      },
    ],
  },
  {
    id: 'cases',
    nav: '用户案例',
    title: '用户案例',
    subtitle: '看看团队与开发者如何用 CodeBuddy 把想法变成产品',
    accent: 'linear-gradient(135deg,#f472b6,#fb923c)',
    albumUrl: ALBUM_CASES,
    articles: [
      {
        title: '用户案例丨设计学教授用 CodeBuddy 半小时开发 APP，获 22 万围观，一周付费用户破百！',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247501966&idx=1&sn=084f5d01d2d5190ba99392b3bcfeb97c&chksm=c042b461f7353d779b4420418434d1f120c3f6e08195d12884b5508095a050d50240b60e053a#rd',
        cover: '',
      },
      {
        title: '还在苦恼微信开发者工具没有插件？看卡兹克老师“一句话，半小时，开发一个小程序”实战分享',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247501585&idx=1&sn=fc5940a485c5b7ad2938030ce6e18dba&chksm=c042bbfef73532e8b40a476fa147afbf5d0b87ad8ca7b2921aa392e0b1bb47a0ec9a7cf47df6#rd',
        cover: '',
      },
      {
        title: '零基础 4 小时用腾讯云代码助手 CodeBuddy 做一款音视频处理软件',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247501665&idx=1&sn=066bbdcf9c080819e68b6d0577047ae6&chksm=c042bb8ef7353298726961e22a292502f0a79e84fc539b3c450c91d92e34f75614703609f6cf#rd',
        cover: '',
      },
      {
        title: '9 年码龄 3 万粉博主教你从 0 到 1 用腾讯云代码助手 + DeepSeek 写一个浏览器插件',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247500301&idx=1&sn=df66de7e3264c4d2994da13b355c9db1&chksm=c042bee2f73537f4478966b61a60e251de8384a37ba52f9981e1096ef8c7aec9727ac5ca780a#rd',
        cover: '',
      },
      {
        title: '0 基础也能学会！用 CodeBuddy + CloudBase 开发健康打卡 Web 应用（完整教程）',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504086&idx=1&sn=6fa88e15c502232685d02a1619972d31&chksm=c042ac39f735252f5ed18d193e64981ca8ba6f8179197164d60929d1a99da313814709943e64#rd',
        cover: '',
      },
      {
        title: '文科生亲测！不懂代码也能用 CodeBuddy，一天内打造专属新年幸运签',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504252&idx=1&sn=344768d7a191adec16738c73537e9895&chksm=c042ad93f735248503dd7c4ff4503084594c7ed22c4110cfbea5a8fca60c853baa4a474ce2ef#rd',
        cover: '',
      },
    ],
  },
  {
    id: 'practices',
    nav: '最佳实践',
    title: '最佳实践',
    subtitle: '可落地的开发实践指南，助你把 CodeBuddy 用到极致',
    accent: 'linear-gradient(135deg,#34d399,#22d3ee)',
    albumUrl: ALBUM_PRACTICE,
    articles: [
      {
        title: '告别按 Token 付费焦虑，CodeBuddy 自定义模型一键接入实战指南',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504980&idx=1&sn=9457ba1b1bdd52fdc491ae1a224a5c8021&chksm=c042a8bbf73521ad0202b0210b8eaa949d6e844bb2e14a90d63c93a12a61db6471cafd126264#rd',
        cover:
          'http://mmecoa.qpic.cn/sz_mmecoa_jpg/ZS8oYianH8vTE31sUsoq0EQTr3jXAx7FZibYGRJ5Bib3NCbvg06R8iboIqd2RC8mmEBAGoQUXWRKKntDIyNDfwB1ns97KQVmWB9NdCvkw5EhhZM/300',
      },
      {
        title: '用 CodeBuddy Agent SDK 构建你的第一个智能代理',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504914&idx=1&sn=20e082f146d6dfea099d14ca808abcbc&chksm=c042a8fdf73521ebbb6c6ec5e9eac9b9c3051ecddedf3a7e876f9b5fbea0b285e2de064478ec#rd',
        cover:
          'http://mmecoa.qpic.cn/sz_mmecoa_jpg/ZS8oYianH8vQ3RO42ib0aibauJnM03AFK1fSdjoeTxwod8qgngszE5jicMCqibTR6FxYAf5QWQCibUY3YduyJRrrS3yoboBVf74wCXYw2gZahCw34/300',
      },
      {
        title: 'CodeBuddy Code 进阶指南：从入门到精通的最佳实践',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504870&idx=1&sn=10319e94d99f925c9a85804edd12cbc9&chksm=c042af09f735261fb7766fa763598da088361d0026c72c098f2a184aa394b84b6c#rd',
        cover:
          'http://mmecoa.qpic.cn/sz_mmecoa_jpg/ZS8oYianH8vQfnCH0usAiavnYyIVYT7eeZOqzftddiaDJSKQ1pKQPt93y1iaTUnkkzSc3xSLLa2hgekFbASdNgBD3kRFWVXy/300',
      },
      {
        title: 'CodeBuddy Code Agent Teams：让多个 AI 组队干活，复杂任务一次搞定',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504790&idx=1&sn=5c9c7f9419ed9ad6e9a31eef55594fb3&chksm=c042af79f735266ff02ccc825d93eb36c30e036ad0daae0175bcc200d4735049b31720f6ef76#rd',
        cover:
          'http://mmecoa.qpic.cn/sz_mmecoa_jpg/ZS8oYianH8vS5vEaSXTQ86COGXbfJm0AMdtFOH8Fjdkm28Jlaib1xLvFzCQkTtfiaj9sbicsjpR6PESiczXiaYznibu3JmWLQl1a4yE99KIXFIURia0/300',
      },
      {
        title: 'CodeBuddy Code 自举：一句话搞定所有配置',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504316&idx=1&sn=1aa91b9bdd52fdc491ae1a224a5c8021&chksm=c042ad53f73524455eb5936430e4c805845345d5f7396c78c957d77e8fefd3633407fe18f2de#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFxW6AWQg6DqQEHQ4exiczWakfLWTx7QITU8y0jCBsCf7L5B3sibZadJzFLzQjXlp6lOs3gJXSVFhwTw/300',
      },
      {
        title: 'CodeBuddy Code：苏格拉底式程序员的对话艺术',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247504148&idx=1&sn=86be856fb457019ceeac1aa62c8a2a40&chksm=c042adfbf73524edefcf56d64bd5c3c9a3b42fa42fd7d5285307db513392395f873682ca8a63#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFypNV316jibuKXr9uiclLpcpupFVeic02OhrXd8FMjiczcR1Et3fl9ySOrNUmaL6YHtFLN5UeDr3W8Wiag/300',
      },
    ],
  },
  {
    id: 'events',
    nav: '活动合集',
    title: '活动合集',
    subtitle: 'Meetup、征文、福利放送 —— 和 Buddy 一起「奔现」',
    accent: 'linear-gradient(135deg,#a78bfa,#f472b6)',
    albumUrl: ALBUM_EVENTS,
    articles: [
      {
        title: '百万 Credits 悬赏 · 秀出你的 WorkBuddy Claw 实战',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247505062&idx=1&sn=7cf1d583807c69145623c19c1940cfaa&chksm=c042a849f735215f3d9033043ec006e6f607a9976ee01ff38fc548c5035b31946adc8ca46d50#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/ZS8oYianH8vSyERTIcCia4mCNwf9icPb9Dm5L8TvIkLXiawXo8k8tyHFJ5y2lgu2YWhkicawI5Y2cMica6UtOUOeKLzPywXwURrXXORUvRKdNgROY/300',
      },
      {
        title: 'CodeBuddy 深圳首场线下 Meetup 回顾',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502378&idx=1&sn=8ea045afbae99693d1e1a030459a7093&chksm=c042b6c5f7353fd35500eac12eae31497bf90240a657790f8af20914aceab2d40e0c50bb738c#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFyqoJFQRBgEpC0cWVVbYSrVyETj3VFIjiciaKPTI5KAhuG2o9eU1Dr5j7Tfibmug6lh18YY5hwIbbPNw/300',
      },
      {
        title: '1024 程序员节 × CodeBuddy 「无界生成力」有奖征文，热力来袭！',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502557&idx=2&sn=5fa0cab3f2293d79902a1783601e280a&chksm=c042b632f7353f24006ad10d384090cb89149fe5072359a5ba80a29f437f55a6adc2937656a9#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFzX0xpjb3zHiaQvYdhaJuXaSZ2N6LpLxD4lZWoNZbYTsEKNuOJ0wiafK8ZGb380eVcDKj1CQb3xPejw/300',
      },
      {
        title: 'AI 开发部署礼遇持续加码：服务器免费领，腾讯周边直接送！',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502847&idx=2&sn=0b8e5be4704e6cce8584a71e80fa5cf2&chksm=c042b710f7353e06d210a94e7701bcbadaea132043c4e486992d436224ee282b84f68d50c76a#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFw715UkGsDg8ibVPNDibDxCic9RJKkICmHiaOf4U6zfWn0FvapJtL5xJqtA6lapgfInz8omHVaQpA926Q/300',
      },
      {
        title: '【文末有福利】CodeBuddy IDE × EdgeOne Pages：一键部署，全球加速',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247502032&idx=1&sn=f98717d34e2eb05086d2be64f49d54a9&chksm=c042b43ff7353d29fd9ed2ac45c7c82b9e069b441c699bbaad9cbec348338bfca36e26bd6341#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFxEiavU2bZy2Qd9QyMEMr0A5mmOEtRhl30JzerfLosicnvF2uD6R1fj16A7uwqkDX8z3FJshF1Yv8Pw/300',
      },
      {
        title: '这次，CodeBuddy 约你在校园见面！多场校园巡展强势来袭',
        url: 'http://mp.weixin.qq.com/s?__biz=MzkwMDY4OTI4MA==&mid=2247503295&idx=1&sn=9b1f85d5ac4075c6cc78a6fd57e96eb0&chksm=c042b150f735384601a1a3f37a33e4077f9ff4c817672b3a6e426b7ffdb32d53ee45b3eb4ac4#rd',
        cover:
          'http://mmecoa.qpic.cn/mmecoa_jpg/xJ2pEuhiblFyXRibk9UHLicRchxicwYnPEQjIcicokeyk4lSicwGZj3q1r8QO0uiaJ0GJXyePrTYrRsuAicLSoTWHjCB1A/300',
      },
    ],
  },
]

export const OFFICIAL_URL = 'https://www.codebuddy.ai/ide'

/* ============ 常见 FAQ ============ */
export interface FaqItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'CodeBuddy 是什么？',
    a: 'CodeBuddy 是腾讯推出的 AI 编程助手与智能体开发工具，覆盖代码补全、技术对话、需求拆解、代码审查、测试部署等研发全流程，帮助你从想法更快走到产品上线。',
  },
  {
    q: 'CodeBuddy 有哪些产品形态？',
    a: '目前主要包括：CodeBuddy IDE（独立桌面开发环境）、IDE 插件（VS Code / JetBrains 等）、CodeBuddy Code（命令行 CLI 工具）以及 Craft 智能体等，覆盖从个人开发到团队协作的不同场景。',
  },
  {
    q: '如何安装 CodeBuddy IDE？',
    a: '前往官网 codebuddy.ai/ide，选择对应平台（Windows / macOS / Linux）的安装包下载安装即可，全程开箱即用；也可以先在官网了解各产品形态后再选择适合自己的方式。',
  },
  {
    q: 'Craft 智能体能做什么？',
    a: 'Craft 是 CodeBuddy 的核心智能体能力：输入一个需求，它可以帮你完成产品文档、原型设计、前后端代码、测试与部署的端到端交付，把「一句话」变成「一个产品」。',
  },
  {
    q: '如何第一时间获取产品动态？',
    a: '关注微信公众号「腾讯 CodeBuddy」，或常来本站「产品功能」板块逛逛，每次版本焕新、新能力上线都会第一时间同步到对应合集。',
  },
  {
    q: '在哪里反馈问题与建议？',
    a: '可以在微信公众号「腾讯 CodeBuddy」的文章评论区留言，或通过公众号后台私信反馈；也可以浏览下方「交流与反馈」板块的各个入口，与我们保持联系。',
  },
]

/* ============ 交流与反馈 ============ */
export interface FeedbackChannel {
  icon: 'wechat' | 'feature' | 'practice' | 'globe'
  title: string
  desc: string
  url: string
}

export const FEEDBACK_CHANNELS: FeedbackChannel[] = [
  {
    icon: 'wechat',
    title: '微信公众号「腾讯 CodeBuddy」',
    desc: '产品动态、教程与活动首发阵地，文末留言或后台私信即可反馈',
    url: ALBUM_FEATURES,
  },
  {
    icon: 'feature',
    title: '产品功能合集',
    desc: '浏览全部功能更新文章，了解 CodeBuddy 的最新能力',
    url: ALBUM_FEATURES,
  },
  {
    icon: 'practice',
    title: '最佳实践合集',
    desc: '系统学习 CodeBuddy 的实战用法，快速上手进阶',
    url: ALBUM_PRACTICE,
  },
  {
    icon: 'globe',
    title: 'CodeBuddy 官网',
    desc: '下载 IDE / CLI / 插件，开启你的 AI 开发体验',
    url: OFFICIAL_URL,
  },
]
