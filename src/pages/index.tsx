import type { NextPage } from 'next';
import { Example, ThemeProvider } from '../context/ThemeContext';
import Typography from '../components/atoms/Typography/Typography';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <div className="bg-slate-100	dark:bg-black">
        <Typography variant="heading-lg">TEXT</Typography>
      </div>
      <Example />
    </ThemeProvider>
  );
};

export default Home;
