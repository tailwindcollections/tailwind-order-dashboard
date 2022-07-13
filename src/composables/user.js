import { ref } from "vue";

const user = ref(null);

export const useUser = () => {
  return { user };
};
