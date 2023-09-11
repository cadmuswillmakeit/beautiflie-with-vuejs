<script setup>

</script>

<template>
    <div class="contact_section layout_padding">
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1 class="contact_taital">Get In Touch</h1>
                <p class="contact_text">Consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
enim ad minim veniam, quis nostrud exercitation  eu </p>
            </div>
            <div class="col-md-6">
                <div class="contact_main">
                    <div class="contact_bt"><a href="#">Contact Form</a></div>
                    <div class="newletter_bt"><a href="#">Newletter</a></div>
                </div>
            </div>
        </div>
        </div>
        <div class="map_main">
        <div class="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.0423381753288!2d1.1935229522178101!3d6.202036972781446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10215986d9510923%3A0x4a76161b0e832512!2sEdpage!5e0!3m2!1sfr!2stg!4v1692724022154!5m2!1sfr!2stg" width="600" height="450" style="border:0; width:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>

</template>

<style scoped >
.contact_section {
    width: 100%;
    float: left;
}

.contact_taital {
    width: 100%;
    float: left;
    color: #1a1c1b;
    font-weight: bold;
    font-size: 40px;
    text-transform: uppercase;
}

.contact_text {
    width: 100%;
    float: left;
    color: #252525;
    margin: 0px;
    font-size: 16px;
}

.contact_main {
    width: 100%;
    display: flex;
    margin-top: 45px;
}

.contact_bt {
    width: 200px;
}

.contact_bt a {
    width: 100%;
    float: left;
    font-size: 16px;
    color: #ffffff;
    padding: 10px 30px;
    background-color: #252525;
    text-transform: uppercase;
    margin-right: 15px;
    border-radius: 5px;
    text-align: center;
}

.contact_bt a:hover {
    background-color: #252525;
    color: #ffffff;
}

.newletter_bt {
    width: 200px;
    margin-left: 20px;
}

.newletter_bt a {
    width: 100%;
    float: left;
    font-size: 16px;
    color: #252525;
    padding: 10px 30px;
    background-color: #fef4ec;
    text-transform: uppercase;
    margin-right: 15px;
    border-radius: 5px;
    text-align: center;
}

.newletter_bt a:hover {
    background-color: #252525;
    color: #ffffff;
}

.map_main {
    width: 100%;
    float: left;
    margin-top: 90px;
}

.contact_section_2 {
    width: 100%;
    float: left;
}


</style>