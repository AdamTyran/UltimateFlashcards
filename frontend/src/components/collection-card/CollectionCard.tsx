import React from "react";

const CollectionCard = () => {
  return (
    <div className="flex flex-col h-[16rem] w-[32rem] bg-white shadow-xl rounded-lg border-2 border-neutral-300 transform hover:-translate-y-4 transition duration-300">
      <h1 className="w-11/12 h-12 text-4xl font-serif font-bold uppercase my-3 mx-auto">
        title
      </h1>
      <hr className="w-11/12 bg-black h-[2px] mx-auto" />
      <h2 className="w-11/12 text-lg mx-auto my-4">description</h2>
    </div>
  );
};

export default CollectionCard;
