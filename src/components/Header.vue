<script setup lang='ts'></script>

<template>
    <header class='site-header'>
        <div class='logo'>
            <img src='/src/assets/images/favicon.avif' alt='Two Oceans' />
        </div>
        <nav>
            <ul>
                <li><RouterLink to='/'>Home</RouterLink></li>
                <li><RouterLink to='/about'>About</RouterLink></li>
                <li><RouterLink to='/contact'>Contact</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang='scss'>
.site-header {
    background: var(--header-color);
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .logo {
        font-size: 1.5rem;
        font-weight: bold;

        & img {
            height: 2rem;
            vertical-align: middle;

            background-color: #ffffff10;
            border-radius: 50%;
            padding: 0.3rem;
            margin-right: 1rem;
        }

        & img,
        & p {
            display: inline;
        }
    }

    nav {
        & a {
            color: var(--text-color);
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: var(--link-hover-color);
            }
        }

        & ul {
            list-style: none;
            display: flex;
            gap: 1rem;
            margin: 0;
            padding: 0;
        }
    }
}
</style>
