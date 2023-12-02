<template>
  <div>
    <Navbar></Navbar>
    <div style="padding: 32px 16px" class="text-center mr-10">
      <NuxtLink
        class="btn btn-warning"
        style="color: #0058ab"
        :to="{ name: 'index' }"
      >
        Back
      </NuxtLink>
    </div>

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

        <div v-else class="error-message " style="text-align: center;color: #0058ab">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-9887654-8019228.png"><br>
          <b>Waduh Error Mazeh.</b>
        </div>
      </div>
    </div>

    <Footer></Footer>
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
      blogDetails: null,
    };
  },
  async mounted() {
    await this.fetchBlogDetails();
  },
  methods: {
    async fetchBlogDetails() {
      try {
        const blogId = this.$route.params.id;
        const response = await axios.get(`http://localhost:8000/api/blog/${blogId}`);
        const blogData = response.data;

        this.blogDetails = {
          title: blogData.Title,
          content: blogData.Content,
          image: blogData.Image,
          price: blogData.Price,
        };
      } catch (error) {
        console.error("Error fetching blog details:", error);
        // Rethrow the error to trigger the errorCaptured hook in parent components
        throw error;
      }
    },
  },
  errorCaptured(err, vm, info) {
    console.error("Error captured in component:", err);
    // Log more information about the error
    console.error("Component:", vm);
    console.error("Error info:", info);
    // Return false to stop the error from propagating further
    return false;
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
