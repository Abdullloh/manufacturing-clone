import { Flex, ModalProps, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { ModalBase } from '../../../../shared/components/modal';
import { useGetValumeTypeItemMutation } from '../../services';
import { AddDimensionForm } from '../forms';

interface IAddDimensionModal extends ModalProps {
  onSubmit: (values: any) => void;
  id: string;
}
export const AddDimensionModal: FC<IAddDimensionModal> = ({ onSubmit, id, ...props }) => {
  const [getValumeType, { isLoading }] = useGetValumeTypeItemMutation();
  const [values, setValues] = useState<any>();

  useEffect(() => {
    if (id) {
      getValumeType({ id }).then((res) => setValues(res.data));
    }
  }, [id, getValumeType]);

  return (
    <ModalBase {...props} footer={null}>
      {isLoading ? (
        <Flex align="center" justify="center">
          <Spin />
        </Flex>
      ) : (
        <AddDimensionForm defaultValues={values} onSubmit={onSubmit} />
      )}
    </ModalBase>
  );
};
