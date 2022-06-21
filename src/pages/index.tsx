import type { NextPage } from 'next';
import { Button } from '../atomic/atoms/Button/Button';
import { useThemeProvider } from '../context/ThemeContext';

const Home: NextPage = () => {
  const { toggleColorScheme } = useThemeProvider();
  function handleClick() {
    toggleColorScheme();
  }
  return (
    <div className="h-screen w-full bg-background-1 dark:bg-surface-dark m-0">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 max-w-8xl">
        <h1 className="text-black dark:text-white m-0">Title</h1>
        <Button onClick={handleClick} variant="outlined">
          Click Here
        </Button>
      </div>
    </div>
  );
};

export default Home;
