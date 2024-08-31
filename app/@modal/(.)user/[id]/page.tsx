'use client';
import { Form } from '@/shared/components/form';
import { Modal } from '@/shared/components/modal';
import { useUsersStore } from '@/shared/store/users';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function UserModalPage({ params: { id } }: Props) {
  const checked = useUsersStore(state => state.checked);
  console.log('UserModalPage query');

  return (
    <Modal>
      <Form user={checked} />
    </Modal>
  );
}
