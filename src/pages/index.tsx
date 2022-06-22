import type { NextPage } from 'next';
import { Button } from '../atomic/atoms/Button/Button';
import { useThemeProvider } from '../context/ThemeContext';

const Home: NextPage = () => {
  const { toggleColorScheme } = useThemeProvider();
  function handleClick() {
    toggleColorScheme();
  }
  return (
    <div className="h-screen w-full bg-background-1 bg-cover bg-no-repeat dark:bg-surface-dark m-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-8xl ">
        <h1 className="text-black dark:text-white m-0">Title</h1>
        <Button onClick={handleClick} variant="outlined">
          Click Here
        </Button>
      </div>
    </div>
  );
};

export default Home;
