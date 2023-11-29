<template>
  <div>
    <h1>Data from API</h1>
    <ul v-if="posts.length">
      <li v-for="(post, index) in posts" :key="index">
        {{ post.title }}
      </li>
    </ul>
    <p v-else>No posts available</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [], // Pastikan posts diinisialisasi sebagai array kosong
    };
  },
  async asyncData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return {
        posts: response.data.slice(0, 5), // Pastikan respons API sesuai dengan yang Anda harapkan
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        posts: [], // Atur posts sebagai array kosong jika terjadi error
      };
    }
  },
};
</script>
