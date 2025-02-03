import React from 'react';
import { Node } from '../../types/netlist';

interface GridProps {
  nodes: Node[];
  onNodeClick: (node: Node) => void;
  gridSize: { width: number; height: number };
  cellSize: number;
  showFront: boolean;
}

export const Grid: React.FC<GridProps> = ({ 
  nodes, 
  onNodeClick, 
  gridSize, 
  cellSize,
  showFront 
}) => {
  const renderNode = (x: number, y: number) => {
    const node = nodes.find(n => n.x === x && n.y === y);
    const hasWire = node && (showFront ? node.frontWire : node.backWire);
    
    return (
      <div
        key={`${x}-${y}`}
        className={`
          w-6 h-6 flex items-center justify-center
          ${hasWire ? 'bg-blue-500' : 'bg-transparent'} 
          hover:bg-blue-300 cursor-pointer
          transition-colors duration-200
        `}
        onClick={() => {
          if (node) {
            onNodeClick(node);
          }
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-gray-800/40 border border-gray-600" />
      </div>
    );
  };

  return (
    <div className="overflow-auto">
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize.width}, 24px)`,
          gridTemplateRows: `repeat(${gridSize.height}, 24px)`,
          gap: '0px',
          backgroundColor: showFront ? '#FFE4C4' : '#DEB887',
          padding: '1rem',
          border: '2px solid #8B4513',
          borderRadius: '8px',
        }}
      >
        {Array.from({ length: gridSize.height }, (_, y) =>
          Array.from({ length: gridSize.width }, (_, x) =>
            renderNode(x, y)
          )
        )}
      </div>
    </div>
  );
};