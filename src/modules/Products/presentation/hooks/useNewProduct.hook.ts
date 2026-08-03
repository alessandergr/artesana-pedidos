import { Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ProductEntity } from "../../domain/entities/product.entity";
import { createProductUseCase } from "../../di/product.dependencies";

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

export const useNewProduct = () => {
  const router = useRouter();

  const [product, setProduct] = useState({
    title: "",
    description: "",
  });

  const [dataStates, setDataStates] =
    useState<DataStates>(DATA_STATES_DEFAULT);

  const onChangeTitle = (title: string) => {
    setProduct({ ...product, title });
  };

  const onChangeDescription = (description: string) => {
    setProduct({ ...product, description });
  };

  const handleSubmit = async () => {
    setDataStates({ ...DATA_STATES_DEFAULT, isLoading: true });

    try {
      const result = await createProductUseCase.execute({
        title: product.title.trim(),
        description: product.description.trim(),
      });

      setDataStates({ ...DATA_STATES_DEFAULT, data: result });
      router.push("/products");
    } catch {
      setDataStates({ ...DATA_STATES_DEFAULT, isError: true });

      Alert.alert(
        "Error",
        "No se pudo guardar el producto."
      );
    }
  };

  return {
    product,
    dataStates,
    handleSubmit,
    onChangeTitle,
    onChangeDescription,
  };
};