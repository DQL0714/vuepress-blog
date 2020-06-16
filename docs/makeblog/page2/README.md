### 2. 搭建 Blog 平台

官方提到了一些博客主题：

- [VuePress - 博客主题](https://vuepress.vuejs.org/zh/theme/blog-theme.html)
- [@vuepress/plugin-blog - Writing a blog theme](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#writing-a-blog-theme)

这些看起来都太简陋。

另有2个主题，之前在 VuePress 官方网页里出现过的，现在已经被移除。个人猜想其原因可能是，这两个主题没有完全在官方插件上做扩展，而是做了过多的底层定制和修改，在未来官方博客插件升级时，有可能不兼容。

- [vuepress-theme-modern-blog](https://github.com/z3by/vuepress-theme-modern-blog)，[演示](https://vp-modern.z3by.com/) 。此主题有点过于华丽。
- [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)，[演示 - 午后南杂](https://www.recoluan.com/)。此主题简洁优雅。

个人偏好，我选择了`vuepress-theme-reco`主题，下面是搭建步骤。

按官方文档的[说明](https://vuepress-theme-reco.recoluan.com/)，使用 yarn 来安装：

```shell
# Install the theme.
yarn global add @vuepress-reco/theme-cli
# Upgrade.
#yarn global upgrade @vuepress-reco/theme-cli

# 初始化（需要回答一些问题，最后一个选择： blog）
theme-cli init my-blog

# 安装
cd my-blog
yarn install
```

这将生成一个博客网站模板“my-blog”，其中“docs”文件夹里面是主要的源文件，包括配置和博客文章的 Markdown 文件。我们可以在此基础上，进行修改和定制。

```shell
# 打开本地服务
# Or: vuepress dev docs
yarn dev

# 编译生成静态网页
yarn build
```

打开本地服务后，VuePress 的开发环境可通过浏览器访问 http://localhost:8080/。在`docs\.vuepress\config.js`中设定，编译生成的静态网页将位于“public”文件夹中。

在生成的模板上，我随即更新了 `package.json` 中的依赖，使用最新的版本。最新的版本号可以在这里找到：

- VuePress: [CHANGELOG.md](https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md)
- vuepress-theme-reco: [CHANGELOG.md](https://github.com/vuepress-reco/vuepress-theme-reco/blob/develop/CHANGELOG.md)

```json
{
  "devDependencies": {
    "vuepress": "1.4.1",
    "vuepress-theme-reco": "1.2.2"
  },
}
```

然后升级本地的依赖包：

```shell
yarn install
yarn upgrade
```

博客文章即 Markdown 文档。例如，其他类（other）的文章之一：《利用 VuePress 搭建博客网站》，放在 `docs\views\other\guide\`文件夹中。此文章的文件命名为 `README.md`，它将作为`http://localhost:8080/views/other/guide/`的首页。关于图片文件的引用，有一个小技巧。

1. 在 `docs\.vuepress\public\views\` 和 `docs\views\` 中建立同样的目录结构。其中前者是 VuePress 要求存放图片文件的地方，后者是 Markdown 博客文章 Markdown 文件的存放地方。
2. 为了让 Typora 编辑器打开 Markdown 文件时能够显示图片，同时又能让图片文件位于 VuePress 所要求的文件夹，我们需要在 Markdown 文件所在的文件夹中，建立一个目录连接（Directory Junction），让它指向 VuePress 要求的文件夹中（那里存放着图片文件）。

举个例子， `docs\.vuepress\public\views\other\guide\asset\` 中，存放了几张图片文件。在 Markdown 文件`README.md` 所处的文件夹 `docs\views\other\guide\`中，我们建立了一个 `asset` 目录链接，它以相对路径的方式指向了`docs\.vuepress\public\views\other\guide\asset\`。

```shell
REM We would like to create a directory junction "asset" from:
REM docs\views\other\guide\
REM to: 
REM docs\.vuepress\public\views\other\guide\asset\

REM First, check if the relative path is correct:
CD /D docs\views\other\guide\
DIR ..\..\..\.vuepress\public\views\other\guide\asset

REM Then, run the command to create the directory junction:
MKLINK /J asset ..\..\..\.vuepress\public\views\other\guide\asset
```

另外，为了避免将目录链接里面的文件重复加入到 Git 的版本控制，我们需要在 `.gitignore` 中，添加一条设置，忽略建立的目录链接。例如：

```text
# ignore directory junctions.
/docs/views/other/guide/asset/
```

打开本地服务，一边用 Typora 编辑 Markdown 文章，一边用浏览器（http://localhost:8080）看效果。每次保存 Markdown 文件，浏览器的结果会自动更新（不需要手动刷新），非常方便快捷。

```shell
# 打开本地服务
# Or: vuepress dev docs
yarn dev
```

本地开发满意后，在 GitHub （也可以是 GitLab等类似的版本控制托管服务）中建立一个代码库，将本地代码提交到代码库中。