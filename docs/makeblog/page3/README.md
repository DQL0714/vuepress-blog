### 3. 发布到 Netlify

发布到 [Netlify.com](https://www.netlify.com/)，只需要简单几步：

1. 注册 Netlify 的账号并登录，需要提供一个电子邮件。
2. 新建一个项目，在设置里面填入 GitHub 代码库的链接，填写构建的命令和输出文件夹。 ![img](https://bobyuan.netlify.app/views/other/guide/asset/netlify_build_settings.png) 按“Deploy site”按钮，耐心等候5分钟左右时间，让构建流程正常结束。
3. 构建成功后，设置定制的域名。 ![img](https://bobyuan.netlify.app/views/other/guide/asset/netlify_custom_domains.png) 例如这里，我设置了定制的域名“bobyuan”，于是可以这样访问此博客网站： https://bobyuan.netlify.com/
4. 【可选】每次提交到 GitHub，Netlify 将自动构建并发布网站。为了了解构建状态，在首页（README.md）中添加一个“status badge”。 ![img](https://bobyuan.netlify.app/views/other/guide/asset/netlify_status_badge.png)