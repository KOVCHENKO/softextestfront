<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark nav-backround">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/" tag="a">Home <span class="sr-only"></span></router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/about" tag="a">About Us <span class="sr-only"></span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact" tag="a">Contact Us <span class="sr-only"></span></router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
