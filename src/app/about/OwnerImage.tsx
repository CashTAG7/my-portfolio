import Image from "next/image";

import ownerImageDark from "../project/assets/profileImage.jpg";

const OwnerImage = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 md:w-1/3">
      <Image
        className="rounded-3xl border-2 border-dark-gray dark:border-light-gray mx-auto md:mx-0 md:mb-8"
        src={ownerImageDark}
        alt="Image of Owner"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default OwnerImage;
