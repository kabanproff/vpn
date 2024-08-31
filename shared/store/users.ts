import { create } from 'zustand';

interface State {
  users: User[];
  setUsers: (users: User[]) => void;
  loading: boolean;
  fetchUsers: () => void;
  checked: User;
  setChecked: (value: User) => void;
}

export interface User {
  email: string;
  name: string;
}

export interface UserFetch {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}

export const useUsersStore = create<State>()(set => ({
  users: [],
  loading: true,
  setUsers: users => set({ users }),
  checked: { name: '', email: '' },
  fetchUsers: async () => {
    try {
      set({ loading: true });
      let res = await fetch('https://randomuser.me/api/?results=3');
      let data = await res.json();
      set({
        users: data.results.map((user: UserFetch) => ({
          name: `${user.name.title}.${user.name.first} ${user.name.last}`,
          email: user.email,
        })),
      });
      console.log('data', data);
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
  setChecked: checked => set({ checked }),
}));
