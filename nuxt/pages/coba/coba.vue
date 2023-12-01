<template>
  <div>
    <input type="text" v-model="searchKeyword" placeholder="Search Blogs" />

    <div v-if="blogs === null">Fetching data on client ...</div>

    <div v-for="blog in filteredBlogs" :key="blog.id">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
      <img :src="blog.image" alt="Blog Image" />
      <p v-if="blog.price">Price: {{ blog.price }}</p>
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
