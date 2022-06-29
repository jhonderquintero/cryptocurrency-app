import type { NextPage } from 'next';
import { ThemeProvider } from '../context/ThemeContext';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <div className="bg-surface	dark:bg-surface-dark"></div>
    </ThemeProvider>
  );
};

export default Home;
