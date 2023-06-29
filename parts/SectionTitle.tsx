import React from "react";

interface Props {
  text: string;
}

const SectionTitle: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="my-[40px] mb-6 pt-[100px] md:pt-0 text-2xl font-bold">
      {text}
    </h1>
  );
};
export default SectionTitle;
