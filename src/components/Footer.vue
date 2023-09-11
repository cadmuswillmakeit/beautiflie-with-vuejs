<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <footer>
        <div class="footer_section layout_padding">
            <div class="container">
            <div class="footer_logo"><RouterLink to="/"><img src="../../public/images/footer-logo.png"></RouterLink></div>
            <div class="contact_section_2">
                <div class="row">
                    <div class="col-sm-4">
                        <h3 class="address_text">Contact Us</h3>
                        <div class="address_bt">
                        <ul>
                            <li>
                                <a href="#">
                                <i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left10">Address : Loram Ipusm</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left10">Call : +01 1234567890</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <i class="fa fa-envelope" aria-hidden="true"></i><span class="padding_left10">Email : demo@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="footer_logo_1"><RouterLink to="/"><img src="../../public/images/footer-logo.png"></RouterLink></div>
                        <p class="dummy_text">commodo consequat. Duis aute 
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                    </div>
                    <div class="col-sm-4">
                        <div class="main">
                        <h3 class="address_text">Best Products</h3>
                        <p class="ipsum_text">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="social_icon">
                <ul>
                    <li>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
            <div class="copyright_section">
                <div class="container">
                <p class="copyright_text">2023 All Rights Reserved.</p>
                </div>
            </div>
    </footer>
</template>

<style scoped>
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



    .footer_section {
        width: 100%;
        float: left;
        background-color: #252525;
        height: auto;
        background-size: 100%;
        padding-bottom: 30px;
    }

    .footer_logo {
        width: 100%;
        float: left;
        text-align: center;
        display: none;
    }

    .footer_logo_1 {
        width: 100%;
        float: left;
        text-align: center;
    }

    .address_bt {
        width: 100%;
        float: left;
    }

    .address_bt ul {
        margin: 0px;
        padding: 0px;
    }

    .address_bt li {
        font-size: 16px;
        color: #ffffff;
        padding: 10px 0px 0px 0px;
    }

    .address_bt li a {
        color: #ffffff;
    }

    .address_bt li a:hover {
        color: #f5ddb6;
    }

    .padding_left10 {
        padding-left: 10px;
    }

    .address_text {
        font-size: 24px;
        color: #ffffff;
        text-transform: uppercase;
    }

    .dummy_text {
        width: 100%;
        float: left;
        font-size: 14px;
        color: #ffffff;
        margin: 0px;
        text-align: center;
        padding-top: 20px;
    }

    .ipsum_text {
        width: 65%;
        float: left;
        font-size: 14px;
        color: #ffffff;
        margin: 0px;
        padding-top: 10px;
    }

    .main {
        width: 54%;
        float: right;
    }

    .social_icon {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        padding-top: 40px;
        border-bottom: 1px solid #f5ddb6;
        padding-bottom: 30px;
    }

    .social_icon ul {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        text-align: center;
    }

    .social_icon li {
        float: left;
        font-size: 26px;
        color: #f5ddb6;
        padding: 10px;
    }

    .social_icon li a {
        color: #f5ddb6;
    }

    .social_icon li a:hover {
        color: #ffffff;
    }

    .copyright_section {
        width: 100%;
        float: left;
        background-color: #252525;
        height: auto;
    }

    .copyright_text {
        width: 100%;
        color: #ffffff;
        text-align: center;
        font-size: 16px;
        margin: 20px 0px;
    }

    .copyright_text a {
        color: #ffffff;
    }

    .copyright_text a:hover {
        color: #f5ddb6;
    }

    .margin_top90 {
        margin-top: 90px;
    }
</style>