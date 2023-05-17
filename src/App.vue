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
            <span class="title">
                <Sunny style="width: 2rem;height: 2rem;padding: 0.7rem 5px;" />
                <span style="line-height: 3.5rem">TGT</span>
            </span>
        </el-header>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
        <el-footer class="footer">
            <span class="navigation" style="color:#b88230;">
                <el-icon class="icon">
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </span>
            <span class="navigation">
                <el-icon class="icon">
                    <UserFilled />
                </el-icon>
                <span>我的</span>
            </span>
        </el-footer>
    </el-container>
</template>
  
<style scoped>
.header {
    background-color: #faecd8;
    height: 3.5rem;
}

.footer {
    background-color: #faecd8;
    height: 3.5rem;
    display: flex;
    justify-content: space-around;
}

.title {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: x-large;
}

.navigation {
    font-size: 0.6rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.icon {
    font-size: 1.8rem;
}

.main {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100 - 7rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    background-color: #faecd8;
}
</style>