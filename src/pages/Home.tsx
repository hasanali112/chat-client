import MessageBox from "@/components/shared/MessageBox";

const Home = () => {
  return (
    <div className="h-[200vh] relative pt-20">
      <h1 className="text-5xl">Home</h1>
      <div className="fixed bottom-0 right-0 w-[75%] z-50">
        <MessageBox />
      </div>
    </div>
  );
};

export default Home;
