<script setup lang='ts'>
import { onMounted } from 'vue'
import L from 'leaflet'

onMounted(() => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = L.map(mapElement)
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const target = L.latLng(-34.5209238, 20.0476116)
        map.setView(target, 15)
        L.marker(target).addTo(map)
    }
})

</script>

<template>
    <div>
        <section class='contact container'>
            <h1>Contact Us</h1>
            <p>Phone: <a href='tel:+27832704506'>+27 (0) 83 270 4506</a></p>
            <p>Email: <a href='mailto:manager@2oceans.farm'>manager@2oceans.farm</a></p>
            <p>Address: Bredasdorp Park, Bredasdorp, South Africa</p>
        </section>
    </div>

    <div id='map'></div>
</template>

<style scoped lang='scss'>
.contact {
    padding: 40px 0;
    text-align: center;

    & h1 {
        margin-bottom: 20px;
    }

    & p {
        margin: 10px 0;
    }

    & a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

#map {
    height: 400px;
    margin-top: 20px;
}
</style>
