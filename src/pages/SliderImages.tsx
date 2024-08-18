import { useGetSliderImagesQuery } from "@/redux/features/books/bookApi";
import Loader from "../components/ui/Loader";
import SliderImageCard from "../components/ui/SliderImageCard";

const SliderImages = () => {
  const { data, isLoading } = useGetSliderImagesQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-3xl border-b-4 border-accent mt-12 inline-block">
        Home Page Slider Images
      </h1>
      <SliderImageCard images={data?.data} />
    </div>
  );
};

export default SliderImages;
