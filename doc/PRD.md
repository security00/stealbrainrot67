# Steal Brainrot 67 - 产品需求文档（PRD）

**文档版本**：1.0  
**发布日期**：2025-10-29    
**概述**：本PRD定义了stealbrainrot67.com网站的开发需求，该站点是一个专注于Roblox游戏*Steal a Brainrot*中稀有物品“67”的小型游戏中心。站点通过嵌入无阻挡游戏版本、提供攻略和相关内容来吸引流量，并通过Google AdSense实现广告变现。目标用户为10-16岁meme爱好者和Roblox玩家，主要在美国。站点采用Meme拼贴动效视觉风格，融入动态马赛克墙和Roblox角色拼贴，以匹配游戏的病毒性和幽默本质。

**关键需求**：
- **站点类型**：小型游戏，嵌入*Steal a Brainrot*及其变体。
- **核心功能**：游戏嵌入、攻略指南。


### 4.1 页面设计

#### 4.1.1 主页设计
**页面布局**：
```
[Header - Logo (Meme拼贴风格浮动logo) + Navigation (首页、指南、关于)]
[Game Title: Steal Brainrot 67 + 简短描述 (稀有meme收藏游戏，偷取升级Brainrots)]
[Game iFrame - Responsive嵌入 <iframe src="https://yoplay.io/steal-brainrots.embed" width="1280" height="720" frameborder="0" border="0" scrolling="none"></iframe>]
[Quick Tips Section (e.g., 如何获得67)]
[Footer - 链接 (隐私政策、联系)]
```

**必需元素**：
- 响应式游戏容器（自适应移动端，确保iframe在小屏上全屏显示）。
- 全屏按钮（JavaScript实现，允许切换全屏模式）。
- 加载提示（进度条或meme动画，如“Loading Brainrot Memes...”）。
- 分享按钮（集成X、TikTok、YouTube分享，鼓励病毒传播）。
- 动态meme墙（背景元素，展示经典meme和Roblox角色拼贴，增强视觉吸引力）。