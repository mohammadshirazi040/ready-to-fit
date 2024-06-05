<template>
  <main>
    <section>
      <h1>About Us</h1>
      <p>
        Welcome to Ready To Fit. At Ready To Fit Gym we offer a unique combination of yoga, fitness
        and MMA training tailored to your individual needs and goals. Our goal is to help you get
        stronger, more flexible and healthier while training in a supportive and motivating
        community. Our Mission Our mission is to create a space where people of all fitness levels
        can improve their health and wellbeing. Whether you're a beginner or a seasoned athlete,
        we're here to support and inspire you on your journey.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to create a space where people of all fitness levels can improve their health
        and wellbeing. Whether you're a beginner or a seasoned athlete, we're here to support and
        inspire you on your journey.
      </p>

      <h3>what we offer</h3>

      <ul>
        <li>
          <b>Yoga:</b> Find inner peace and strength through our diverse yoga classes, ranging from
          Vinyasa to Hatha to Yin Yoga. Our experienced teachers will help you deepen your practice
          and find your balance.
        </li>

        <li>
          <b>Fitness:</b> From intense cardio workouts to strength training, we offer a wide range
          of classes and programs to help you reach your fitness goals. Our modern equipment and
          motivating atmosphere will push you to new heights.
        </li>

        <li>
          <b>MMA (Mixed Martial Arts):</b> Lerne Selbstverteidigungstechniken und verbessere deine
          körperliche Fitness durch unsere MMA-Trainingsprogramme. Unsere qualifizierten Trainer
          bringen dir die Grundlagen bei und unterstützen dich dabei, deine Fähigkeiten
          kontinuierlich zu verbessern.
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

section {
  max-width: 70%;
}
ul {
  margin: 2rem 0 2rem 0;
}
li {
  color: black;
  font-weight: 500;
  margin: 1rem;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin: 2rem;
  letter-spacing: 2px;
}

h3 {
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem;
  letter-spacing: 2px;
}

p {
  margin: 1rem;
  color: black;
  font-weight: 900;
  line-height: 25px;
}

@media only screen and (max-width: 768px) {
  section {
    max-width: 90%;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }
}
</style>
