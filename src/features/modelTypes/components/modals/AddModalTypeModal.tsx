import { Flex, ModalProps, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { useGetModelTypeItemMutation } from '../../services';
import { AddModelTypeForm } from '../forms';

interface IAddModalTypeModal extends ModalProps {
  onSubmit: (values: any) => void;
  id: string;
}

export const AddModalTypeModal: FC<IAddModalTypeModal> = ({ onSubmit, id, ...props }) => {
  const [values, setValues] = useState<any>();
  const [getModelType, { isLoading }] = useGetModelTypeItemMutation();

  useEffect(() => {
    if (id) {
      getModelType({ id }).then((res) => setValues(res.data));
    }
  }, [id, getModelType]);

  return (
    <ModalBase {...props} footer={null}>
      {isLoading ? (
        <Flex align="center" justify="center">
          <Spin />
        </Flex>
      ) : (
        <AddModelTypeForm defaultValues={values} onSubmit={onSubmit} />
      )}
    </ModalBase>
  );
};
