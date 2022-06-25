import type { NextPage } from 'next';
import { ThemeProvider } from '../context/ThemeContext';
import Typography from '../atomic/atoms/Typography/Typography';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <div className="bg-slate-100	dark:bg-black">
        <Typography variant="heading-lg">TEXT</Typography>
      </div>
    </ThemeProvider>
  );
};

export default Home;
