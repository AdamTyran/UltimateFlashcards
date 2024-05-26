import Text from "../../components/text/Text";
import CollectionCard from "../../components/collection-card/CollectionCard";

const Home = () => {
  const displayedText = "What do you want to learn today?";

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-x-10 h-full">
      {/* Added to check how it looks */}
      <div className="col-span-3 flex h-full justify-center items-center text-6xl font-bold">
        <Text displayedText={displayedText} />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <CollectionCard />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <CollectionCard />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <CollectionCard />
      </div>
    </div>
  );
};

export default Home;
