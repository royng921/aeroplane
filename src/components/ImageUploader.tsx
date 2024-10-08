import { useState } from "react";
import ImageUploadInput from "./UI/ImageUploadInput";
import ImageList from "./UI/ImageList";
import { ClassPrediction, UploadedImage } from "@/types/types";
import { useModel } from "@/lib/ModelContext";
import * as tmImage from "@teachablemachine/image";

export default function ImageUploader() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [imageUploaded, setImageUploaded] = useState(false);
  const { model1, model2, model3 } = useModel();

  const predictImage = async (image: UploadedImage, model:tmImage.CustomMobileNet| null) => {
    if (!model) return;
    const img = document.createElement("img");
    img.src = image?.url;
    await img.decode();

    const predictions = await model.predict(img);

    const maxFloatValue = Math.max(
      ...predictions.map((obj) => obj.probability)
    );

    const predictionData: ClassPrediction[] = predictions.map((p) => ({
      className: p.className,
      probability: p.probability === maxFloatValue ? p.probability : 0,
    }));
    const updatedImage = { ...image, predictions: predictionData };
    setImages((prevImages) => [updatedImage, ...prevImages]);
    setImageUploaded(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImageUploaded(true);
      const fileArray: File[] = Array.from(files);
      const readerArray: FileReader[] = [];

      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageArray = {
            name: file.name,
            url: reader.result as string,
            predictions: [],
          };
          predictImage(imageArray,model1);
          predictImage(imageArray,model2);
          predictImage(imageArray,model3);
        };
        reader.readAsDataURL(file);
        readerArray.push(reader);
      });
    }
  };

  return (
    <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <h1 className="text-white font-semibold my-6 text-[1.8rem] lg:w-[70vw] max-w-[1250px] mx-auto leading-tight lg:leading-snug md:text-4xl lg:text-5xl md:my-8 lg:mt-14 lg:mb-10 text-center">
        完美姿勢小夥伴(昇華版)
      </h1>
      <div>
        {!(model1&&model2&&model3) ? (
          <div className="text-center mx-auto flex justify-center items-center">
            <button
              type="button"
              className="bg-white processing-btn text-lg font-bold text-primary px-7 py-3 rounded-full flex items-center justify-center disabled"
            >
              <svg
                className="animate-spin processing-svg h-5 w-5 mr-3 border-b-2 border-primary rounded-full"
                viewBox="0 0 24 24"
              ></svg>
              上載中...
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mb-12 my-10 lg:my-16 fade-in">
            <ImageUploadInput handleImageUpload={handleImageChange} />
            <p className="text-xs text-gray-500 mt-4 text-center w-[250px] max-w-fit">
              請上載射門姿勢的相片。
            </p>
          </div>
        )}
        <div
          className={`flex justify-center items-center ${
            imageUploaded && "my-14"
          }`}
        >
          {imageUploaded && <div className="borders" />}
        </div>
        <ImageList images={images} />
      </div>
    </div>
  );
}
