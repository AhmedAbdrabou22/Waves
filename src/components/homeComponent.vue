<template>
    <div class="fullStack p-4">
        <div class="row justify-content-around">
            <div class="col-lg-5 col-md-6 col-sm-12">
                <div>
                    <p id="main">Perfect Blend of Technology & Creativity!</p>
                    <h1 class="w-50">Full Stack Web Development Company</h1>
                    <p class="mt-3" id="Parr">We are a promising web development company in Algeria, serving brands via
                        result-oriented website development services and catering to digital needs. Are you looking for
                        custom website development services ? Get in touch for a <b> free consultation</b>.</p>
                    <div class="btns mt-5">
                        <button class="bg-primary p-2 mx-2">Book a Meeting <i class="fa-solid fa-video"></i></button>
                        <button class="p-2 mx-2">View Projects <i class="fa-sharp fa-solid fa-gift"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12">
                <div class="image">
                    <div class="soft shadow"><span>Software Development <i class="fa-brands fa-chrome"></i> </span>
                    </div>
                    <div class="shop shadow"><span>Online Shop<i class="fa-solid fa-shop mx-1"></i></span></div>
                    <div class="system shadow"><span>Learning Managment System <i
                                class="fa-sharp fa-solid fa-user-graduate"></i></span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="developmentService text-center w-75">
        <div>
            <h1>Our Full Stack Website Development Services</h1>
            <div class="hr"></div>
            <p>Our website development services include various features, fluid UX, among other things. This is what
                makes us the best custom web development firm. We infuse all the right and standard parameters for
                making your website lead in this highly competitive marketplace. As a top web development agency, we
                deliver effective web applications and websites. Our solutions meet market stands and business demands.
                We make it a priority to make your web application highly speedy, efficient and retain your users
                impressively.</p>
        </div>
        <div class="row mt-5">
            <div class="col-lg-4 col-md-6 col-sm-12 p-2 pos" v-for="i in 3">
                <div class="text-center develope p-2">
                    <h3 class="text-primary p-3" v-if="(i === 1)">POS Development</h3>
                    <h3 class="text-primary p-3" v-else-if="(i === 2)">Frontend and Backend Development</h3>
                    <h3 class="text-primary p-3" v-else="(i === 3)">eCommerce Solutions</h3>
                    <p v-if="(i === 1)">Wichues offers you a unique platform that will help you manage the tableside servicing, food ordering & delivery, payments, billings, inventory and many more, also We provide POS development Solutions for restaurants, liquor store, salon, retail business and much more.</p>
                    <p v-else-if="(i===2)">Ensure a secure, scalable and feature-rich development of your products. We deliver websites that are efficient and high-performing. Our solutions ensure unmatched efficiency, performance, and best results helping you reserving a top seat amongst the competitors.</p>
                    <p v-else>Explore the best custom web development services of the industry. We not only help your e-commerce business succeed, but also reach out to your potential audience. This helps businesses gain an edge in today’s competitive digital market.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style scoped>
button {
    border: 1px solid transparent;
}

.btns button:first-child {
    color: white;
}

.btns button:last-child {
    background-color: #fcb43a;
    transition: 0.3s all ease;
}

.btns button:last-child:hover {
    background-color: #000;
    color: white;
    transform: scale(1.1);
}

p {
    line-height: 35px;
}

#Parr {
    color: #7a7a7a;
}

#main {
    font-size: 25px;
    font-weight: 500;
}

.image {
    background-image: url('@/assets/0001.webp');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 75vh;
    background-position: center;
    position: relative;
}

.soft,
.shop,
.system {
    width: 200px;
    padding: 8px;
    background-color: white;
    position: absolute;
    animation: cmove 3s infinite alternate;
}

.shop {
    width: 135px;
    top: 50%;
    animation: anmove 4s infinite alternate;
}

.system {
    width: 250px;
    top: 60%;
    right: 0;
    animation: mymove 2s infinite alternate;
}

@keyframes mymove {
    from {
        top: 0px;
    }

    to {
        top: 200px;
    }
}

@keyframes cmove {
    from {
        top: 0px;
    }

    to {
        top: 200px;
    }
}

@keyframes anmove {
    from {
        top: 180px;
    }

    to {
        top: 380px;
    }
}

.developmentService {
    margin: 80px auto;
}

h1 {
    font-weight: 700;
}

.developmentService p {
    font-weight: bold;
    color: #7a7a7a;
}

.hr {
    width: 110px;
    height: 5px;
    background-color: #7a7a7a;
    margin: 10px auto;
}
.develope{
    border: 1px solid #000;
    border-radius: 10px;
    padding:5px;
}
.develope p{
    line-height: 25px;
    text-align: center;
    font-weight: 400;
}
.develope{
    height:300px;
}
</style>