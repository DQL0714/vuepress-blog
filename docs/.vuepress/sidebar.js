module.exports = {
	//对多模块的管控
	'/introduce/': require('../introduce/sidebar'),//第一个模块的侧边栏
	//第二个模块的侧边栏
	'/makeblog/page1': require('../makeblog/page1/sidebar'),
	'/makeblog/page2': require('../makeblog/page2/sidebar'),
	'/makeblog/page3': require('../makeblog/page3/sidebar'),
}	