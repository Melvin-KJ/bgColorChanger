import { useState } from 'react';

function App() {
  const [color, setColor] = useState('burlywood');
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3  px-4 py-2">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-8 py-2 rounded-full text-white border-white border-2"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('blue')}
            className="outline-none px-8 py-2 rounded-full text-white  border-white border-2"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline-none px-8 py-2 rounded-full text-white border-white border-2"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('purple')}
            className="outline-none px-8 py-2 rounded-full text-white border-white border-2"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
