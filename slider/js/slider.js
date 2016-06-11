// 定义数据
var data = [
	{img:1, h1:'Sunday', h2:'sunney'},
	{img:2, h1:'Monday', h2:'sunney'},
	{img:3, h1:'Thusday', h2:'sunney'},
	{img:4, h1:'Wednesday', h2:'sunney'},
	{img:5, h1:'Thirsday', h2:'sunney'},
	{img:6, h1:'Friday', h2:'sunney'},
	{img:7, h1:'Saterday', h2:'sunney'}
];

// 定义一个通用函数,通过id或者class来获取dom元素
var g = function(id){
	if (id.substr(0,1) == '.') {
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

// 定义一个添加幻灯片方法
function addSlider(){
	// 获取模板
	var tpl_main = g('template-main').innerHTML
					.replace(/^\s*/, '')
					.replace(/^\s*$/, ''); //清除头尾的空白符
	var tpl_ctrl = g('template-ctrl').innerHTML
					.replace(/^\s*/, '')
					.replace(/^\s*$/, ''); //清除头尾的空白

	// 定义最终输出的HTML 的变量
	var out_main = [];
	var out_ctrl = [];

	// 遍历所有数据，构建最终输出的HTML
	var i;
	for (i in data) {
		var _html_main = tpl_main
							.replace(/{{index}}/g, data[i].img)
							.replace(/{{h1}}/g, data[i].h1)
							.replace(/{{h2}}/g, data[i].h2)
	
		var _html_ctrl = tpl_ctrl
							.replace(/{{index}}/g, data[i].img)
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}

	g('template-main').innerHTML = out_main.join('');
	g('template-ctrl').innerHTML = out_ctrl.join('');
}

	// 切换幻灯片
	function switchSlider(n){
		// 获得要针线的幻灯片和控制按钮的 dom
		var main = g('main-'+n);
		var ctrl = g('ctrl-'+n);

		// 获得所有的幻灯片和控制按钮 清除active的样式
		var clear_main = g('.main-i');
		var clear_ctrl = g('.ctrl-i');
		for (var i = 0; i <= clear_ctrl.length-1; i++) {
			clear_main[i].className = clear_main[i].className
									.replace('main-i-active','');
			clear_ctrl[i].className = clear_ctrl[i].className
									.replace('ctrl-i-active','');
		}
		// 为当前展示的幻灯片添加active样式
		main.className += ' main-i-active';
		ctrl.className += ' ctrl-i-active';
	}

	// 定义何时处理幻灯片输出
	window.onload = function(){
		addSlider();
	}


