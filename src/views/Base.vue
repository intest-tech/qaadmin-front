<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%', background: '#FFF'}">
                <Row type="flex" justify="center" align="middle">
                    <Col span="16">
                        <NavMenu></NavMenu>
                    </Col>
                    <Col span="8">
                        <NavAvatar></NavAvatar>
                    </Col>
                </Row>
            </Header>
            <Content :style="{margin: '88px 20px 20px', padding: '0 50px', height: '600px', overflow: 'auto'}">
                <!--<Breadcrumb :style="{margin: '20px 0', left: 0}">-->
                <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
                <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
                <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
                <!--</Breadcrumb>-->
                <!--<Card>-->
                <div style="min-height: 500px; background: white">
                    <router-view></router-view>
                </div>
                <!--</Card>-->
            </Content>
            <!--<Footer class="layout-footer-center">2018-2019 &copy; Shin</Footer>-->
        </Layout>
    </div>
</template>

<script>
    import NavMenu from '@/components/navbar/Menu.vue'
    import NavAvatar from '@/components/navbar/Avatar.vue'

    export default {
        name: "Base",
        components: {
            NavMenu,
            NavAvatar
        }
    }
</script>
<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
