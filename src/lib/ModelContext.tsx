import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import * as tmImage from "@teachablemachine/image";
import { config } from "@/config/config";

interface ModelContextInterface {
  model1: tmImage.CustomMobileNet | null;
  model2: tmImage.CustomMobileNet | null;
  model3: tmImage.CustomMobileNet | null;
}
interface Props {
  children: ReactNode;
}

const ModelContext = createContext<ModelContextInterface>({
  model1: null,
  model2: null,
  model3: null,
});

export const useModel = () => useContext(ModelContext);

const ModelProvider = ({ children }: Props) => {
  const [model1, setModel1] = useState<tmImage.CustomMobileNet | null>(null);
  const [model2, setModel2] = useState<tmImage.CustomMobileNet | null>(null);
  const [model3, setModel3] = useState<tmImage.CustomMobileNet | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      if (!model1) {
        const loadedModel = await tmImage.load(
          config.model1URL,
          config.metadata1URL
        );
        setModel1(loadedModel);
      }
      if (!model2) {
        const loadedModel = await tmImage.load(
          config.model2URL,
          config.metadata2URL
        );
        setModel2(loadedModel);
      }
      if (!model3) {
        const loadedModel = await tmImage.load(
          config.model3URL,
          config.metadata3URL
        );
        setModel3(loadedModel);
      }
    };
    loadModel();
  }, []);

  return (
    <ModelContext.Provider value={{ model1,model2,model3 }}>{children}</ModelContext.Provider>
  );
};

export default ModelProvider;
