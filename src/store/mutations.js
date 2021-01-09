const mutations={
	add(state,item){
		state.menuArr.push(item)
	},
	prev(state,num){
		console.log(num)
		state.count-=1;
		state['txy']=123
	},
	delTab(state,currentPath){
		let arr=state.menuArr;
		let index=arr.findIndex(v=>v.path==currentPath);
		arr.splice(index,1);
	},
	toggleCollapse(state){
		state.isCollapse=!state.isCollapse
	},
	renderBread(state,crumbs){
		state.breadCrumbs=crumbs
	}
}
export default mutations
