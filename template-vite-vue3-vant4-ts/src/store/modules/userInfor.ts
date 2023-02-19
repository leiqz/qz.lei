import { defineStore } from 'pinia';
import { store } from '@/store';

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCounter(): number {
      return this.counter * 2;
    }
  },
  actions: {
    async registerUser() {
      //.....
      // await axios.post('....', { params }).then(() => {})
    }
  }
});

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
