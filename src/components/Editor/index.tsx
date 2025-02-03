import React, { useState, useCallback } from 'react';
import { Grid } from './Grid';
import { ComponentPalette } from './ComponentPalette';
import { ComponentList } from './ComponentList';
import { Node, Component, Netlist } from '../../types/netlist';
import { ComponentType } from './ComponentPalette';
import { Layers } from 'lucide-react';

interface EditorProps {
  netlist: Netlist;
  onNetlistChange: (netlist: Netlist) => void;
}

export const Editor: React.FC<EditorProps> = ({ netlist, onNetlistChange }) => {
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  const handleNodeClick = useCallback((node: Node) => {
    // TODO: 配線処理の実装
    console.log('Node clicked:', node);
  }, []);

  const handleSelectComponent = useCallback((component: ComponentType) => {
    setSelectedComponentId(component.id === selectedComponentId ? null : component.id);
  }, [selectedComponentId]);

  const handleEditComponent = useCallback((component: Component) => {
    // TODO: 部品編集ダイアログの実装
    console.log('Edit component:', component);
  }, []);

  const handleDeleteComponent = useCallback((componentId: string) => {
    const updatedComponents = netlist.components.filter(c => c.id !== componentId);
    onNetlistChange({
      ...netlist,
      components: updatedComponents,
    });
  }, [netlist, onNetlistChange]);

  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">ユニバーサル基板エディタ</h2>
        <div className="flex gap-8 overflow-hidden">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              表面
            </h3>
            <div className="overflow-hidden bg-gray-100 p-4 rounded-lg">
              <Grid
                nodes={netlist.nodes}
                onNodeClick={handleNodeClick}
                gridSize={{ width: 15, height: 10 }}
                cellSize={32}
                showFront={true}
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              裏面
            </h3>
            <div className="overflow-hidden bg-gray-100 p-4 rounded-lg">
              <Grid
                nodes={netlist.nodes}
                onNodeClick={handleNodeClick}
                gridSize={{ width: 15, height: 10 }}
                cellSize={32}
                showFront={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 p-4 border-l border-gray-200 space-y-4 overflow-y-auto">
        <ComponentPalette
          onSelectComponent={handleSelectComponent}
          selectedComponentId={selectedComponentId}
        />
        <ComponentList
          components={netlist.components}
          onEditComponent={handleEditComponent}
          onDeleteComponent={handleDeleteComponent}
        />
      </div>
    </div>
  );
};
