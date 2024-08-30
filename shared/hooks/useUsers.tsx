import { useEffect, useState } from 'react';

export interface User {
  email: string;
  name: string;
  value: string;
}

interface UserFetch {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [checked, setChecked] = useState<string>('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        let res = await fetch('https://randomuser.me/api/?results=3');
        let data = await res.json();
        if (data && data.results && data.results.length > 0) {
          setUsers(
            data.results.map((user: UserFetch) => ({
              name: `${user.name.title}.${user.name.first} ${user.name.last}`,
              email: user.email,
            })),
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);
  return { users, checked, setChecked };
};
