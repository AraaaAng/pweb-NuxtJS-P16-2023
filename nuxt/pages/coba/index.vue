<template>
  <div class="home">
    <navbar></navbar>
    <div>
      <!-- Hero -->
      <div>
        <div class="flex justify-end mr-10">
          <div class="relative mt-10 rounded-md shadow-sm">
            <input
              type="text"
              v-model="searchKeyword"
              placeholder="Search Blogs"
              class="input input-bordered w-full max-w-xs text-blue-700"
            />
          </div>
        </div>
      </div>
      <div class="container movies">
        <div id="movie-grid" class="movies-grid">
          <div v-if="blogs === null">Fetching data on client ...</div>
          <div
            class="movie card w-50 bg-base-100 shadow-xl"
            v-for="blog in filteredBlogs"
            :key="blog.id"
          >
            <div class="card-body" style="background-color: #fbd914">
              <div class="movie-img">
                <img :src="blog.image" alt="Blog Image" />
                <p class="overview">{{ blog.content }}</p>
              </div>

              <div class="info">
                <p class="title">{{ blog.title }}</p>
                <p class="release">{{ blog.price }}</p>
                <a
                  class="btn btn-primary"
                  style="color: #fbd914"
                  :href="'/coba/' + blog.id"
                  >Detail Blog</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

const blogs = ref(null);
const searchKeyword = ref("");

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/Blog");
    const fetchedData = response.data.docs;

    const mappedData = fetchedData.map((blog) => ({
      id: blog.id,
      title: blog.Title,
      content: blog.Content,
      image: blog.Image,
      price: blog.Price, // Jika Price ada dalam data
    }));

    blogs.value = mappedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const filteredBlogs = computed(() => {
  if (!blogs.value) {
    return [];
  }

  return blogs.value.filter((blog) => {
    const titleMatches = blog.title
      .toLowerCase()
      .includes(searchKeyword.value.toLowerCase());
    const contentMatches = blog.content
      .toLowerCase()
      .includes(searchKeyword.value.toLowerCase());

    return titleMatches || contentMatches;
  });
});

// Fungsi untuk mengembalikan nilai blogs agar bisa diakses dari komponen Vue Anda
const getBlogs = () => blogs.value;
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

    .movies-grid {
      display: grid;

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
