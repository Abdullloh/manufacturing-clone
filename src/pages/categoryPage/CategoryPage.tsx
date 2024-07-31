import { Flex, Typography } from 'antd';
import { FC } from 'react';
import { CategoryCreateForm } from '../../features/category/components/forms';
import { useCreateCategoryMutation } from '../../features/category/services/category.service';
const { Title } = Typography;

export const CategoryPage: FC = () => {
  const [addCategory] = useCreateCategoryMutation();

  const handleCreateCategory = (values: any) => {
    addCategory(values);
  };

  return (
    <Flex vertical style={{ width: '100%' }}>
      <Title level={2}>Kategoriya qo'shish</Title>

      <CategoryCreateForm onSubmit={handleCreateCategory} />
    </Flex>
  );
};
