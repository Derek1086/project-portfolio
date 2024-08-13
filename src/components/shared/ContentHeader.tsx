import React from "react";

interface ContentHeaderProps {
  primary: string;
  secondary: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  primary,
  secondary,
}) => {
  return (
    <div>
      <h3 className="mt-10 text-xl font-bold text-gray-300">{primary}</h3>
      <h2 className="mt-2 text-3xl font-bold">{secondary}</h2>
    </div>
  );
};

export default ContentHeader;
