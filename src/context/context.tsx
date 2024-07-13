import { useState, createContext, FunctionComponent, ReactNode } from "react";
import { ProductInterface } from "../interfaces/interface";

interface ContextType {
  products: ProductInterface[];
  setProducts: (value: ProductInterface[]) => void;
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}

export const FormContext = createContext<ContextType>({
  products: [],
  setProducts: () => {},
  isShow: false,
  setIsShow: () => {},
});
interface FormProviderProps {
  children: ReactNode;
}

const FormProvider: FunctionComponent<FormProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductInterface[]>([
    {
      title: "کولر آبی",
      description: "در حد نو بسیار عالی دینام تازه تعویض شده",
      price: 7000,
      image: "../public/pics/michael-hacker-OM5Zy3_7pGU-unsplash.jpg",
    },
    {
      title: "پنکه برقی",
      description: "پنکه برقی امین سایز بسیار بزرگ",
      price: 2000,
      image: "../public/pics/motoki-tonn-vV1a1Leq-dQ-unsplash.jpg",
    },
    {
      title: "ماشین اسپرسو",
      description: "ماشین اسپرسو با دوام برند دلونگی",
      price: 2000,
      image: "../public/pics/pexels-anand-dandekar-1532771.jpg",
    },
    {
      title: "ماشین ظرفشویی",
      description: "ماشین ظرفشویی در حد نو",
      price: 2000,
      image: "../public/pics/pexels-bri-schneiter-346529.jpg",
    },
  ]);

  const [isShow, setIsShow] = useState<boolean>(false);

  const handleProductUpdate = (newProduct: ProductInterface[]) => {
    setProducts(newProduct); // Update state with new product
  };

  return (
    <FormContext.Provider
      value={{
        products,
        isShow,
        setIsShow,
        setProducts: handleProductUpdate,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
