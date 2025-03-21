<script setup lang='ts'>
import { onMounted } from 'vue'
import Viewer from 'viewerjs'
import Contact from './Contact.vue'
import About from './About.vue';

let gallery: Viewer | undefined;

onMounted(() => {
    const galleryElement = document.getElementById('images')
    if (galleryElement) {
        gallery = new Viewer(galleryElement)
    }
})

function showGallery() {
    if (gallery) {
        gallery.show()
    }
}
</script>

<template>
    <div>
        <section class='hero'>
            <div class='container'>
                <h1>Welcome to Two Oceans Farm</h1>
                <p>Experience sustainable hydroponic farming with fresh, local produce grown with care.</p>
            </div>
        </section>
    </div>

    <div>
        <ul @click='showGallery' id='images'>
            <li><img src='/src/assets/images/wide_1.avif'></li>
            <li><img src='/src/assets/images/wide_2.avif'></li>
            <li><img src='/src/assets/images/wide_3.avif'></li>
            <li><img src='/src/assets/images/wide_4.avif'></li>
            <li><img src='/src/assets/images/greens_22.avif'></li>
            <li><img src='/src/assets/images/greens_23.avif'></li>
            <li><img src='/src/assets/images/greens_24.avif'></li>
            <li><img src='/src/assets/images/greens_25.avif'></li>
            <li><img src='/src/assets/images/wide_5.avif'></li>
            <li><img src='/src/assets/images/wide_6.avif'></li>
            <li><img src='/src/assets/images/wide_7.avif'></li>
            <li><img src='/src/assets/images/wide_8.avif'></li>
            <li><img src='/src/assets/images/wide_9.avif'></li>
            <li><img src='/src/assets/images/wide_10.avif'></li>
            <li><img src='/src/assets/images/wide_11.avif'></li>
            <li><img src='/src/assets/images/wide_12.avif'></li>
            <li><img src='/src/assets/images/wide_13.avif'></li>
            <li><img src='/src/assets/images/wide_14.avif'></li>
            <li><img src='/src/assets/images/wide_15.avif'></li>
            <li><img src='/src/assets/images/wide_16.avif'></li>
            <li><img src='/src/assets/images/wide_17.avif'></li>
            <li><img src='/src/assets/images/wide_18.avif'></li>
            <li><img src='/src/assets/images/wide_19.avif'></li>
            <li><img src='/src/assets/images/wide_20.avif'></li>
            <li><img src="/src/assets/images/wide_21.avif"/></li>
            <li><img src="/src/assets/images/wide_22.avif"/></li>
            <li><img src="/src/assets/images/wide_23.avif"/></li>
            <li><img src="/src/assets/images/wide_24.avif"/></li>
            <li><img src="/src/assets/images/wide_25.avif"/></li>
            <li><img src="/src/assets/images/wide_26.avif"/></li>
            <li><img src="/src/assets/images/wide_27.avif"/></li>
            <li><img src="/src/assets/images/wide_28.avif"/></li>
            <li><img src="/src/assets/images/wide_29.avif"/></li>
            <li><img src="/src/assets/images/wide_30.avif"/></li>
            <li><img src='/src/assets/images/flowers_5.avif'></li>
            <li><img src='/src/assets/images/fish_and_chips.avif'></li>
        </ul>
    </div>
    <About></About>
    <Contact></Contact>
</template>

<style scoped lang='scss'>
#images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 0;
    margin: 0 auto;
    max-width: 80%;

    & li {
        list-style: none;
        aspect-ratio: 1;
        overflow: hidden;

        &:nth-child(n+9) {
            display: none;
        }
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
}
</style>
