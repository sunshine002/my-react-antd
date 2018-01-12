
/**
 * 路由文件
 */
import Router from 'Router'
// import Frame from 'frame'
export default {
	path: 'js',
	component: Router,
	/**
	 * 子路由配置
	 * 子路径下路由较为简单时，直接配置路由
	 * 子路径下路由较为复杂时，需引用其目录下的路由配置文件
	 */
	childRoutes: [
		{
			path:'assign',
			component:require('./assign').default
		},
		{
			path:'moment',
			component:require('./moment').default
		}
	]
}