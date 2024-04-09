import React from "react";
import Text from "../../components/text/Text";
import CollectionContainer from "../../components/collection-container/CollectionContainer";

const Home = () => {
  const displayedText = "What do you want to learn today?";

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-x-10 h-full">
      <div className="col-span-3 flex h-full justify-center items-center text-6xl font-bold">
        <Text displayedText={displayedText} />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <CollectionContainer />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <CollectionContainer />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <CollectionContainer />
      </div>
    </div>
  );
};

export default Home;
