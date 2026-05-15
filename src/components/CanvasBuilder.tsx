import CustomNode from './CustomNode'

import {
  ReactFlow,
  Background,
  Controls,
  addEdge,
  useEdgesState
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

type CanvasProps = {
  nodes: any[]
  setNodes: any
  edges: any[]
  setEdges: any
  setSelectedNode: any
  setSelectedEdge: any
}

const nodeTypes = {
  custom: CustomNode
}

const CanvasBuilder = ({
  nodes,
  setNodes,
  edges,
  setEdges,
  setSelectedNode,
  setSelectedEdge
}: CanvasProps) => {

  const [, , onEdgesChange] =
    useEdgesState(edges)

  const onNodesChange = (changes: any) => {

    setNodes((nds: any) =>
      nds.map((node: any) => {

        const change = changes.find(
          (c: any) => c.id === node.id
        )

        if (change && change.position) {
          return {
            ...node,
            position: change.position
          }
        }

        return node
      })
    )
  }

  // ⭐ UPDATED EDGE CREATION WITH CONDITIONS
  const onConnect = (params: any) => {

    const newEdge = {
      ...params,
      id: `${params.source}-${params.target}`,
      label: "Condition",
      conditions: {
        operator: "AND",
        rules: [
          {
            id: "rule-1",
            sourceType: "assessment",
            sourceNodeId: params.source,
            metric: "passed",
            operator: "eq",
            value: true
          }
        ]
      }
    }

    setEdges((eds: any) => addEdge(newEdge, eds))
  }

  return (
    <div style={{ flex: 1, height: '100%' }}>

      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}

        onNodeClick={(_, node) => {
          setSelectedNode(node)
        }}

        onEdgeClick={(_, edge) => {
          setSelectedEdge(edge)
        }}

        fitView
      >

        <Background />
        <Controls />

      </ReactFlow>

    </div>
  )
}

export default CanvasBuilder