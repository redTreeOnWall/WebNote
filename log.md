# react
```
全局安装
npm install -g create-react-app
# 构建一个my-app的项目
npx create-react-app my-app
cd my-app
#启动编译当前的React项目，并自动打开 http://localhost:3000/
npm start
```
注意: 安装过程中包json解析出错这样的错误,则:

> 运行npm install时有时会遇到以下错误：  
>   npm ERR! Unexpected end of JSON input while parsing near ...
>
>   这时可以先执行下面的命令：
>
>   npm cache clean --force
>
>   然后再执行npm install就可以了

# ui
```
// 用npm安装
npm install @material-ui/core

npm install @material-ui/icons
```

# 动画
```
#淡入淡出
npm install react-transition-group
```


# 事项
- react 在 setState的时候会更新(重新render )
- 子组件在父组件 的pops对象中(children)

# react-transition-group 使用
``` jsx
//jsx
constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                      in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                      timeout={1000} //动画执行1秒
                      classNames='fade' //自定义的class名
                      unMountOnExit //可选，当动画出场后在页面上移除包裹的dom节点
                      onEntered={(el) => {
                            el.style.color='blue'   //可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
                      }}
                      onExited={() => {
                            xxxxx   //同理，动画出场之后的回调，也可以在这里来个setState啥的操作
                      }}
                      
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToggole}>toggle</button>
            </Fragment>
        )
    }

    handleToggole: ()=> {
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

```