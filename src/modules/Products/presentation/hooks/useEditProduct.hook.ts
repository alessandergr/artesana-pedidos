import { Alert } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ProductEntity } from "../../domain/entities/product.entity";
import { updateProductUseCase } from "../../di/product.dependencies";

const DATA_STATES_DEFAULT = {
  isLoading: false,
  isError: false,
  data: null,
};

interface DataStates {
  isLoading: boolean;
  isError: boolean;
  data: ProductEntity | null;
}

export const useEditProduct = () => {
  const router = useRouter();
  const params = useLocalSearchParams() as unknown as ProductEntity;

  const [product, setProduct] = useState({
    id: params.id,
    title: params.title,
    description: params.description,
  });

  const [dataStates, setDataStates] =
    useState<DataStates>(DATA_STATES_DEFAULT);

  const onChangeTitle = (title: string) => {
    setProduct({ ...product, title });
  };

  const onChangeMessage = (description: string) => {
    setProduct({ ...product, description });
  };

  const handleSubmit = async () => {
    setDataStates({ ...DATA_STATES_DEFAULT, isLoading: true });

    try {
      const result = await updateProductUseCase.execute({
        ...product,
        title: product.title.trim(),
        description: product.description.trim(),
      });

      setDataStates({ ...DATA_STATES_DEFAULT, data: result });
      router.push("/products");
    } catch {
      setDataStates({ ...DATA_STATES_DEFAULT, isError: true });

      Alert.alert(
        "Error",
        "No se pudo actualizar el producto."
      );
    }
  };

  return {
    product,
    dataStates,
    handleSubmit,
    onChangeTitle,
    onChangeMessage,
  };
};