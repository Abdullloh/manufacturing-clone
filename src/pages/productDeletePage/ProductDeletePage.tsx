import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteProductMutation } from '../../features/products/services';

export const ProductDeletePage: FC = () => {
  const { id } = useParams();
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    if (id) {
      deleteProduct({ id });
    }
  }, [id, deleteProduct]);
  return <div>ProductDeletePage</div>;
};
