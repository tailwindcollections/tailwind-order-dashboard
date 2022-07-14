<script setup>
  import { reactive } from "vue";
  import { useAxios } from "../composables/axios";
  import { useUser } from "../composables/user";
  const { axios } = useAxios();
  const { user } = useUser();

  const loginForm = reactive({
    email: "johndoe@example.com",
    password: "password",
    remember: false,
  });

  function login() {
    axios.get(`/sanctum/csrf-cookie`).then(() => {
      axios.post(`api/login`, loginForm).then(({ data, status }) => {
        if (status === 200) {
          user.value = data.user;
        }
      });
    });
  }
</script>

<template>
  <div class="flex justify-between min-h-screen font-sans">
    <div class="hidden relative w-1/2 bg-center bg-cover lg:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1657575097460-10451a12ecd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
      <div
        class="bg-white/50 backdrop-blur-sm absolute inset-0 w-full h-full"
      ></div>
      <div class="flex absolute bottom-20 justify-center w-full">
        <div class="max-w-md text-center">
          <span class="text-3xl font-bold leading-loose text-gray-900">
            Control Bussiness
          </span>
          <p class="font-light leading-7 text-gray-500">
            Dotra is the most comprehensive field service &amp; asset managament
            platform with combining flexibility.
          </p>
          <div class="flex justify-center items-center pt-8 space-x-6">
            <button
              class="rounded-full focus:ring focus:ring-orange-500 focus:outline-none"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M18 11.5 13 16l5 4.5"
                  stroke="#F4694C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg></button
            ><button
              class="rounded-full focus:ring focus:ring-orange-500 focus:outline-none"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="m14.5 11.5 5 4.5-5 4.5"
                  stroke="#F4694C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 mx-auto max-w-2xl">
      <div class="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
        <svg
          viewBox="0 0 132 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="self-center w-32 md:self-end"
        >
          <path
            d="M42.324 7.4h8.904c2.128 0 4.004.41 5.628 1.232 1.643.803 2.912 1.941 3.808 3.416.915 1.475 1.372 3.192 1.372 5.152s-.457 3.677-1.372 5.152c-.896 1.475-2.165 2.623-3.808 3.444-1.624.803-3.5 1.204-5.628 1.204h-8.904V7.4Zm8.68 15.876c1.96 0 3.519-.541 4.676-1.624 1.176-1.101 1.764-2.585 1.764-4.452s-.588-3.341-1.764-4.424c-1.157-1.101-2.716-1.652-4.676-1.652H46.86v12.152h4.144Zm21.313 3.948c-1.587 0-3.015-.327-4.284-.98-1.25-.672-2.23-1.596-2.94-2.772-.71-1.176-1.064-2.51-1.064-4.004 0-1.493.355-2.828 1.064-4.004.71-1.176 1.69-2.09 2.94-2.744 1.27-.672 2.697-1.008 4.284-1.008 1.587 0 3.005.336 4.256 1.008 1.25.653 2.23 1.568 2.94 2.744.71 1.176 1.064 2.51 1.064 4.004 0 1.493-.355 2.828-1.064 4.004-.71 1.176-1.69 2.1-2.94 2.772-1.25.653-2.67.98-4.256.98Zm0-3.584c1.12 0 2.035-.373 2.744-1.12.728-.765 1.092-1.783 1.092-3.052 0-1.27-.364-2.277-1.092-3.024-.71-.765-1.624-1.148-2.744-1.148s-2.044.383-2.772 1.148c-.728.747-1.092 1.755-1.092 3.024 0 1.27.364 2.287 1.092 3.052.728.747 1.652 1.12 2.772 1.12Zm20.252 2.632c-.43.317-.962.56-1.597.728-.615.15-1.26.224-1.931.224-1.811 0-3.202-.457-4.172-1.372-.971-.915-1.457-2.259-1.457-4.032V8.604h4.368v3.668h3.724v3.36H87.78v6.132c0 .635.16 1.13.477 1.484.317.336.774.504 1.371.504.672 0 1.27-.187 1.793-.56l1.147 3.08Zm6.638-12.348c.523-.728 1.223-1.279 2.101-1.652.896-.373 1.922-.56 3.08-.56v4.032a15.819 15.819 0 0 0-.98-.056c-1.251 0-2.231.355-2.94 1.064-.71.69-1.065 1.736-1.065 3.136V27h-4.368V11.936h4.172v1.988Zm22.929-1.988V27h-4.172v-1.736c-1.083 1.307-2.651 1.96-4.704 1.96-1.419 0-2.707-.317-3.864-.952-1.139-.635-2.035-1.54-2.688-2.716-.653-1.176-.98-2.539-.98-4.088 0-1.55.327-2.912.98-4.088.653-1.176 1.549-2.081 2.688-2.716 1.157-.635 2.445-.952 3.864-.952 1.923 0 3.425.607 4.508 1.82v-1.596h4.368Zm-8.12 11.704c1.101 0 2.016-.373 2.744-1.12.728-.765 1.092-1.783 1.092-3.052 0-1.27-.364-2.277-1.092-3.024-.728-.765-1.643-1.148-2.744-1.148-1.12 0-2.044.383-2.772 1.148-.728.747-1.092 1.755-1.092 3.024 0 1.27.364 2.287 1.092 3.052.728.747 1.652 1.12 2.772 1.12Z"
            fill="#303030"
          ></path>
          <path
            d="M127.832 27.224c-.765 0-1.409-.261-1.932-.784-.523-.523-.784-1.176-.784-1.96 0-.803.261-1.447.784-1.932.523-.504 1.167-.756 1.932-.756.765 0 1.409.252 1.932.756.523.485.784 1.13.784 1.932 0 .784-.261 1.437-.784 1.96-.523.523-1.167.784-1.932.784Z"
            fill="#F4694C"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.969 30.554c.606.408 1.4.266 1.966-.196A9.56 9.56 0 0 1 16 28.2c2.3 0 4.412.809 6.065 2.158.566.462 1.36.604 1.966.196A14.386 14.386 0 0 0 30.4 18.6c0-7.953-6.447-14.4-14.4-14.4S1.6 10.647 1.6 18.6c0 4.98 2.527 9.368 6.369 11.954ZM21.543 13.8c2.463 4.267-.616 9.6-5.543 9.6-4.927 0-8.006-5.333-5.543-9.6L16 4.2l5.543 9.6Z"
            fill="#40B2B7"
          ></path>
        </svg>
        <div class="pt-20 pb-6">
          <h1
            class="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap"
          >
            Hi, Welcome back!
          </h1>
          <span class="font-light text-gray-500">
            Login now to manage your job made easy.
          </span>
          <div
            class="flex flex-wrap gap-y-4 gap-x-6 justify-between items-center pt-10 whitespace-nowrap"
          >
            <button
              class="flex items-center justify-center flex-1 py-4 px-3 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <path
                  d="M22.305 10.041H21.5V10h-9v4h5.651A5.998 5.998 0 0 1 6.5 12a6 6 0 0 1 6-6c1.53 0 2.921.577 3.98 1.52L19.31 4.69A9.954 9.954 0 0 0 12.5 2c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959Z"
                  fill="#FFC107"
                ></path>
                <path
                  d="m3.653 7.346 3.286 2.409A5.997 5.997 0 0 1 12.5 6c1.53 0 2.921.577 3.98 1.52L19.31 4.69A9.954 9.954 0 0 0 12.5 2a9.994 9.994 0 0 0-8.847 5.346Z"
                  fill="#FF3D00"
                ></path>
                <path
                  d="M12.5 22c2.583 0 4.93-.988 6.704-2.596l-3.095-2.619A5.955 5.955 0 0 1 12.5 18a5.997 5.997 0 0 1-5.641-3.973L3.598 16.54C5.253 19.777 8.614 22 12.5 22Z"
                  fill="#4CAF50"
                ></path>
                <path
                  d="M22.305 10.041H21.5V10h-9v4h5.651a6.02 6.02 0 0 1-2.043 2.785h.002l3.095 2.619C18.985 19.602 22.5 17 22.5 12c0-.67-.069-1.325-.195-1.959Z"
                  fill="#1976D2"
                ></path></svg
              ><span class="pl-3 font-medium text-gray-900"
                >Sign in with Google</span
              ></button
            ><button
              class="flex items-center justify-center flex-1 py-4 px-3 rounded-lg bg-blue-500 whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
              >
                <path
                  d="M12.501 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988c4.781-.749 8.437-4.886 8.437-9.877 0-5.522-4.477-9.999-9.999-9.999Z"
                  fill="#fff"
                ></path></svg
              ><span class="pl-3 font-medium text-white"
                >Sign in with Facebook</span
              >
            </button>
          </div>
          <div class="flex justify-between items-center pt-6">
            <hr class="w-full border-gray-400" />
            <span class="px-4 font-light tracking-wider text-gray-500">or</span>
            <hr class="w-full border-gray-400" />
          </div>
          <form @submit.prevent="login">
            <div class="pt-6">
              <label for="email" class="font-light">Email address</label>
              <div
                class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500"
              >
                <div class="flex justify-center items-center pl-6">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 pointer-events-none"
                  >
                    <path
                      d="M3 5.25h18V18a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 18V5.25Z"
                      stroke="#7E7E7E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="m21 5.25-9 8.25-9-8.25"
                      stroke="#7E7E7E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <input
                  v-model="loginForm.email"
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  id="email"
                  class="px-4 py-4 w-full focus:outline-none font-light border-0 focus:ring-0"
                />
              </div>
            </div>
            <div class="pt-6">
              <label for="password" class="font-light">Password</label>
              <div
                class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500"
              >
                <div class="flex justify-center items-center pl-6">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 pointer-events-none"
                  >
                    <path
                      d="M19.5 8.25h-15a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75ZM8.625 8.25V4.875a3.375 3.375 0 0 1 6.75 0V8.25"
                      stroke="#7E7E7E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 15.375a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                      fill="#7E7E7E"
                    ></path>
                  </svg>
                </div>
                <input
                  v-model="loginForm.password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  class="px-4 py-4 w-full focus:outline-none font-light border-0 focus:ring-0"
                />
              </div>
            </div>
            <div class="flex justify-between items-center pt-4">
              <div class="flex items-center">
                <input
                  v-model="loginForm.remember"
                  type="checkbox"
                  name="remember"
                  id="remember"
                  class="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500"
                /><label for="remember" class="pl-4 font-light text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" class="text-teal-500 hover:text-teal-600">
                Forgot password</a
              >
            </div>
            <div class="pt-8">
              <button
                type="submit"
                class="py-4 px-8 w-full text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
          <div class="pt-4">
            <div class="font-light text-center text-gray-500">
              Not registered yet?
              <a href="#" class="font-normal text-teal-500 hover:text-teal-600">
                Create an Account
              </a>
            </div>
            <div
              class="flex flex-wrap gap-y-2 justify-between items-center pt-14 text-center whitespace-nowrap"
            >
              <span class="flex-1 text-gray-500"
                >© 2021 Dotra. All rights reserved.</span
              ><span class="flex flex-1 justify-center items-center space-x-1"
                ><a href="#" class="text-gray-500 hover:text-gray-600"
                  >Terms of Service</a
                ><span class="text-gray-500">·</span
                ><a href="#" class="text-gray-500 hover:text-gray-600"
                  >Privacy Policy</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
