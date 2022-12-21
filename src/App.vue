<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo-new-3-e1662061359457.webp" class="img-fluid" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">Process</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/talk">Let’s Talk</router-link>
          </li>
        </ul>
        <div class="meeting">
      <div>
        <button class="bg-primary p-2">Book a Meeting <i class="fa-solid fa-video"></i></button>
      </div>
    </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
body{
  overflow-x: hidden;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
.navbar{
  background-color: white;
}


a {
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:10px;
}

nav a.router-link-exact-active {
  color: #0d6efd;
  border-bottom: 2px solid #0d6efd;
}


.navbar-brand img {
  width: 100px;
  height: 100px;;
}

ul {
  list-style: none
}

ul li {
  margin: 15px;
}

button {
  border: 1px solid transparent;
  color: white;
}
</style>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    let nav = document.querySelector('.navbar')
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 5){
        nav.classList.add('shadow')
      }else{
        nav.classList.remove('shadow')
      }
    })
  }
}
</script>