type PropertiesProps = {
  selectedNode:any
  selectedEdge:any
  nodes:any[]
  edges:any[]
  setNodes:any
  setEdges:any
}

const PropertiesPanel = ({
  selectedNode,
  selectedEdge,
  nodes,
  setNodes
}:PropertiesProps) => {

  const updateLabel = (
    event:any
  ) => {

    const updatedNodes =
      nodes.map((node:any)=>{

        if(node.id === selectedNode.id){

          return {
            ...node,
            data:{
              ...node.data,
              label:event.target.value
            }
          }
        }

        return node
      })

    setNodes(updatedNodes)
  }

  return (

    <div
      style={{
        width:'300px',
        borderLeft:'1px solid #ddd',
        padding:'20px',
        background:'#fff'
      }}
    >

      <h2>Properties</h2>

      {
        selectedNode ? (

          <div>

            <label>
              Node Label
            </label>

            <input
              type="text"
              value={selectedNode.data.label}
              onChange={updateLabel}
              style={{
                width:'100%',
                padding:'10px',
                marginTop:'10px'
              }}
            />

          </div>

        ) : (

          <p>Select a node</p>

        )
      }

    </div>
  )
}

export default PropertiesPanel