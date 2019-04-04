<template>
    <!--<div class="demo-avatar">-->
    <!--<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />-->
    <!--<Avatar style="color: #f56a00;background-color: #fde3cf">USER</Avatar>-->
    <!--</div>-->
    <div class="user-avator-dropdown">
        <Dropdown @on-click="handleClick">
            <Avatar :src="profile.avatar"/>
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="nickname" v-if="alreadyLoggedIn">
                    {{ profile.nickname }}
                </DropdownItem>
                <DropdownItem name="logout" v-if="alreadyLoggedIn">退出登录</DropdownItem>
                <DropdownItem name="login" v-else>登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
    import {logOut, getProfile} from "../../apis/user";

    export default {
        data() {
            return {
                profile: {},
                alreadyLoggedIn: false
            }
        },
        name: "NavAvatar",
        created() {
            this.getProfile()
        },
        methods: {
            // ...mapActions([
            //     'handleLogOut'
            // ]),
            login() {
                // debugger
                window.location.href = `http://192.168.1.71:1199/api/v1/login?next=${window.location.href}`;
            },
            logout() {
                var vm = this
                logOut().then(([err, data, res]) => {
                    if (err) {
                        return;
                    }
                    // TODO: remove session
                    window.location.reload()
                });
                this.$router.push({
                    path: `/`
                })
            },
            handleClick(name) {
                switch (name) {
                    case 'login':
                        this.login();
                        break;
                    case 'logout':
                        this.logout();
                        break;
                    case 'message':
                        this.message();
                        break;
                }
            },
            getProfile() {
                var vm = this;
                getProfile().then(([err, data, res]) => {
                    if (err || data===null){
                        vm.alreadyLoggedIn = false;
                        return;
                    }
                    vm.profile = data;
                    vm.alreadyLoggedIn = true;
                })
            }
        }
    }
</script>
<style scoped>
    .user-avator-dropdown {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        z-index: 999;
    }
</style>
