module.exports = [
    {
        text: 'Vuepress介绍', link: '/introduce/'
    },
    {
        text: '搭建博客网站',
		items: [
            {text: '安装Vuepress', link: '/makeblog/page1/'},
            {text: '搭建Blog平台', link: '/makeblog/page2/'},
			{text: '发布到Netlify', link: '/makeblog/page3/'},
        ]
    },
    {
        text: '站外链接',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]