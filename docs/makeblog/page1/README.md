---

---

### 1.安装Vuepress

1. 下载安装 [Node.js](https://nodejs.org/) 和 [Yarn](https://yarnpkg.com/latest.msi)。例如，在本文写作的时候，下载安装的是`node-v12.16.2-x64.msi`和`yarn-1.22.4.msi`。

   > **注意：** yarn 的二进制可执行程序，位于`%LOCALAPPDATA%\Yarn\bin`，应当被添加到 **当前用户** 的 PATH 环境变量中。

2. 参照 VuePress 的官方文档，[安装 VuePress](https://vuepress.vuejs.org/zh/) ：

   ```shell
   # Install vuepress.
   yarn global add vuepress
   
   # Upgrade.
   #yarn global upgrade vuepress
   ```

   打开命令行窗口，检查一下版本：

   ```shell
   vuepress --version
   ```

3. 【可选】按照 VuePress 的文档说明，试试建立一个网站，体验一下效果。

   ```shell
   # 新建一个 markdown 文件
   echo # Hello VuePress! > README.md
   
   # 开始写作，用浏览器打开看效果
   vuepress dev
   
   # 构建生成静态文件（输出到 .vuepress\dist 文件夹中）
   vuepress build
   ```

