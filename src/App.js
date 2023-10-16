
import './App.css';
import Random from './Component/Random';

function App() {
  return (
  
    <div className=" w-full h-screen flex flex-col background relative ">
      <h2 className="bg-red-500  py-2 m-4 fon text-4xl color-yellow flex justify-center rounded-lg">Random Gifs</h2>

      <div  className='flex flex-col w-full items-center gap-y-2   mx-0'>
      <Random/>
   
    </div>
    </div>
  
  

  );

}

export default App;
