import React from 'react';
import { Component } from '../../types/netlist';
import { Trash2 } from 'lucide-react';

interface ComponentListProps {
  components: Component[];
  onEditComponent: (component: Component) => void;
  onDeleteComponent: (componentId: string) => void;
}

export const ComponentList: React.FC<ComponentListProps> = ({
  components,
  onEditComponent,
  onDeleteComponent,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">配置済み部品</h3>
      {components.length === 0 ? (
        <p className="text-gray-500 text-sm">部品が配置されていません</p>
      ) : (
        <div className="space-y-2">
          {components.map((component) => (
            <div
              key={component.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200"
            >
              <button
                className="flex-1 flex items-center gap-2 text-left hover:bg-gray-100 p-1 rounded"
                onClick={() => onEditComponent(component)}
              >
                <span className="font-medium">{component.label}</span>
                <span className="text-sm text-gray-600">{component.value}</span>
              </button>
              <button
                className="p-1 text-gray-500 hover:text-red-500 rounded"
                onClick={() => onDeleteComponent(component.id)}
                title="削除"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
