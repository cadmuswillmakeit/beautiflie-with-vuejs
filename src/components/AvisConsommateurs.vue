<script setup>

</script>

<template>
    <div class="customer_section layout_padding">
        <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="customer_taital">What says customers</h1>
            </div>
        </div>
        <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <div class="client_section_2">
                    <div class="client_main">
                        <div class="client_left">
                            <div class="client_img"><img src="../../public/images/client-img.png"></div>
                        </div>
                        <div class="client_right">
                            <h3 class="name_text">Jonyro</h3>
                            <p class="dolor_text">consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="carousel-item active">
                    <div class="client_section_2">
                    <div class="client_main">
                        <div class="client_left">
                            <div class="client_img"><img src="../../public/images/client-img.png"></div>
                        </div>
                        <div class="client_right">
                            <h3 class="name_text">Jonyro</h3>
                            <p class="dolor_text">consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="client_section_2">
                    <div class="client_main">
                        <div class="client_left">
                            <div class="client_img"><img src="../../public/images/client-img.png"></div>
                        </div>
                        <div class="client_right">
                            <h3 class="name_text">Jonyro</h3>
                            <p class="dolor_text">consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i class="fa fa-angle-right"></i>
            </a>
        </div>
        </div>
    </div>

</template>

<style scoped>

.customer_section {
    width: 100%;
    float: left;
    padding-bottom: 70px;
}

.customer_taital {
    width: 100%;
    float: left;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    color: #252525;
    font-weight: bold;
}

.client_section_2 {
    width: 70%;
    margin: 0 auto;
    padding-top: 50px;
}

.client_main {
    width: 100%;
    float: left;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 30px 1px #eeeeed;
    margin-bottom: 50px;
}

.client_left {
    width: 30%;
    float: left;
}

.client_right {
    width: 70%;
    float: left;
    padding-top: 55px;
    padding-left: 14px;
}

.name_text {
    width: 100%;
    float: left;
    font-size: 24px;
    color: #252525;
    font-weight: bold;
    text-transform: uppercase;
}

.dolor_text {
    width: 100%;
    float: left;
    font-size: 14px;
    color: #252525;
    margin: 0px;
}

.client_img {
    width: 100%;
    text-align: center;
}

#main_slider a.carousel-control-prev {
    left: -60px;
    top: 360px;
}

#main_slider a.carousel-control-next {
    right: -60px;
    top: 360px;
}

#main_slider .carousel-control-next,
#main_slider .carousel-control-prev {
    width: 55px;
    height: 55px;
    background: #ffffff;
    opacity: 1;
    font-size: 30px;
    color: #000000;
    border-radius: 100px;
    box-shadow: 0px 0px 18px 8px #eeeeed;
    left: 0px;
    right: 0px;
    margin: 0 auto;
}

#main_slider .carousel-control-next:focus,
#main_slider .carousel-control-next:hover,
#main_slider .carousel-control-prev:focus,
#main_slider .carousel-control-prev:hover {
    color: #000;
    background-color: #f5ddb6
}


</style>