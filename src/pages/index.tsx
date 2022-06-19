import type { NextPage } from 'next';
import { Button } from '../atomic/atoms/Button/Button';
import { useThemeProvider } from '../context/ThemeContext';

const Home: NextPage = () => {
  const { toggleColorScheme } = useThemeProvider();
  function handleClick() {
    toggleColorScheme();
  }
  return (
    <div className='h-screen bg-surface dark:bg-surface-dark m-0 '>
      <h1 className="text-black dark:text-white m-0">Title</h1>
      <Button onClick={handleClick} variant="outlined">Click Here</Button>
    </div>
  );
};

export default Home;
