import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl '>
          <button>Red</button>
          <button>Blue</button>
          <button>Green</button>
          <button>Purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
