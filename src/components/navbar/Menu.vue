<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1" to="/project">
            <Icon type="ios-paper"/>
            主页
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                theme1: 'light'
            }
        }
    }
</script>
<style>
</style>