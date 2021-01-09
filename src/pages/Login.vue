<template>
	<div class="container">
		<div class="loginDiv">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
					<el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pwd">
					<el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" 
						@click="submitForm('ruleForm')"
						:loading="isLoading">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isLoading:false,
				ruleForm: {
					username: '',
					pwd: ''
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					pwd: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.isLoading=true;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						localStorage.setItem("username",this.ruleForm.username);
						this.$message({
					          message:'登陆成功',
					          type: 'success'
					        });
						setTimeout(()=>{
					        this.$router.push('/');
						},1500)
						
					} else {
						this.isLoading=false;
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped="scoped">
	.container {
		width: 100%;
		height: 100vh;
		background: #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.loginDiv {
		width: 400px;
		background: white;
		padding: 20px;
		padding-top: 50px;
		padding-right: 50px;
		border-radius: 8px;
	}
</style>