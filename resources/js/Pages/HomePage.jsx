import { AiFillCheckCircle } from 'react-icons/ai';

const HomePage = () => {
  return (
    <div className="flexCenter flex-col gap-2 text-center">
      <h1 className="text-xl font-semibold">
        Ini Adalah Page Asistensi Jarkom
      </h1>

      <div className="flex items-center gap-2">
        <AiFillCheckCircle color="blue" />
        <span className="text-blue-600">Terverifikasi</span>
      </div>

      <div className="mt-4">
        <h2 className="text-lg">Nama: (nama kalian)</h2>
        <h2 className="text-lg">NPM: (npm kalian )</h2>
      </div>
    </div>
  );
};

export default HomePage;
