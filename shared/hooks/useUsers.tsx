import { useEffect } from 'react';
import { useUsersStore } from '../store/users';

export const useUsers = () => {
  const usersState = useUsersStore(state => state);

  useEffect(() => {
    usersState.fetchUsers();
  }, []);

  return usersState;
};
