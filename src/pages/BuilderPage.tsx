import { useState } from "react"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CanvasBuilder from "../components/CanvasBuilder"
import PropertiesPanel from "../components/PropertiesPanel"

const BuilderPage = () => {

  const [nodes, setNodes] = useState<any[]>([
    {
      id: '1',
      position: { x: 250, y: 100 },
      data: { label: 'Start Assessment' },
      type: 'custom'
    }
  ])

  const [edges, setEdges] = useState<any[]>([])

  const [selectedNode, setSelectedNode] =
    useState<any>(null)

  const [selectedEdge, setSelectedEdge] =
    useState<any>(null)

  return (

    <div style={{ height:'100vh' }}>

      <Navbar
        nodes={nodes}
        edges={edges}
      />

      <div
        style={{
          display:'flex',
          height:'calc(100vh - 70px)'
        }}
      >

        <Sidebar
          nodes={nodes}
          setNodes={setNodes}
        />

        <CanvasBuilder
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
          setSelectedNode={setSelectedNode}
          setSelectedEdge={setSelectedEdge}
        />

        <PropertiesPanel
          selectedNode={selectedNode}
          selectedEdge={selectedEdge}
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
        />

      </div>

    </div>
  )
}

export default BuilderPage