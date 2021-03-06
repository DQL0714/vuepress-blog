﻿---

---

## VuePress 介绍

VuePress （网址是 https://vuepress.vuejs.org/）是一个使用 Vue.js 的静态网站生成工具，来自知名的前端框架 Vue.js 的作者尤雨溪（Evan You）。VuePress 的目的是供软件开发商用于制作在线的用户手册文档，即作为工具软件，用来生成静态网站，便于发布到互联网上。

与传统动态网站（如 WordPress）相比，静态网站生成器的主要优势体现在：

- **响应速度快，资源占用率低。** 静态博客站点页面都是静态页面，访问时无需查询数据库，因此服务器端响应速度快，服务器资源占用率低。再加上客户端浏览器的缓存，让用户使用体验有质的飞跃。
- **安全性、易维护性高。** 由于不需要访问数据库，静态网站可以避免很多网页攻击，安全性较高。动态网站不可避免的数据库管理工作，特别是数据备份，版本升级时的数据迁移等，在静态网站方案中都不再需要，从而避免了这部分维护工作。
- **易于管理和备份，自动化。** 静态网站可以使用 Markdown 来撰写博客文章，比起动态网站通过内容管理系统的用户界面来创建内容要方便高效得多。再加上 Markdown 是纯文本，便于版本控制，整个网站的全部内容就是纯文本文件的集合——包括 Markdown 写的文章，以及一些设置一次就不怎么修改的配置文件。像是计算机程序的源代码一样，只需要用静态网站生成工具编译一下，就可以得到所需的静态网站。再通过自动化构建工具让它自动触发编译和发布过程，我们只需要提交到版本控制仓库中，剩下的编译和发布工作就全是自动化的，完全不需要人工去操心，非常方便。

> **注意：**
>
> - Markdown 是一种轻量级的“标记语言”，它用简洁的语法代替排版。Markdown 的标记语法简洁明了、易于学习掌握和使用，目前被越来越多的程序员、写作爱好者、撰稿者广泛使用。Markdown 的常用的标记符号不超过十个，这种相对于更为复杂的 HTML 标记语言来说，Markdown 可谓是十分轻量级的，学习成本也很低。只需要几分钟熟悉这种语法规则，写作就会有一种如虎添翼的感觉。
> - Markdown 的排版功能较弱，不适用于某些要求高的应用场景，如书籍、杂志、论文（用到数学公式）等排版。有这方面需要的读者，可以考虑 [reStructuredText](https://docutils.sourceforge.io/rst.html) 或者 [LaTeX](https://www.latex-project.org/)。
> - Markdown 存在一个较严重的问题，就是没有一个统一的标准，不同的编辑器对它进行扩展，导致不同的版本较多，给人感觉有点混乱。当然，若您只使用大家都支持的基础标记（大多数情况下也够用），那是没问题的。

Markdown 编辑器的选择很多，在 Windows 上可以考虑以下几个：

1. **Typora** （网址是 https://typora.io/） 它是闭源的商业软件，在 Beta 阶段都将是免费的。它的特点是所见即所得，且在功能上没有限制，功能强大丰富，甚至可以用来作图（http://support.typora.io/Draw-Diagrams-With-Markdown/）。它支持简体中文界面语言，在帮助菜单里面（Help | Markdown Reference）还带有 Markdown 的语法参考的英文文档。作为首选推荐。
2. **Visual Studio Code** （网址是 https://code.visualstudio.com/） 它是微软为软件开发人员推出的代码编辑器，功能强大复杂，可作为多种语言的集成开发环境。开源免费，跨平台。如果您是开发人员，可以考虑它，既可以用来开发程序，又可以编写文档。
3. **MarkdownPad** （网址是 http://www.markdownpad.com/） 它是闭源的商业软件，免费版有一些功能限制。它是分左右两栏的编辑器，左边是可编辑的 Markdown 源文件，右边是实时的网页预览。注：此软件自2013年3月份后，已经多年没有更新了。

近年来，静态网站生成器成了动态网站的替代方案，特别受到开发人员的欢迎。人们用它来制作博客（Blog）、写 文档和电子书、发布个人简历等用途。静态网站生成器工具软件有很多，从其功能和易用性考虑，VuePress 是新秀。VuePress 本来的设计初衷是编写软件的文档，但自 V0.x 起有许多用户用它来建博客，因此在 V1.x 版本中，官方发布了支持博客的插件，满足了这部分用户的使用需求。 