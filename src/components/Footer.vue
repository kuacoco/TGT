<script>
export default {
    data() {
        return {
            drawer: false,
            homeColor: '#b88230',
            mineColor: '#000',
            bodyStyle: {
                height: "100%",
                padding: "0.5rem",
                width: "100%",
                boxSizing: "border-box"
            }
        }
    },
    methods: {
        goto(name) {
            if (name === 'CreateStrategy') {
                this.footer = this.drawer = false
            }
            this.$router.push({ name })
        }
    },
}
</script>

<template>
    <el-footer class="footer">
        <span @click="goto('Home')" style="{color: homeColor}">
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
        <span @click="goto('Mine')" style="{color: mineColor}">
            <el-icon>
                <UserFilled />
            </el-icon>
            <span>我的</span>
        </span>
    </el-footer>
    <el-drawer size="40%" class="drawer" v-model="drawer" :with-header="false" direction="btt">
        <span>草 稿 箱</span>
        <div class="content">
            <el-card class="add-card" :bodyStyle="bodyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                <span>标题</span>
            </el-card>
            <el-card class="add-card" :bodyStyle="bodyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                <span>标题</span>
            </el-card>
            <el-card class="add-card" :bodyStyle="bodyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                <span>标题</span>
            </el-card>
        </div>
        <div class="button">
            <el-button size="large" type="warning" round @click="goto('CreateStrategy')">
                <el-icon>
                    <Edit />
                </el-icon>
                创建新攻略
            </el-button>
        </div>
    </el-drawer>
</template>

<style>
.el-drawer__body {
    padding: 0;
}
</style>

<style scoped>
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

.drawer {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    opacity: 0.95;
}

.drawer span:nth-child(1) {
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