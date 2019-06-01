/*
* 导入视图
*/
/**
* @param directory 要搜索的文件夹目录不能是变量，否则在编译阶段无法定位目录
* @param useSubdirectories 是否搜索子目录
* @param regExp 匹配文件的正则表达式
* @return function 返回一个具有 resolve, keys, id 三个属性的方法
          resolve() 它返回请求被解析后得到的模块 id
          keys() 它返回一个数组，由所有符合上下文模块处理的请求组成。
          id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到
*/


/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/


// require.context('demo', useSubdirectories = false, regExp = /\.js$/)
// (创建了）一个包含了 demo 文件夹（不包含子目录）下面的、所有文件名以 `js` 结尾的、     被 require 请求到的文件的上下文。

const contexts = require.context('.', true, /\.js$/);

// eslint-disable-next-line import/no-mutable-exports
let configRouters = [];

/**
 * * inject  routers
 */
contexts.keys().forEach((key) => {
  if (key === './index.js') return;
  configRouters = configRouters.concat(contexts(key).default);
});

export default configRouters;


