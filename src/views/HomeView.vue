<template>
  <main>
    <section class="section1">
      <article>
        <h1 id="header-title">
          Train <br />
          Without <br />Limit
        </h1>
        <p>
          Training involves regularly engaging in physical exercises to improve strength, endurance,
          and overall fitness while also promoting well-being and health.
        </p>
      </article>

      <div class="picture">
        <div class="circle"></div>
        <img class="model1" src="../assets/img/model.svg" alt="" />
      </div>
    </section>

    <section id="trainer" class="section2">
      <h2>Wild Programs</h2>
      <p>
        In our gym, we offer three courses: Fitness to enhance strength and endurance, MMA for
        versatile combat sports training, and Yoga to promote flexibility and inner balance.
      </p>

      <router-link to="/offer">
        <div class="container">
          <div class="box">
            <img class="model" src="../assets/img/fitmodel.svg" alt="" />
          </div>
          <h3>Fitness</h3>
          <p>
            Fitness encompasses physical activities and lifestyle choices aimed at improving health
            and overall well-being.
          </p>
        </div>
      </router-link>

      <router-link to="/offer">
        <div class="container">
          <div class="box">
            <img class="model" src="../assets/img/thaimodel.svg" alt="" />
          </div>
          <h3>Mixed Martial Arts</h3>
          <p>MMA is a versatile combat sport that combines techniques from various disciplines.</p>
        </div>
      </router-link>

      <router-link to="/offer">
        <div class="container">
          <div class="box">
            <img class="model" src="../assets/img/yogamodel.svg" alt="" />
          </div>
          <h3>Yoga</h3>
          <p>
            Yoga is a practice that combines physical postures, breathing exercises, and meditation.
          </p>
        </div>
      </router-link>
    </section>
  </main>
  <div>
    <a href="#header-title">
      <span class="material-symbols-outlined"> keyboard_double_arrow_up </span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 1rem;
  font-size: 2.7rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
}
article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

article p {
  width: 70%;
  margin: 2rem;
}

p {
  margin: 1rem;
  text-align: center;
}

.circle {
  margin-top: 2.5rem;
  width: 280px;
  height: 280px;
  background: transparent;
  border-radius: 50%;
  border: 10px solid var(--button);
  box-shadow: 0px 0px 50px 10px var(--button);
}
.picture {
  position: relative;
}

.model1 {
  position: absolute;
  width: 280px;
  height: auto;
  top: 0;
}

h2 {
  margin-top: 5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.9rem;
}

h3 {
  color: var(--button);
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem;
}

.section2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section2 > p {
  width: 70%;
}

.container {
  background: var(--secondary);
  border-radius: 30px;
  width: 335px;
  height: 450px;
  margin: 2rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.container > p {
  max-width: 80%;
}

.box {
  width: 300px;
  height: 300px;
  margin: 1rem;
  overflow: hidden;
  background: var(--secondary);
  border: 5px solid var(--button);
  transition: transform 0.4s ease-in;
  border-radius: 50% 10%;
}

.box:hover {
  transform: scale(1.1);
}

.model {
  width: 100%;
}

.material-symbols-outlined {
  display: block;
  text-align: center;
  margin: 0.5rem 0;
  color: var(--text);
}

/* ========= Media Queries =========== */

@media only screen and (min-width: 768px) {
  main {
    width: 100%;
  }

  .section1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }

  .picture {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
  }
  article {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  article p {
    width: 70%;
    font-size: 1.2rem;
  }

  .circle {
    width: 320px;
    height: 320px;
    box-shadow: 0px 0px 50px 20px var(--button);
    border: 12px solid var(--button);
  }

  .model1 {
    width: 320px;
    height: auto;
    top: -10px;
  }

  .section2 {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    max-width: 90%;
  }

  h2 {
    font-size: 2.2rem;
  }

  .section2 > p {
    width: 90%;
    font-size: 1.2rem;
  }
}

.container {
  width: 300px;
  height: 500px;
  margin: 2rem 0;
}

.box {
  width: 260px;
  height: 300px;
}

@media only screen and (min-width: 890px) {
  .section2 {
    align-items: center;
    max-width: 100%;
  }
  .container {
    width: 290px;
    height: 480px;
    margin: 2rem 0;
  }

  .box {
    width: 240px;
    height: 280px;
  }
}

@media only screen and (min-width: 1300px) {
  h1 {
    font-size: 4rem;
  }

  article p {
    font-size: 1.7rem;
  }

  .circle {
    width: 370px;
    height: 370px;
    border: 14px solid var(--button);
  }

  .model1 {
    width: 370px;
    height: auto;
  }

  h2 {
    font-size: 2.8rem;
  }

  .section2 > p {
    width: 80%;
    font-size: 1.7rem;
  }

  .container {
    width: 350px;
    height: 520px;
  }

  .box {
    width: 280px;
    height: 320px;
    margin: 2rem;
  }
}
</style>
