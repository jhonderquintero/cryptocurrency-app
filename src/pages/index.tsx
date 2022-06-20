import type { NextPage } from 'next';
import { Example, ThemeProvider } from '../context/ThemeContext';
import Typography from '../components/atoms/Typography';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <div className="bg-slate-100	dark:bg-black">
        <Typography variant="heading-lg" isAlt={true}>
          text
        </Typography>
      </div>
      <Example />
    </ThemeProvider>
  );
};

export default Home;
