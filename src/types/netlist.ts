export interface Node {
  id: string;
  x: number;
  y: number;
  type: 'hole';
  frontWire: Connection | null;
  backWire: Connection | null;
}

export interface Component {
  id: string;
  type: string;
  label: string;  // 例: R1, C1
  value: string;  // 例: 10kΩ
  position: { x: number, y: number };
  nodeId: string;
  pins: number;
}

export interface Connection {
  from: string;
  to: string;
  type: 'wire' | 'component';
  side: 'front' | 'back';
}

export interface Netlist {
  nodes: Node[];
  connections: Connection[];
  components: Component[];
}
