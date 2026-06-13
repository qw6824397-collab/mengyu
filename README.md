# 欢乐时光主题乐园小程序首页

这是一个微信小程序首页模板，页面结构参考儿童乐园商业小程序首页，但所有品牌、角色和视觉元素均为原创占位内容，不使用现成版权 IP。

## 当前已完成

- 自定义顶部白色品牌区
- 大白色圆角活动卡片
- 橙黄色主活动 Banner
- 四个圆形功能入口：购票充值、预约到店、活动表、扫一扫
- 橙色儿童乐园风格背景
- 门店介绍视频卡片
- 底部三栏导航：首页、商品、我的

## 文件结构

```text
app.js
app.json
app.wxss
project.config.json
sitemap.json
pages/index/index.js
pages/index/index.json
pages/index/index.wxml
pages/index/index.wxss
assets/README.md
```

## 使用方式

1. 用微信开发者工具打开本仓库。
2. AppID 暂时使用 `touristappid`，正式上线前请改成你自己的小程序 AppID。
3. 第一版目前使用 CSS 形状作为视觉占位，后续可把 Banner、LOGO、功能入口头像、门店封面图替换为真实图片素材。

## 后续建议

下一步不要继续靠 AI 一次性生成整页截图。正确做法是：

1. 先把小程序结构跑通。
2. 单独生成 LOGO、Banner、入口头像、门店封面图。
3. 把素材放入 `assets/home/`。
4. 在 `pages/index/index.wxml` 中把 CSS 占位图替换为 `<image>`。
