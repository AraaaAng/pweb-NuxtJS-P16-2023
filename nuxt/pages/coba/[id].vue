<template>
  <div>
    <Navbar></Navbar>
    <!-- back button -->
    <div style="padding: 32px 16px" class="text-center mr-10">
      <NuxtLink
        class="btn btn-warning"
        style="color: #0058ab"
        :to="{ name: 'index' }"
      >
        Back
      </NuxtLink>
    </div>

    <!-- detail blog -->
    <div class="single-movie container">
      <div
        style="background-color: #fbd914"
        class="movie card w-100 bg-base-100 shadow-xl"
      >
        <div v-if="blogDetails" class="movie-info mt-10">
          <div class="movie-img">
            <img :src="blogDetails.image" alt="Blog Image" />
          </div>
          <div class="movie-content">
            <h1>{{ blogDetails.title }}</h1>
            <p class="movie-fact">
              {{ blogDetails.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  <!-- Movie Info -->
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
      blogDetails: null, // To store the details of a specific blog
    };
  },
  async mounted() {
    // Fetch blog details based on the ID from the route params
    await this.fetchBlogDetails();
  },
  methods: {
    async fetchBlogDetails() {
      const blogId = this.$route.params.id; // Get the blog ID from route params

      try {
        const response = await axios.get(
          `http://localhost:8000/api/blog/${blogId}`
        );
        const blogData = response.data;

        this.blogDetails = {
          title: blogData.Title,
          content: blogData.Content,
          image: blogData.Image,
          price: blogData.Price,
        };
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.single-movie {
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 100px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;

    .movie-img {
      img {
        max-height: 300px;
        width: 100%;
        border-radius: 20px;
        @media (min-width: 700px) {
          max-height: 500px;
          width: initial;
        }
      }
    }

    .movie-content {
      h1 {
        text-align: center;
        font-size: 56px;
        font-weight: 400;
        color: #0058ab;
      }

      .movie-fact {
        text-align: center;
        margin-top: 5px;
        margin-bottom: 30px;
        font-size: 20px;
        line-height: 1.5;
        color: #0058ab;
      }

      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>
