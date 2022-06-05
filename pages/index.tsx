import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1 data-testid="home" className="text-3xl font-bold underline ">
        Hi mom!
      </h1>
    </div>
  );
};

export default Home;
