import { Button, Flex, Table, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { QRCodeGenerator } from '../../components';
import { AddProductModal } from '../../features/products/components/modals';
import { IProduct } from '../../features/products/models';
import { useCreateProductMutation, useGetProductsMutation } from '../../features/products/services';
import { useModal } from '../../shared/hooks/useModal';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const [addProduct] = useCreateProductMutation();
  const [fetchProducts] = useGetProductsMutation();

  const [id, setId] = useState<string>('');

  const handleAddProduct = (values: IProduct) => {
    addProduct(values).then(({ data }) => setId(data.id));

    // .then(handleCloseModal)
    // .then(() => handleCreateQrCode(data));

    // console.log(data);
  };

  useEffect(() => {
    fetchProducts({});
  }, []);
  return (
    <Flex vertical style={{ width: '100%' }}>
      <Flex justify="space-between">
        <Title level={2}>Mahsulotlar ruyhati </Title>
        <Button type="primary" onClick={handleOpenModal}>
          Qo'shish
        </Button>
      </Flex>

      <Table
        dataSource={[{ name: 'Abdulloh' }, { name: 'Abdulloh' }]}
        columns={[{ key: 'name', title: 'Nomi' }]}
      />
      {id && (
        <Flex
          style={{ zIndex: 9999, width: '100vh', height: '100vw', background: '#969292' }}
          align="center"
          justify="center"
        >
          <QRCodeGenerator value={`${window.location.host}/cabinet/product-delete/${id}`} />
        </Flex>
      )}
      <AddProductModal
        open={isModalOpen}
        title="Mahsulot qo'shish"
        onSubmit={handleAddProduct}
        onOk={() => {}}
        onCancel={handleCloseModal}
      />
    </Flex>
  );
};
