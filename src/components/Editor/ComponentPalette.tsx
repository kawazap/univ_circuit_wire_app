import React from 'react';
import { CircuitBoard, Circle, Disc, Zap, Battery } from 'lucide-react';

export interface ComponentType {
  id: string;
  name: string;
  icon: React.ReactNode;
  pins: number;
}

const components: ComponentType[] = [
  { id: 'resistor', name: '抵抗', icon: <CircuitBoard className="w-6 h-6" />, pins: 2 },
  { id: 'capacitor', name: 'コンデンサ', icon: <Circle className="w-6 h-6" />, pins: 2 },
  { id: 'inductor', name: 'インダクタ', icon: <Disc className="w-6 h-6" />, pins: 2 },
  { id: 'diode', name: 'ダイオード', icon: <Zap className="w-6 h-6" />, pins: 2 },
  { id: 'battery', name: '電源', icon: <Battery className="w-6 h-6" />, pins: 2 },
];

interface ComponentPaletteProps {
  onSelectComponent: (component: ComponentType) => void;
  selectedComponentId: string | null;
}

export const ComponentPalette: React.FC<ComponentPaletteProps> = ({
  onSelectComponent,
  selectedComponentId,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">部品パレット</h3>
      <div className="grid grid-cols-2 gap-2">
        {components.map((component) => (
          <button
            key={component.id}
            className={`
              flex items-center gap-2 p-2 rounded
              ${selectedComponentId === component.id 
                ? 'bg-blue-100 border-blue-500' 
                : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
              }
              border transition-colors duration-200
            `}
            onClick={() => onSelectComponent(component)}
          >
            {component.icon}
            <span className="text-sm">{component.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
