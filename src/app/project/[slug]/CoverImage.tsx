import Image from "next/image";

import cover1 from "../assets/projectAssets/menu.png";
import cover2 from "../assets/image1.jpg";
import cover3 from "../assets/image2.jpg";
import cover4 from "../assets/image3.jpg";

type idPropsType = {
  id: string | number;
};

export default async function CoverImage({ id }: idPropsType) {
  const handleImage = () => {
    if (id == 1) {
      return cover1;
    } else if (id == 2) {
      return cover2;
    } else if (id == 3) {
      return cover3;
    } else {
      return cover4;
    }
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
      <Image
        className="mx-auto mt-4 mb-2 rounded-2xl border-2 border-dark-gray dark:border-lighter-gray"
        src={handleImage()}
        alt="Cover Image"
        height={1500}
        width={1500}
      />
    </div>
  );
}
