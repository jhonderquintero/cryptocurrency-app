import type { NextPage } from 'next';
import { Button } from '../atomic/atoms/Button/Button';
import Typography from '../atomic/atoms/Typography/Typography';
import { ThemeProvider, useThemeProvider } from '../context/ThemeContext';

const Home: NextPage = () => {
  const ctx = useThemeProvider();
  return (
    <ThemeProvider>
      <div>
        <Typography variant="heading">Change the theme!</Typography>
        <Button onClick={() => ctx.toggleColorScheme()}>Change</Button>
      </div>
    </ThemeProvider>
  );
};

export default Home;
