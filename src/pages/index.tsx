import type { NextPage } from 'next';
import { Button } from '../atomic/atoms/Button/Button';
import Typography from '../atomic/atoms/Typography/Typography';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-background-1 bg-cover bg-no-repeat bg-black m-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-8xl py-8 flex flex-row	justify-start mb-16">
        <Typography variant="heading-sm">cryptonix</Typography>
      </div>

      <div className="flex flex-column justify-start">
        <div className="h-0.5 bg-white w-64 mt-2 mr-6"></div>
        <Typography variant="text-sm">
          Secure solution for <br />
          your digital money
        </Typography>
      </div>

      {/* Move this to a new Molecule  */}
      <div className="flex flex-row justify-start my-24">
        <div className='mx-8 md:mx-16  w-8 bg-white'>
        </div>
        <div className="w-2/3 sm:w-2/4 lg:w-2/5">
          <Typography variant="heading-lg">
            Exchange between all popular currencies with a couple of clicks
          </Typography>

          <Button onClick={() => null} variant="outlined">
            GET A FREE WALLET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
