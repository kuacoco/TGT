<script>
export default {
    mounted() {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        })
    },
}
</script>

<template>
    <el-container>
        <el-header class="header">
            <Sunny style="width: 2rem;height: 2rem;margin-right: 0.5rem;" />
            <span>TGT</span>
        </el-header>
        <router-view></router-view>
        <router-view name="footer"></router-view>
    </el-container>
</template>
  
<style scoped>
.header {
    background-color: #faecd8;
    height: 3.5rem;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: x-large;
    align-items: center;
}

.main {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    padding: 0;
    background-color: #faecd8;
}
</style>