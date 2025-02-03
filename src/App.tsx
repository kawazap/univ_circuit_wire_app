import { useState } from 'react';
import { Editor } from './components/Editor';
import { Netlist } from './types/netlist';
import './App.css';

const createInitialNetlist = (): Netlist => {
  const nodes = [];
  const width = 15;
  const height = 10;

  // グリッドノードの生成
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      nodes.push({
        id: `node-${x}-${y}`,
        x,
        y,
        type: 'hole' as const,
        frontWire: null,
        backWire: null,
      });
    }
  }

  return {
    nodes,
    connections: [],
    components: [],
  };
};

function App() {
  const [netlist, setNetlist] = useState<Netlist>(createInitialNetlist());

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Editor netlist={netlist} onNetlistChange={setNetlist} />
    </div>
  );
}

export default App;
