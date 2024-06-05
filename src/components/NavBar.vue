<template>
  <header class="header-mobile">
    <router-link to="/"> <h1>Ready To Fit</h1> </router-link>
    <span @click="showNav = !showNav" class="material-symbols-outlined menu-btn"> menu </span>
  </header>
  <nav v-if="showNav" class="sidebar">
    <ul class="list">
      <li class="list-item">
        <router-link @click="showNav = !showNav" to="/">
          <span class="material-symbols-outlined icons"> home </span>
          <span class="link-name">Home</span>
        </router-link>
      </li>

      <li class="list-item">
        <a @click="showNav = !showNav" href="/about">
          <span class="material-symbols-outlined icons"> search </span>
          <span class="link-name">About</span>
        </a>
      </li>

      <li class="list-item">
        <router-link @click="showNav = !showNav" to="/offer">
          <span class="material-symbols-outlined icons"> currency_bitcoin </span>
          <span class="link-name">Price</span>
        </router-link>
      </li>

      <li class="list-item">
        <router-link @click="showNav = !showNav" to="/login">
          <span class="material-symbols-outlined icons"> login </span>
          <span class="link-name">Login</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
/* ======== Header ======= */
.header-mobile {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  z-index: 1;
  background: var(--secondary);
}

h1 {
  margin: 1rem;
  color: var(--text);
}

.menu-btn {
  margin: 1rem;
  font-size: 2.6rem;
  color: var(--text);
}
/* ========= SideBar ========= */
.sidebar {
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary);
  padding: 6px 14px;
  z-index: 1;
}

.sidebar .logo-menu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
}

.sidebar .logo-menu .logo {
  font-size: 1.8rem;
  color: var(--text);
  pointer-events: none;
  position: absolute;
  right: 20px;
}

.sidebar .logo-menu .toggle-btn {
  position: absolute;
  right: 90%;
  transform: translateX(50%);
  width: 40px;
  height: 40px;
  color: var(--text);
  font-size: 22px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.sidebar .list {
  margin-top: 10px;
}

.list .list-item {
  list-style: none;
  width: 100%;
  height: 60px;
  margin: 5px 0;
  line-height: 60px;
}

.list .list-item a {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--text);
  text-decoration: none;
  border-radius: 6px;
  transition: 0.5s;
}

.list .list-item.active a,
.list .list-item a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.icons {
  min-width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}

@media only screen and (min-width: 890px) {
  nav {
    display: none;
  }
  .menu-btn {
    display: none;
  }
  .header-mobile {
    display: none;
  }
}
</style>
