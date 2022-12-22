<template>
    <div class="home">
        <!--fullStack-->
        <div class="fullStack p-4">
            <div class="row justify-content-around">
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <div>
                        <p id="main">Perfect Blend of Technology & Creativity!</p>
                        <h1 class="w-50">Full Stack Web Development Company</h1>
                        <p class="mt-3" id="Parr">We are a promising web development company in Algeria, serving brands
                            via
                            result-oriented website development services and catering to digital needs. Are you looking
                            for
                            custom website development services ? Get in touch for a <b> free consultation</b>.</p>
                        <div class="btns mt-5">
                            <button class="bg-primary p-2 mx-2">Book a Meeting <i
                                    class="fa-solid fa-video"></i></button>
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
        <!--FullStack-->

        <!--developmentService-->
        <div class="developmentService text-center w-75">
            <div>
                <h1>Our Full Stack Website Development Services</h1>
                <div class="hr"></div>
                <p>Our website development services include various features, fluid UX, among other things. This is what
                    makes us the best custom web development firm. We infuse all the right and standard parameters for
                    making your website lead in this highly competitive marketplace. As a top web development agency, we
                    deliver effective web applications and websites. Our solutions meet market stands and business
                    demands.
                    We make it a priority to make your web application highly speedy, efficient and retain your users
                    impressively.</p>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4 col-md-6 col-sm-12 p-2 pos" v-for="i in 3">
                    <div class="text-center develope p-2">
                        <h3 class="text-primary p-3" v-if="(i === 1)">POS Development</h3>
                        <h3 class="text-primary p-3" v-else-if="(i === 2)">Frontend and Backend Development</h3>
                        <h3 class="text-primary p-3" v-else="(i === 3)">eCommerce Solutions</h3>
                        <p v-if="(i === 1)">Wichues offers you a unique platform that will help you manage the tableside
                            servicing, food ordering & delivery, payments, billings, inventory and many more, also We
                            provide POS development Solutions for restaurants, liquor store, salon, retail business and
                            much more.</p>
                        <p v-else-if="(i === 2)">Ensure a secure, scalable and feature-rich development of your
                            products.
                            We deliver websites that are efficient and high-performing. Our solutions ensure unmatched
                            efficiency, performance, and best results helping you reserving a top seat amongst the
                            competitors.</p>
                        <p v-else>Explore the best custom web development services of the industry. We not only help
                            your e-commerce business succeed, but also reach out to your potential audience. This helps
                            businesses gain an edge in today’s competitive digital market.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--developmentService-->

        <!--customizeDevelopment-->
        <div class="customizeDevelopment d-flex justify-content-between">
            <div style="visibility:hidden">Lorem ipsum</div>
            <div class="custom">
                <h2>Leading Custom <br> Web Development Company</h2>
                <p class="mt-5"><b>Wichues</b> is a certified web app development company. Our bespoke, customer-centric
                    web
                    app development services cater to the digital needs of all-scale businesses. Our dedicated
                    developers
                    leverage the latest technologies and globally functional software that boosts businesses’ growth and
                    earning potential. For the past 5 years, we have worked and delivered optimized business solutions
                    adhering to their needs.</p>


                <p class="mt-4">To date, we have accomplished 100+ projects with 70+ satisfied clients. Without issues
                    has a
                    team of skilled professionals. Every team member has years of experience in their field and provides
                    the
                    best app development solutions to every client. The dynamic of the company statistics is to
                    constantly
                    innovate, improve the products & services, and serve customer satisfaction.</p>
            </div>
        </div>
        <!--customizeDevelopment-->

        <!--process-->
        <div class="process">
            <div class="w-50 text-center m-auto">
                <h1>Our Development Process</h1>
                <p class="text-primary">We believe in simplifying technology for you</p>

                <p>Our development process is carefully curated to guide you from one end to another successfully. At
                    Wichues we give you number of reasons to choose us, one of them is our smartly designed process.
                    From Development to Optimisation we work effectively to perfect you enterprise needs.</p>
            </div>
            <div class="img w-75 text-center m-auto mt-5">
                <img src="@/assets/Screen-Shot-2022-10-06-at-08.38.41.webp" alt="Design" class="img-fluid">
            </div>
        </div>
        <!--process-->

        <!--Solutions_Div-->
        <div class="solutions">
            <div class="w-50 m-auto infoSol text-center">
                <h1>Our Diverging Development Solutions for Specific Business Needs</h1>
                <p>Serving All-Scale Businesses Globally</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 p-4" v-for="i in 4">
                        <div class="rowOne">
                            <div class="smallImage shadow">
                                <img src="@/assets/small-medium.webp" v-if="(i == 1)" alt="small" class="img-fluid">
                                <img src="@/assets/agencies.webp" v-else-if="(i == 2)" alt="small" class="img-fluid">
                                <img src="@/assets/enterprise.webp" v-else-if="(i == 3)" alt="small" class="img-fluid">
                                <img src="@/assets/startups.webp" v-else alt="small" class="img-fluid">
                            </div>
                            <div class="py-4" v-if="(i == 1)">
                                <h2>SMBs</h2>
                                <p>
                                    Implementing the right web & app development approach to help small-scale businesses
                                    earn identity in the global market. Be ready to get market exposure with our
                                    assistance.
                                </p>
                            </div>
                            <div class="py-4" v-else-if="(i == 2)">
                                <h2>Entreprise</h2>
                                <p>
                                    Robust and customized enterprise mobility solutions to meet your business needs.
                                    Each development layer is engineered with experience and expertise.
                                </p>
                            </div>
                            <div class="py-4" v-else-if="(i == 3)">
                                <h2>Startups</h2>
                                <p>
                                    Let your business startup reach the heights of success in no time. We do product
                                    development for startups and make them scalable to get more funding as a brand.
                                </p>
                            </div>

                            <div class="py-4" v-else>
                                <h2>Agencies</h2>
                                <p>
                                    Our technical approach makes it accessible for offshore agencies to get great
                                    exposure, improve businesses’ financial growth, and increase sales & marketing
                                    potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Solutions_Div-->

        <!--Section industrial we serve-->
        <div class="industries py-5 text-center">
            <h2 class="mt-5">Industries We Serve</h2>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.webp?fit=768%2C480&ssl=1');">
                                <div class="edu">
                                    <span>Eduction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image:url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/2018_11-Lee-8.webp?fit=768%2C513&ssl=1');">
                                <div class="edu">
                                    <span>Food & Restaurant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/fabio-comparelli-uq2E2V4LhCY-unsplash.webp?fit=768%2C960&ssl=1');">
                                <div class="edu">
                                    <span>Travel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/usman-yousaf-atn5XAZtRYE-unsplash.webp?fit=768%2C512&ssl=1');">
                                <div class="edu">
                                    <span>HealthCare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.webp?fit=768%2C480&ssl=1');">
                                <div class="edu">
                                    <span>Eduction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image:url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/2018_11-Lee-8.webp?fit=768%2C513&ssl=1');">
                                <div class="edu">
                                    <span>Food & Restaurant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/fabio-comparelli-uq2E2V4LhCY-unsplash.webp?fit=768%2C960&ssl=1');">
                                <div class="edu">
                                    <span>Travel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="teamItem shadow">
                            <div class="imgBox"
                                style="background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/usman-yousaf-atn5XAZtRYE-unsplash.webp?fit=768%2C512&ssl=1');">
                                <div class="edu">
                                    <span>HealthCare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Section industrial we serve-->

        <!--Section lucia-->
        <div class="eCommerce">
            <div class="row justify-content-between align-items-center">
                <div class="col-6">
                    <div class="d-flex lucia">
                        <img src="@/assets/fff.svg" alt="FFFSVG">
                        <img src="@/assets/Lucia-Figma-card.webp" alt="">
                    </div>
                </div>
                <div class="col-5">
                    <div class="detailCommerce">
                        <p class="text-primary">eCommerce Solutions</p>
                        <h2>Lucia</h2>
                        <p> <b>Lucia</b> is an online store based on the WooCommerce Plugin.Dedicated for Women to sell
                            and purchase products in high flexibilty system</p>
                        <button class="btn btn-primary py-2">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
        <!--Section lucia-->

        <!--Section lucia-->
        <div class="eCommerce">
            <div class="row justify-content-between align-items-center">
                <div class="col-5 sd">
                    <div class="detailCommerce">
                        <p class="text-primary">eLearning Solutions </p>
                        <h2>Learner</h2>
                        <p><b>Learner</b> is a global destination for teaching and learning online as a platform that
                            allows instructors to build online courses on their preferred topics. Using Learner’s course
                            development tools, instructors can upload videos, source code for developers, PDFs, ZIP
                            files and any other content that learners might find helpful.</p>
                        <button class="btn btn-primary py-2">Discover More</button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex lucia2">
                        <img src="@/assets/Learner-Figma-card.webp" alt="">
                        <img src="@/assets/fff.svg" alt="FFFSVG">
                    </div>
                </div>
            </div>
        </div>
        <!--Section lucia-->


                <!--Section lucia-->
                <div class="eCommerce">
            <div class="row justify-content-between align-items-center">
                <div class="col-6">
                    <div class="d-flex lucia">
                        <img src="@/assets/fff.svg" alt="FFFSVG">
                        <img src="@/assets/Jobify-Figma-Card.webp" alt="">
                    </div>
                </div>
                <div class="col-5">
                    <div class="detailCommerce">
                        <p class="text-primary">IT Solution</p>
                        <h2>Jobify</h2>
                        <p><b>Jobify</b>is a Full Stack Web Application created with React js and Node js, that allow users to sign up as a Candidate and create a Profile and seek for jobs, also allow companies to register as an Employer with a specific Plan and post their Jobs through a builtin Dashboard</p>
                        <button class="btn btn-primary py-2">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
        <!--Section lucia-->
    </div>
</template>


<script>

</script>


<style scoped>
.eCommerce {
    margin-top: 180px;
}

.eCommerce .sd {
    padding-left: 80px;
}

.eCommerce .detailCommerce h2,
.eCommerce .detailCommerce p {
    color: #7a7a7a
}

.eCommerce .lucia img,
.eCommerce .lucia2 img {
    width: 60%;
}

.eCommerce .lucia img:last-child {
    margin-left: -300px;
}

.eCommerce .lucia2 img:last-child {
    margin-right: 50px;
}

.home {
    overflow-x: hidden;
}

.teamItem {
    overflow: hidden;
}

.industries h2 {
    font-weight: 700;
    color: rgb(75, 79, 88);
}

.imgBox {
    display: inline-block;
    overflow: hidden;
    position: relative;
    transition: 0.3s all ease;
}

.teamItem .imgBox {
    /* background-image: url('https://i0.wp.com/wichues.com/wp-content/uploads/2022/10/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.webp?fit=768%2C480&ssl=1'); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    min-height: 250px;
    width: 100%;
}

.teamItem .imgBox:hover {
    background-size: 110%;
}

.edu span {
    font-size: 25px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 600;
    position: absolute;
    top: 80%;
    left: 30%;
    color: white;
}

.teamItem:hover .imgBox {
    transform: scale(1.1);
    overflow: hidden;
}

.teamItem .imgBox::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    transform: translateY(-100%);
    transition: all 0.5s ease;
    background: linear-gradient(#00000099, #cacdf1);
}

.teamItem:hover .imgBox::before {
    transform: translateY(0%);
}

.teamItem:hover .imgBox::before {
    transform: translateY(0%);
}

.home {
    position: relative;
}

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

.develope {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 5px;
}

.develope p {
    line-height: 25px;
    text-align: center;
    font-weight: 400;
}

.develope {
    min-height: 300px;
}


.custom {
    background-image: url('@/assets/bg-blue.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    width: 90%;
    padding: 80px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

.custom h2 {
    font-weight: 700;
}

.process {
    margin: 10% auto;
    text-align: center;
}

.process h1 {
    font-weight: 700;
    color: #4b4f58;
}

.solutions {
    background-color: #c0e0f6;
    padding: 20px;
}

.solutions .infoSol p {
    color: #fcb43a;
    font-size: 20px;
    font-weight: 700;
}

.rowOne {
    background-color: white;
    position: relative;
    padding: 20px;
    border-radius: 10px;
    min-height: 370px;
}

.s {
    min-height: 350px;
}

.smallImage {
    background-color: white;
    width: 120px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -8%;
    border-radius: 10px;
}

.smallImage img {
    width: 50%;
}



@media(max-width:768px) {
    .customizeDevelopment .custom {
        display: none;
    }
}
</style>