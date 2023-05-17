<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
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
            <el-drawer size="40%" class="drawer" v-model="drawer" :with-header="false" direction="btt">
                <span>草 稿 箱</span>
                <div class="content">
                    <el-card class="add-card">
                        <el-image fit="cover"
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                        <span>标题</span>
                    </el-card>
                    <el-card class="add-card">
                        <el-image fit="cover"
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                        <span>标题</span>
                    </el-card>
                    <el-card class="add-card">
                        <el-image fit="cover"
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                        <span>标题</span>
                    </el-card>
                </div>
                <div class="button">
                    <el-button size="large" type="warning" round>
                        <el-icon>
                            <Edit />
                        </el-icon>
                        创建新攻略
                    </el-button>
                </div>
            </el-drawer>
        </el-main>
        <el-footer class="footer">
            <span style="color:#b88230;">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </span>
            <span @click="drawer = true">
                <el-icon>
                    <CameraFilled />
                </el-icon>
                <span>写攻略</span>
            </span>
            <span>
                <el-icon>
                    <UserFilled />
                </el-icon>
                <span>我的</span>
            </span>
        </el-footer>
    </el-container>
</template>
  
<style>
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

.footer {
    background-color: #faecd8;
    height: 3.5rem;
    display: flex;
    justify-content: space-around;
    border-radius: 2rem;
    position: fixed;
    bottom: 0;
    width: 90vw;
    margin: 0 5vw 1vw 5vw;
    box-shadow: 0 0 0.6rem #b88230;
}

.footer span:nth-child(n) {
    font-size: 0.6rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.footer span:nth-child(n) i {
    font-size: 1.8rem;
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

.drawer {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    opacity: 0.95;
}

.el-drawer__body {
    padding: 0;
}

.el-drawer__body span:nth-child(1) {
    font-weight: bold;
    font-size: 1.12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
}

.drawer .content {
    height: 55%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.drawer .button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24%;
    clear: both;
}

.add-card {
    width: 30vw;
    height: 100%;
}
</style>