import { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import { FaDatabase } from 'react-icons/fa';
import { TbDatabase } from 'react-icons/tb';
import { ToolbarIcon } from './components/ToolbarIcon';
// Initial empty state
const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

function App() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


  // Handle connections between nodes
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        <Panel position="bottom-left">
            <div className="vertical-toolbar">
                <button className="toolbar-button" title="Add Data Source">
                <ToolbarIcon defaultIcon={FaDatabase} hoverIcon={TbDatabase} />
          </button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default App;
