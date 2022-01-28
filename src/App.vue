<script setup>
import DashboardIcon from "./icons/dashboard.svg";
import DesignIcon from "./icons/design.svg";
import OrderIcon from "./icons/order.svg";
import InventoryIcon from "./icons/inventory.svg";
import TruckIcon from "./icons/truck.svg";
import ContactIcon from "./icons/contact.svg";
import ProfileIcon from "./icons/profile.svg";
import BillingIcon from "./icons/billing.svg";
import HelpIcon from "./icons/help.svg";
import LogoutIcon from "./icons/logout.svg";
import ChevronLeftIcon from "./icons/chevron-left.svg";
import ArrowLeftIcon from "./icons/arrow-left.svg";
import BoxIcon from "./icons/box.svg";
import TShirtIcon from "./icons/t-shirt.svg";
import ChevronRightIcon from "./icons/chevron-right.svg";
import InfoIcon from "./icons/info.svg";
import { computed } from "vue";

const menu = [
  [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Design", icon: DesignIcon },
    { name: "Orders", icon: OrderIcon },
    { name: "Inventory", icon: InventoryIcon },
    { name: "Shipments", icon: TruckIcon },
    { name: "Contacts", icon: ContactIcon },
  ],
  [
    { name: "Profile", icon: ProfileIcon },
    { name: "Billing", icon: BillingIcon },
    { name: "Help", icon: HelpIcon },
    { name: "Logout", icon: LogoutIcon },
  ],
];

const products = [
  {
    name: "Preset Pack",
    imgUrl: "/img/preset-pack.png",
    status: "In-Design",
    color: "Blue",
    category: "Pack",
  },
  {
    name: "Swag Pack",
    imgUrl: "/img/swag-pack.png",
    status: "In-Design",
    color: "Custom",
    category: "Pack",
  },
  {
    name: "Bulk Swag",
    imgUrl: "/img/bulk-swag.png",
    status: "Ready to review",
    color: "Custom",
    category: "Bulk",
  },
];

const orders = [
  { productName: "Swag -- Pack 1/29/2020", price: 75, quantity: 8 },
  { productName: "Tech Pack -- Pack 1/29/2020", price: 26, quantity: 24 },
  { productName: "Bella + Canvas Tee", price: 14, quantity: 32 },
  { productName: "Nike Cap", price: 7.2, quantity: 20 },
  { productName: "Swag -- Pack 1/29/2020", price: 75, quantity: 23 },
  { productName: "Preset Pack -- Pack 1/29/2020", price: 30, quantity: 24 },
  { productName: "Swag Pack + Nike Cap", price: 18, quantity: 3 },
  { productName: "Bulk Swag", price: 30, quantity: 2 },
];

const formatMoney = (value) =>
  new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(
    value
  );

const totalOrder = computed(() =>
  orders.reduce((total, order) => total + order.price * order.quantity, 0)
);
</script>

<template>
  <div class="flex w-full h-screen font-sans text-gray-900 bg-white">
    <aside
      class="flex relative flex-col py-4 px-6 w-52 border-r border-gray-200"
    >
      <button
        class="absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200"
      >
        <ChevronLeftIcon class="w-4 h-4 text-gray-400" />
      </button>
      <a href="#">
        <img src="/img/logo.png" alt="" class="w-24" />
      </a>
      <ul
        v-for="(group, i) in menu"
        class="flex flex-col gap-y-5 pt-12"
        :class="i === 0 ? 'flex-1' : ''"
      >
        <li v-for="item in group">
          <a href="#" class="flex gap-x-3 items-center group">
            <Component
              :is="item.icon"
              class="w-5 h-5 text-gray-400 fill-current group-hover:text-blue-500"
            />
            <span
              class="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold"
            >
              {{ item.name }}
            </span>
          </a>
        </li>
      </ul>
    </aside>

    <main class="overflow-y-scroll flex-1">
      <div class="flex flex-col flex-1 py-4 px-10">
        <button class="flex gap-x-1 items-center text-gray-400">
          <ArrowLeftIcon class="w-4 h-4 fill-current" />
          <span class="inline-block pt-0.5 text-sm leading-6"
            >Back to Order</span
          >
        </button>

        <section class="pt-6">
          <h1 class="text-2xl font-bold text-gray-900">Products</h1>
          <div class="grid grid-cols-3 gap-x-6 py-6">
            <article
              v-for="product in products"
              class="overflow-hidden rounded-2xl border border-gray-100"
            >
              <div
                class="flex justify-center items-center bg-gray-100 aspect-square"
              >
                <img :src="product.imgUrl" alt="" />
              </div>
              <div class="flex flex-col p-6">
                <div class="flex justify-between items-center">
                  <h2 class="font-semibold tracking-wide">
                    {{ product.name }}
                  </h2>
                  <span class="flex gap-x-1 items-center">
                    <BoxIcon
                      v-if="product.category === 'Pack'"
                      class="w-4 h-4 text-gray-400 fill-current"
                    />
                    <TShirtIcon
                      v-else
                      class="w-4 h-4 text-gray-400 fill-current"
                    />
                    <span
                      class="text-sm font-semibold tracking-wide text-gray-800"
                    >
                      {{ product.category }}
                    </span>
                  </span>
                </div>
                <span class="text-sm text-gray-400">
                  Color : <span class="text-gray-600">{{ product.color }}</span>
                </span>
                <a
                  href="#"
                  class="inline-block mt-6 text-sm font-semibold text-center text-blue-500 hover:text-blue-600"
                >
                  View Mockups
                </a>
              </div>
            </article>
          </div>
        </section>

        <section class="py-5">
          <h1 class="text-2xl font-bold text-gray-900">Shipping & Storage</h1>
          <div class="grid grid-cols-2 gap-x-6 pt-6">
            <div
              class="overflow-hidden relative p-6 rounded-2xl border border-gray-100"
            >
              <div
                class="flex justify-between items-center pb-4 border-b border-gray-100"
              >
                <h3 class="font-semibold">Ship Swag to Recipients</h3>
                <a
                  href="#"
                  class="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                >
                  <span>View Shipments</span>
                  <ChevronRightIcon class="w-4 h-4 fill-current" />
                </a>
              </div>
              <div class="grid grid-cols-2 gap-x-4 pt-4">
                <div>
                  <div class="text-sm text-gray-600">Shipments Created</div>
                  <div class="pt-2 text-lg font-semibold">2</div>
                </div>
                <div>
                  <div class="text-sm text-gray-600">Total Shipment</div>
                  <div class="pt-2 text-lg font-semibold">$30.00</div>
                </div>
              </div>
              <button
                class="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-blue-500 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500"
              >
                Create Shipment
              </button>
              <img
                src="/img/shipment.png"
                alt=""
                class="absolute right-0 bottom-0 w-28"
              />
            </div>
            <div
              class="overflow-hidden relative p-6 rounded-2xl border border-gray-100"
            >
              <div
                class="flex justify-between items-center pb-4 border-b border-gray-100"
              >
                <h3 class="font-semibold">Send Swag to Storage</h3>
                <a
                  href="#"
                  class="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                >
                  <span>View SwagUp Storage</span>
                  <ChevronRightIcon class="w-4 h-4 fill-current" />
                </a>
              </div>
              <div class="grid grid-cols-2 gap-x-4 pt-4">
                <div>
                  <div class="text-sm text-gray-600">Sending to Storage</div>
                  <div class="pt-2 text-lg font-semibold">300</div>
                </div>
                <div>
                  <div class="text-sm text-gray-600">Total Storage</div>
                  <div class="pt-2 text-lg font-semibold">$1,400.00</div>
                </div>
              </div>
              <button
                class="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-blue-500 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500"
              >
                Create Shipment
              </button>
              <img
                src="/img/storage.png"
                alt=""
                class="absolute right-0 bottom-0 w-28"
              />
            </div>
          </div>
        </section>
      </div>
    </main>

    <aside class="flex flex-col w-72 border-l border-gray-200">
      <div class="py-4 px-6 border-b border-gray-200">
        <div class="font-semibold leading-relaxed text-gray-800">
          Order #22353 Summary
        </div>
        <div class="text-xs leading-loose text-gray-400">
          Order Placed: 12-30-2020
        </div>
      </div>
      <ul class="overflow-y-scroll flex-1 px-6">
        <li
          v-for="order in orders"
          class="py-2 border-b border-gray-200 last:border-none"
        >
          <div class="mt-2 text-sm font-semibold text-gray-800">
            {{ order.productName }}
          </div>
          <div
            class="flex justify-between items-center mt-1 text-xs text-gray-400"
          >
            <span> {{ formatMoney(order.price) }} x {{ order.quantity }} </span>
            <span class="font-bold text-gray-800">
              {{ formatMoney(order.price * order.quantity) }}
            </span>
          </div>
          <a
            href="#"
            class="inline-block mt-3 text-xs font-semibold leading-relaxed text-blue-500 hover:text-blue-600"
          >
            Edit breakdown
          </a>
        </li>
      </ul>
      <div class="px-6 pb-4 border-t border-gray-200">
        <div class="py-2">
          <div class="flex justify-between items-center py-1">
            <div class="text-xs text-gray-400">Subtotal</div>
            <span class="font-semibold"> {{ formatMoney(totalOrder) }} </span>
          </div>
          <div class="flex justify-between items-center py-1">
            <span class="flex gap-x-1 items-center">
              <div class="text-xs text-gray-400">Shipping</div>
              <InfoIcon class="w-4 h-4 text-gray-300 stroke-current" />
            </span>
            <span class="text-sm text-gray-300"> TBD </span>
          </div>
          <div class="flex justify-between items-center py-1">
            <span class="flex gap-x-1 items-center">
              <div class="text-xs text-gray-400">Warehouse</div>
              <InfoIcon class="w-4 h-4 text-gray-300 stroke-current" />
            </span>
            <span class="text-sm text-gray-300"> TBD </span>
          </div>
        </div>
        <div
          class="flex justify-between items-center py-4 border-t border-gray-200"
        >
          <div class="text-sm text-gray-400">Total</div>
          <div class="text-lg font-semibold">{{ formatMoney(totalOrder) }}</div>
        </div>
        <button
          class="flex justify-center items-center py-4 w-full text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
    </aside>
  </div>
</template>
