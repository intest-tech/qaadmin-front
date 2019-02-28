<template>
    <Layout style="height: 100%">
        <Header class="header-con">
            <Row type="flex" justify="center" align="middle">
                <Col span="4">
                    <h2>QA Admin</h2>
                </Col>
                <Col span="14">
                    <NavMenu></NavMenu>
                </Col>
                <Col span="6">
                    <NavAvatar></NavAvatar>
                </Col>
            </Row>
        </Header>
        <Content class="main-content-con">
            <Layout class="main-layout-con">
                <Content class="content-wrapper">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Content>
    </Layout>
</template>

<script>
    import NavMenu from '@/components/navbar/Menu.vue'
    import NavAvatar from '@/components/navbar/Avatar.vue'

    export default {
        name: "Base",
        components: {
            NavMenu,
            NavAvatar
        },
        methods: {
            Login() {
                window.location.href = `http://192.168.1.71:1199/api/v1/login?next=${window.location.href}`;
            }
        }
    }
</script>
<style scoped>
    .header-con {
        background: #fff;
        padding: 0 20px;
        width: 100%;
    }

    .main-content-con {
        height: calc(100% - 60px);
        overflow: hidden;
    }

    .main-layout-con {
        height: 100%;
        overflow: hidden;
    }

    .content-wrapper {
        padding: 18px;
        height: calc(100% - 80px);
        overflow: auto;
    }
</style>
