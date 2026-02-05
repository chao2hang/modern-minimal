# Modern Minimal 主题（Flarum）

一个现代化、极简风格的 Flarum 论坛主题，内置 FoF Night Mode 适配，兼顾桌面与移动端。

## 特色

- 现代极简的视觉风格
- 桌面与移动端自适应
- 适配 FoF Night Mode 的日/夜间模式
- 优化的排版与间距
- 支持标签页 Hero 背景图（使用 `image_url` 字段）

## 安装

通过 Composer 安装：

```bash
composer require nopj/modern-minimal
```

启用扩展：

```bash
php flarum extension:enable nopj-modern-minimal
php flarum cache:clear
```

## 开发与自定义

主题样式入口：

- `less/forum.less`

你可以直接修改 Less 并清理缓存：

```bash
php flarum cache:clear
```

## 标签 Hero 背景图

启用扩展后会自动添加 `tags.image_url` 字段。  
当某个标签设置了图片地址时，标签页 Hero 会优先使用该图片作为背景；否则继续使用标签颜色。

字段示例：

- 表：`f_tags`（带前缀时由 Flarum 自动处理）
- 字段：`image_url`
- 内容：图片 URL（绝对地址）

## 许可证

MIT
