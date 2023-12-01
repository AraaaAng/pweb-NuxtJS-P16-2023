<template>
  <div>
    <Navbar></Navbar>
    <div class="about">
      <main class="max-w-screen-xl mx-auto grid gap-0">
        <section
          id="bg-page"
          class="text-center min-h-screen bg-cover bg-center"
          style="
            background-image: url('https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
          "
        >
          <div class="flex justify-center items-center h-full">
            <div class="p-0 shadow-md dark:shadow-xl rounded-md">
              <h2 class="big-title">Meet Our Team</h2>
            </div>
          </div>
        </section>

        <section id="profile" class="text-center grid place-items-center mt-10">
          <div class="grid gap-4" style="display: flex; align-items: center">
            <div style="margin-right: 200px">
              <img
                src="../assets/imgs/ara.jpg"
                alt="John Doe Image"
                class="h-60 w-60 rounded-full"
              />
            </div>
            <div>
              <h2 class="text-4xl font-bold" style="color: #fbd914">
                Mutiara Nurhaliza
              </h2>
              <h3 style="color: #fff2ab; font-size: 28px">5027221010</h3>
              <p class="w-full max-w-lg" style="font-size: 20px">
                "I will do my best to create unique, aesthetic, and comfy
                furnitures for you"
              </p>
            </div>
          </div>
        </section>

        <section id="profile" class="text-center grid place-items-center mt-10">
          <div class="grid gap-4" style="display: flex; align-items: center">
            <div>
              <h2 class="text-4xl font-bold" style="color: #fbd914">
                Bintang Ryan Wardana
              </h2>
              <h3 style="color: #fff2ab; font-size: 28px">5027221022</h3>
              <p class="w-full max-w-lg" style="font-size: 20px">
                "Affordable furnitures ? I could handle that. Trust me, I'm the
                one who design an aesthetic and affordable furnitures for you"
              </p>
            </div>
            <div style="margin-left: 200px">
              <img
                src="../assets/imgs/bintang.jpg"
                alt="John Doe Image"
                class="h-60 w-60 rounded-full"
              />
            </div>
          </div>
        </section>

        <section id="profile" class="text-center grid place-items-center mt-10">
          <div class="grid gap-4" style="display: flex; align-items: center">
            <div style="margin-right: 200px">
              <img
                src="../assets/imgs/krisna.jpg"
                alt="John Doe Image"
                class="h-60 w-60 rounded-full"
              />
            </div>
            <div>
              <h2 class="text-4xl font-bold" style="color: #fbd914">
                Marselinus Krisnawan Riandika
              </h2>
              <h3 style="color: #fff2ab; font-size: 28px">5027221056</h3>
              <p class="w-full max-w-lg" style="font-size: 20px">
                "If you like something abstract and absurd, it's absolutely my
                design. Abstract design for furniture always the best"
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.about {
  text-align: center;
}

.big-title {
  font-size: 100px;
  font-weight: 600;
}

section {
  height: 600px;
  padding: 0;
  margin: 0;
}

#profile {
  height: 400px;
}
</style>
