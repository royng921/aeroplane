export const config = {
  model1URL: process.env.NEXT_PUBLIC_MODEL_URL_1 || "",
  metadata1URL: process.env.NEXT_PUBLIC_METADATA_URL_1 || "",
  model2URL: process.env.NEXT_PUBLIC_MODEL_URL_2 || "",
  metadata2URL: process.env.NEXT_PUBLIC_METADATA_URL_2 || "",
  model3URL: process.env.NEXT_PUBLIC_MODEL_URL_3 || "",
  metadata3URL: process.env.NEXT_PUBLIC_METADATA_URL_3 || "",
};

export const classNames = {
  ORGANIC_WASTE: "Organic",
  RECYCLABLE_WASTE: "Recyclable",
};
