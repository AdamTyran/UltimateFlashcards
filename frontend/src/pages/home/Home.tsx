import React from "react";
import Text from "../../components/text/Text";

const Home = () => {
  const displayedText = "What do you want to learn today?";

  return (
    <div className="flex h-1/2 justify-center items-center text-6xl font-bold">
      <Text displayedText={displayedText} />
    </div>
  );
};

export default Home;
