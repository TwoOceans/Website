<script setup lang='ts'></script>

<template>
    <div>
        <section class='about container'>
            <h1>About Us</h1>
            <p>
                Welcome to Two Oceans Projects and Services (Pty) Ltd. We combine technology and nature to create
                lasting change.
                Specializing in drinkable water supply solutions and cutting-edge hydroponic farming, our mission is to
                provide sustainable,
                efficient, and impactful solutions.
            </p>
            <h2>Hydroponic Farming Division</h2>
            <p>
                At Nooitgedacht Fresh Produce, our urban farm in Bredasdorp Park embraces a waterwise approach that uses
                up to 90% less water than traditional methods.
                We produce a variety of leafy vegetables, herbs, tomatoes, and spinach while recycling water, reducing
                waste, and minimizing our carbon footprint.
            </p>
            <h3>Our Products & Services</h3>
            <ul>
                <li>Lettuce, Herbs, Spinach, Cocktail Tomatoes, and Spring Onions</li>
                <li>Vegetable Seedlings and Other Fresh Produce</li>
                <li>Frozen Pomegranate Juice</li>
                <li>Custom Designed Grow Systems</li>
            </ul>
        </section>
    </div>
</template>

<style scoped lang='scss'>
.about {
    padding: 40px 0;

    & h1 {
        font-size: 2em;
        margin-bottom: 20px;
    }

    & h2 {
        font-size: 1.5em;
        margin-top: 20px;
    }

    & h3 {
        font-size: 1.2em;
        margin-top: 15px;
    }

    & p,
    & ul {
        line-height: 1.6;
        margin-bottom: 15px;
    }

    & ul {
        list-style: inside;
    }
}
</style>
