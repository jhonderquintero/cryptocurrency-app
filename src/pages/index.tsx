import type { NextPage } from 'next';
import { ThemeProvider } from '../context/ThemeContext';
import Input from '../atomic/atoms/Input/Input';
import { useRef } from 'react';
import Typography from '../atomic/atoms/Typography/Typography';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const logInputHandler = () => {
    console.log(inputRef.current?.value);
  };
  return (
    <ThemeProvider>
      <div className="bg-surface	dark:bg-surface-dark">
        <Typography variant="heading-lg">TEXT</Typography>
        <Input placeHolder="search..." ref={inputRef} variant="email" />
        <button onClick={logInputHandler}>log input</button>
      </div>
    </ThemeProvider>
  );
};

export default Home;
