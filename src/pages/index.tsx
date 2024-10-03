import ImageUploader from "@/components/ImageUploader";
import Head from "@/components/Head";
import FootballManager from "@/components/UI/FootballManager";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <ImageUploader />
        <FootballManager />
      </main>
    </>
  );
}
