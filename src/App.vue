<script>
export default {
    data() {
        return {
            badyStyle: {
                padding: 0,
                height: '100%',
            }
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
            <span class="title">
                <Sunny style="width: 2rem;height: 2rem;padding: 0.7rem 5px;" />
                <span style="line-height: 3.5rem">TGT</span>
            </span>
        </el-header>
        <el-main class="main">
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div class="text">
                    <span>难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div class="text">
                    <span>美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div class="text">
                    <span>难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div class="text">
                    <span>美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div class="text">
                    <span>难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div class="text">
                    <span>难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div class="text">
                    <span>美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div class="text">
                    <span>难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image" />
                <div class="text">
                    <span>美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包 美味的汉堡包</span>
                </div>
            </el-card>
            <el-card class="card" :body-style="badyStyle">
                <el-image fit="cover"
                    src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f98889a99304418934d94a0ef0dc3c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?"
                    class="image" />
                <div class="text">
                    <span>难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包 难吃的汉堡包</span>
                </div>
            </el-card>
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
    text-align: center;
    display: flex;
    width: 50vw;
    flex-direction: column;
    justify-content: center;
}

.icon {
    width: 50vw;
    font-size: 1.8rem;
}

.main {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100 - 7rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1vh 1vw;
    background-color: #faecd8;
}

.card {
    margin-bottom: 4vh;
    height: 15rem;
    width: 80vw;
}

@media screen and (min-width:768px) {
    .card {
        width: 40vw;
    }
}

@media screen and (min-width:1024px) {
    .card {
        width: 20vw;
    }
}

.image {
    height: 10rem;
    width: 100%;
    display: block;
}

.text span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 3rem;
    line-height: 1.5rem;
    margin: 1rem;
}
</style>