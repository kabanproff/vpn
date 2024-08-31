import { Form } from '@/shared/components/form';
import { Modal } from '@/shared/components/modal';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default async function UserPage({ params: { id } }: Props) {
  return <Modal>this page UserPage</Modal>;
}
