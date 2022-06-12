import type { NextPage } from 'next';
import { Example, ThemeProvider } from '../context/ThemeContext';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <h1 className="bg-slate-100	text-white dark:bg-black">Homepage</h1>
      <Example />
    </ThemeProvider>
  );
};

export default Home;
