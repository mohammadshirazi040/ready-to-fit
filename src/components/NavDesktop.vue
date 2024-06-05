<template>
  <header class="header-desktop">
    <router-link to="/"> <h1>Ready To Fit</h1> </router-link>
    <nav>
      <router-link to="/"> Home </router-link>

      <router-link to="/about"> About </router-link>

      <router-link to="/offer"> Price </router-link>

      <router-link to="/login"> Login </router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header-desktop {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100%;
  z-index: 1;
  background: var(--secondary);
}

.header-desktop h1 {
  margin-left: 2.5rem;
  font-size: 2.5rem;
}

.header-desktop nav {
  margin-right: 2.5rem;
}

nav a {
  position: relative;
  color: var(--text);
  margin: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
}
nav a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--button);
  transition: 0.3s;
}

nav a:hover::before {
  width: 100%;
}

@media only screen and (max-width: 889px) {
  .header-desktop {
    display: none;
  }
}
</style>
