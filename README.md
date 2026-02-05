# Modern Minimal 主题（Flarum）

一个现代化、极简风格的 Flarum 论坛主题，内置 FoF Night Mode 适配，兼顾桌面与移动端。

## 特色

- 现代极简的视觉风格
- 桌面与移动端自适应
- 适配 FoF Night Mode 的日/夜间模式
- 优化的排版与间距

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

## 许可证

MIT
