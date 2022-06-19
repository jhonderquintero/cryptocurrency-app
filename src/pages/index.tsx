import type { NextPage } from 'next';
import { Example, ThemeProvider } from '../context/ThemeContext';
import Typography, { textType } from '../components/atoms/Typography';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <div className="bg-slate-100	dark:bg-black">
        <Typography isBold={true} type={textType.headingLg}>
          This is a text Large Heading
        </Typography>
        <Typography isAlt={true} type={textType.heading}>
          This is a text normal Heading
        </Typography>
        <Typography type={textType.headingSm}>
          This is a text small Heading
        </Typography>
        <Typography type={textType.textLg}>
          This is a text Large Text
        </Typography>
        <Typography type={textType.text}>This is a text normal Text</Typography>
        <Typography type={textType.textSm}>
          This is a text small Text
        </Typography>
        <Typography type={textType.info}>This is a text info Text</Typography>
      </div>
      <Example />
    </ThemeProvider>
  );
};

export default Home;
