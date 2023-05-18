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
            <Sunny style="width: 2rem;height: 2rem;padding: 0.7rem 5px;" />
            <span>TGT</span>
        </el-header>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    background-color: #faecd8;
    padding: 4rem 0;
}
</style>