<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" exact class="navbar-brand" active-class="active" style="cursor: pointer">Logo</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link to="/" exact class="nav-link" tag="li" active-class="active" style="cursor: pointer">Home</router-link>
                <router-link to="/conatct" exact class="nav-link" tag="li" active-class="active" style="cursor: pointer">Contact</router-link>
                <router-link to="/project" exact class="nav-link" tag="li" active-class="active" style="cursor: pointer">Project</router-link>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style>
</style>
