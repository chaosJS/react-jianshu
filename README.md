1. add styled-components to module component css
   1. 坑多 在 css 中引入文件资源
   2. 封装通用样式存在问题
   3. 存在把逻辑封装到样式文件的不良倾向
2. reset css
3. add craco to alias the path
4. add vscode sniff to short the react code `_rafce`
5. add iconfont to global style
   1. // import '@static/iconfont/iconfont.css';
   2. GlobalIconStyle 导出 js 方式 改动大
6. add react-redux 新版 react-redux 加上@reduxjs/toolkit 简化很多繁琐操作
   1. 没必要再加 immutableJS 的 fromJS/set/get 之类的方法包装 state 的数据
7. add router
8. 注意 memo 的使用，避免不必要的渲染
9. 异步路由加载 使用 React 的 Suspense 和 lazy。 实际上更推荐使用 Loadable Components
10. deploy to github pages 换成 hashRouter
    1. [预览](https://chaosjs.github.io/react-jianshu/#/)
