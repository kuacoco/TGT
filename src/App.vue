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
        <el-header class="header"></el-header>
        <el-main class="main">
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="card">
                <el-image fit="contain"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">2019-1-1</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
        </el-main>
        <el-footer class="header">Footer</el-footer>
    </el-container>
</template>
  
<style scoped>
.header {
    background-color: pink;
    height: 3.5rem;
}

.main {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100 - 7rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1vh 1vw;
}

.card {
    margin-bottom: 1vh;
    width: 90vw;
}

@media (min-width:350px) {
    .card {
        width: 45vw;
    }
}

@media screen and (min-width:768px) {
    .card {
        width: 23vw;
    }
}

@media screen and (min-width:1024px) {
    .card {
        width: 15vw;
    }
}
</style>