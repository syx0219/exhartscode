import React,{Component} from 'react';
const withBack = WrappedComponent=>{
    return class extends Component{
        constructor() {
			super()
			this.state={}
		}
		//复用的函数
		goBack = ()=>{
			this.props.history.go(-1);//返回上一页
        }
        render (){
			return <WrappedComponent goBack={this.goBack} {...this.props} />
		}
	}
}
export default withBack;