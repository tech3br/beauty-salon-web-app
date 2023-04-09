import Image from 'next/image';
import React from 'react';

interface Props {
  heading: string;
  paragraph: string;
  buttonText: string;
  imageSrc: string;
}

export const MainCoverView: React.FC<Props> = ({
  heading,
  paragraph,
  buttonText,
  imageSrc,
}) => {
  return (
    <section className="flex h-[600px] items-center justify-center bg-red-100">
      <div className="container flex items-center justify-between">
        <div className="mb-10 md:mb-0 md:w-1/2 lg:w-2/5">
          <h1 className="mb-4 font-poppins text-4xl font-bold">{heading}</h1>
          <p className="mb-4 font-dm_sans text-lg font-normal text-gray-700">
            {paragraph}
          </p>
          <button
            type="button"
            className="h-auto w-[214px] rounded-md bg-[#ff3366] p-4 text-center text-[#F9F9F9]"
          >
            {buttonText}
          </button>
        </div>
        <div className="h-auto">
          <Image width={600} height={100} src={imageSrc} alt="Cover Image" />
        </div>
      </div>
    </section>
  );
};
