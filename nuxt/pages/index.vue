<template>
  <div>
    <Navbar></Navbar>
    <Hero />
    <div class="home">
      <main
        class="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden"
      >
        <img src="../assets/imgs/lamp.png" alt="Lamp" class="mx-auto" />

        <section aria-labelledby="qualities" class="mt-10 relative">
          <img
            src="../assets/imgs/dots.svg"
            class="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7"
            alt="dots"
            aria-hidden="true"
          />
          <img
            src="../assets/imgs/dots.svg"
            class="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7"
            alt="dots"
            aria-hidden="true"
          />
          <div class="container mx-auto grid grid-rows-1 place-items-end px-2">
            <img
              src="../assets/imgs/couch.png"
              class="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto"
              alt="Couch"
            />
          </div>
        </section>
        <section
          aria-labelledby="partners"
          class="text-center grid gap-8 place-items-center mt-10"
        >
          <div class="grid gap-4">
            <h2 id="partners" class="text-4xl font-bold" style="color: #fbd914">
              Our Product
            </h2>

            <p class="w-full max-w-lg">
              We’ve partnered with hundreds of smart home brands to help you
              create a smart home that fits your needs and doesn’t lock you in.
            </p>
          </div>
          <div
            class="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto"
          >
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner1.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner2.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner3.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner4.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner5.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner6.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 shadow-md dark:shadow-xl rounded-md">
              <img
                src="../assets/imgs/partner7.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
          </div>
        </section>
        <div>
          <div>
            <div class="text-right mr-10">
              <NuxtLink
                class="btn btn-ghost text-lg"
                style="color: #fbd914"
                :to="`/coba`"
              >
                Click For More
              </NuxtLink>
            </div>
          </div>

          <div class="container movies">
            <div id="movie-grid" class="movies-grid">
              <div
                class="movie card w-96 bg-base-100 shadow-xl"
                v-for="(post, index) in blogData"
                :key="index"
              >
                <!-- Blog Post Content -->
                <div class="card-body" style="background-color: #fbd914">
                  <div class="movie-img">
                    <img :src="post.image" alt="Blog Image" />
                    <p class="overview">
                      {{ post.content }}
                    </p>
                  </div>

                  <div class="info">
                    <p class="title">{{ post.title }}</p>
                    <p class="release">{{ post.price }}</p>

                    <NuxtLink
                      class="btn btn-primary"
                      style="color: #fbd914"
                      :to="`/coba/${post.id}`"
                    >
                      Detail Blog
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="home" class="relative">
          <div class="flex flex-wrap-reverse gap-8 justify-center">
            <div
              class="flex gap-6 flex-wrap flex-col items-start lg:justify-center"
            >
              <div class="flex flex-wrap flex-col items-start gap-2">
                <h2 class="text-4xl font-bold">Relax, you’re home!</h2>
                <p class="max-w-md">
                  All our supported hardware includes traditional inputs so you
                  can integrate our products into your house in a way that’s
                  best for everyone.
                </p>
              </div>
            </div>
            <img src="../assets/imgs/table.png" alt="Table" />
          </div>
        </section>
        <section
          aria-labelledby="contact"
          class="container mx-auto px-8 overflow-hidden"
        >
          <div class="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
            <form
              class="relative border-8 border-amber-400 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-amber-400 w-full"
            >
              <h2
                id="contact"
                style="color: #0058ab"
                class="text-3xl font-bold"
              >
                Let’s Connect
              </h2>
              <div class="relative">
                <input
                  type="text"
                  id="name"
                  class="peer form-input w-full border-4 border-blue-700 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-blue-700 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
                  placeholder="Your Name"
                />
                <label
                  for="name"
                  class="text-blue-700 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-blue-700 dark:peer-focus:text-blue-700"
                >
                  Your Name
                </label>
              </div>
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  class="peer form-input w-full border-4 border-blue-700 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-blue-700 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
                  placeholder="Your Email"
                />
                <label
                  for="email"
                  class="text-blue-700 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-blue-700 dark:peer-focus:text-blue-700"
                >
                  Your Email
                </label>
              </div>
              <div class="relative">
                <textarea
                  name="content"
                  id="content"
                  cols="20"
                  rows="5"
                  class="peer form-textarea resize-none w-full border-4 border-blue-700 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-blue-700 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-blue-700 placeholder-transparent"
                  placeholder="How can we help?"
                ></textarea>
                <label
                  for="content"
                  class="text-blue-700 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-blue-700 dark:peer-focus:text-blue-700"
                >
                  How can we help?
                </label>
              </div>
              <a
                role="menuitem"
                class="py-2 px-6 bg-blue-700 text-amber-400 w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-blue-700 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400"
                href="/"
              >
                Sign Up
              </a>
            </form>
          </div>
        </section>
      </main>
    </div>
    <!-- Product Showcase Section -->

    <!-- Click for More Button (Moved to top right) -->
    <Footer></Footer>
    <!-- Footer -->
    <!-- Let's assume we've created a separate Footer component -->
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      blogData: [], // Array to store multiple blog posts
      searchQuery: "", // To store the search query
      originalData: [], // To store original blog data for resetting search
    };
  },
  mounted() {
    this.fetchBlogData(); // Fetch initial blog data
  },
  methods: {
    // Fetch blog data from API
    fetchBlogData() {
      axios
        .get("http://localhost:8000/api/blog")
        .then((response) => {
          const fetchedPosts = response.data.docs;
          this.blogData = fetchedPosts.map((blog) => ({
            id: blog.id,
            title: blog.Title,
            content: blog.Content,
            image: blog.Image,
            price: blog.Price,
          }));
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    },
    // Perform search based on blog title
  },
};
</script>

<style lang="scss" scoped>
.home {
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }

  .search {
    display: flex;
    padding: 32px 16px;

    input {
      max-width: 350px;
      width: 100%;
      padding: 12px 6px;
      font-size: 14px;
      border: none;

      &:focus {
        outline: none;
      }
    }

    .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .movies {
    padding: 32px 16px;
    overflow-x: auto;

    white-space: nowrap;
    .movies-grid {
      display: flex;
      flex-wrap: nowrap;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }

      .movie {
        /* Ubah nilai sesuai keinginan Anda */
        flex: 0 0 auto; /* Pastikan agar tidak merubah ukuran flex secara otomatis */
        width: 300px; /* Atur lebar elemen .movie agar tidak melebihi kontainer */

        /* Ubah nilai sesuai keinginan Anda */
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;

        .movie-img {
          position: relative;
          overflow: hidden;

          &:hover {
            .overview {
              transform: translateY(0);
            }
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
          }

          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #0058ab;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: #0058ab;
            padding: 12px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }
        }

        .info {
          margin-top: auto;
          .title {
            color: #0058ab;
            font-size: 20px;
          }

          .release {
            margin-bottom: 8px;
            color: #0058ab;
          }
        }
      }
    }
  }
}
</style>
