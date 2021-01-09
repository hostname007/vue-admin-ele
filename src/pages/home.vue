<template>
	<div class="container" style="height: 100%;">
		<div class="headerDiv">
			<div class="logo">烫卤局管理系统</div>
			<div id="nav">
				<breadcrumb></breadcrumb>
				<el-row class="nav-tabs">
					<el-col :span="24">
						<div v-for="(option, index) in this.$store.state.menuArr" class="cus-tab-box" :class="option.path==$route.path?'activeTab':''">
							<span>
								<router-link
										 :to="option.path">{{option.title}}</router-link></span>
							<span><i v-if="option.path!='/profile'" class="el-icon-close" @click="removeTab(option.path)"></i></span>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="drop">
				<el-dropdown>
					<span class="el-dropdown-link">
						    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
						  </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-on:click.native="exitBtn">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="mainDiv">
			<el-aside style="width: auto;">
				<div class="leftNav">
					<leftNav></leftNav>
				</div>
					
			</el-aside>
			<div class="content-container">
				<el-col :span="24" class="content-wrapper">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</el-col>
			</div>
		</div>
	</div>
</template>

<script>
	import leftNav from '@/components/common/leftNav';
	import breadcrumb from '@/components/common/breadcrumb';
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default({
		name: 'home',
		data() {
			return {
				massage: 'aaaaa',
				username: ''
			}
		},
		computed: {
			...mapState({
				counter: 'count',
				count(state) {
					return state.count + '' + this.massage
				},
				arr: 'menuArr'
			}),
			...mapGetters(['addAsync'])

		},
		methods: {
			gomyCSDN(){
				window.open("https://blog.csdn.net/qq_36675216?spm=1011.2124.3001.5343");
			},
			exitBtn() {
				this.username = "";
				localStorage.removeItem("username");
				this.$router.push('/login')
			},
			removeTab(path) {
				this.deltab(path);
				//				this.$store.commit('delTab',path);
				let arr = this.$store.state.menuArr;
				let pt = arr[arr.length - 1]['path'];
				if(this.$route.path != pt) {
					this.$router.push(pt)
				}
			},
			...mapMutations({
				deltab: 'delTab',
				prev: 'prev'
			})
		},
		created() {
			console.log(this.$store.state.menuArr)
			this.username = localStorage.getItem("username");
		},
		components: {
			leftNav,
			breadcrumb
		},
	})
</script>

<style scoped="scoped">
	.fixedImg {
		position: fixed;
		right: 0;
		top: 90px;
		cursor: pointer;
	}
	
	.logo {
		text-shadow: 6px 6px 3px #cccccc61;
		font-size: 30px;
		width: 250px;
		text-align: center;
	}
	
	#nav {
		margin-top: 20px;
		width: calc(100% - 250px - 5%);
	}
	
	#nav a {
		text-decoration: none;
		color: white;
		font-size: 13px;
	}
	
	.activeTab {
		color: white!important;
		background: #53c79f!important;
	}
	
	.cus-tab-box {
		display: inline-block;
		margin: 5px;
		padding: 2px 5px;
		background: #909399;
		color: white;
		border-radius: 2px;
		cursor: pointer;
		font-size: 15px;
	}
	
	.headerDiv {
		width: 100%;
		box-sizing: border-box;
		color: white;
		height: 90px;
		background: #394657;
		display: flex;
		align-items: center;
	}
	
	.drop {
		width: 5%;
	}
	
	.mainDiv {
		height: calc(100vh - 90px);
		box-sizing: border-box;
		display: flex;
	}
	
	.el-aside {
		height: 100%;
		box-sizing: border-box;
	}
	
	.content-container {
		width: 100%;
		box-sizing: border-box;
		padding: 5px;
	}
	
	.el-dropdown-link {
		cursor: pointer;
		color: white;
	}
	
	.el-icon-arrow-down {
		font-size: 12px;
	}
	
	.content-wrapper {
		height: 100%;
		overflow-y: auto;
	}
</style>