module.exports = {
    title: '邓青林的个人博客',
    description: '利用vuepress搭建博客',
    dest: './dist',
    port: '8080',
    head: [
        /*['link', {rel: 'icon', href: '/logo.png'}],*/
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}