<script setup lang='ts'>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
    <Header></Header>
    <main>
        <RouterView />
    </main>
    <Footer></Footer>
</template>

<style lang='scss'>
@use 'sass:color';

@font-face {
    font-family: 'Iansui';
    font-style: normal;
    font-weight: normal;
    src: url('/src/assets/fonts/Iansui-Regular.woff2') format('woff2');
}

:root {
    color-scheme: light dark;
    font-family: 'Iansui', 'Arial', sans-serif;
    font-size: 16px;

    --background-color: light-dark(#c8c8c8, #212121);
    --header-color: light-dark(#81e075, #5a7a3b);
    --link-color: light-dark(#409235, #36ca31);
    --link-hover-color: light-dark(#045f10, #60df25);
    --text-color-subdued: light-dark(#666, #ccc);
    --text-color: light-dark(#333, #fff);
    --footer-bg-color: var(--header-color);
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    height: 100dvh;
    margin: 0;
}

main {
    padding-bottom: 5rem;
}

.container {
    margin: 0 auto;
    max-width: 80%;
    padding: 0 20px;
}

a {
    color: var(--link-color);
    transition: color 0.3s;

    &:hover {
        color: var(--link-hover-color);
    }
}
</style>
