import Image from 'next/image';
import React from 'react';

interface Props {
  heading: string;
  paragraph: string;
  imageSrc: string;
}

export const AboutUsView: React.FC<Props> = ({
  heading,
  paragraph,
  imageSrc,
}) => {
  return (
    <section
      id="sobre"
      className="flex w-full items-center justify-center py-16"
    >
      <div className="container flex items-center justify-between">
        <div className="h-auto w-1/2">
          <Image width={600} height={100} src={imageSrc} alt="Cover Image" />
        </div>
        <div className="mb-10 w-1/2 md:mb-0">
          <h1 className="mb-4 font-poppins text-4xl font-bold">{heading}</h1>
          <p className="mb-4 font-dm_sans text-lg font-normal text-gray-700">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};
