import { Flex, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteProductMutation } from '../../features/products/services';

const { Title } = Typography;

export const ProductDeletePage: FC = () => {
  const { id } = useParams();
  const [deleteProduct] = useDeleteProductMutation();
  const [success, setSucced] = useState(false);
  useEffect(() => {
    if (id) {
      deleteProduct({ id }).then(() => setSucced(true));
    }
  }, [id, deleteProduct]);

  return (
    <Flex justify="center" align="center">
      {success ? (
        <Title style={{ color: 'green' }} level={5}>
          {' '}
          Mahsulot muvaffaqiyatli o'chirildi
        </Title>
      ) : (
        <Title level={5}>Mahsulot o'chirilmoqda</Title>
      )}
    </Flex>
  );
};
