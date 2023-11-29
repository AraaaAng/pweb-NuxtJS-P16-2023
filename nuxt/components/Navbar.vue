<template>
  <div class="navbar" style="background-color: #0058ab; font-size: 1.2em">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden"
          style="color: #fbd914"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <!-- SVG icon -->
        </div>
        <ul
          style="background-color: #0058ab"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li style="color: #fbd914"><NuxtLink to="/">Home</NuxtLink></li>
          <li style="color: #fbd914"><NuxtLink to="/coba">Blog</NuxtLink></li>
          <li style="color: #fbd914">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </div>

      <NuxtLink
        class="btn btn-ghost text-xl"
        style="color: #fbd914; font-size: 1.5em"
        to="/"
        >IKEA</NuxtLink
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1" style="font-size: 1.2em">
        <li class="font-black" style="color: #fbd914; font-size: 0.8em">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="font-black" style="color: #fbd914; font-size: 0.8em">
          <NuxtLink to="/coba">Blog</NuxtLink>
        </li>
        <li class="font-black" style="color: #fbd914; font-size: 0.8em">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a
        class="font-black btn btn-ghost"
        style="color: #fbd914; font-size: 0.8em"
        >Button</a
      >
    </div>
  </div>
</template>
