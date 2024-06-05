<template>
  <footer>
    <p>
      © All Rights Reserved By
      <a href="https://github.com/mohammadshirazi040" target="_blank">M.Shirazi</a>
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  background: var(--secondary);
}

a {
  position: relative;
}

a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--button);
  transition: 0.5s;
}
a:hover::before {
  width: 100%;
}

a:link {
  color: var(--button);
}
a:visited {
  color: var(--button);
}
a:hover {
  border-bottom: 1px solid var(--button);
}

a:active {
  color: var(--text);
}
</style>
