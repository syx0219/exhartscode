const app={
    state:{
        //状态初始值
        sidebar:{
            opened:false
        }
    },
    mutations:{
        //修改状态值
        TOGGLE_SIDEBAR:state=>{
            state.sidebar.opened = ! state.sidebar.opened;
        }
    },
    actions:{
        //动作，调用mutations
        ToggleSideBar:({commit})=>{
            commit('TOGGLE_SIDEBAR');
        }
    }
}
export default app;