import { Handle, Position } from '@xyflow/react'

const CustomNode = ({ data }: any) => {

  return (

    <div
      style={{
        background: 'white',
        border: '2px solid #2563eb',
        padding: '15px',
        borderRadius: '10px',
        width: '180px',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}
    >

      <Handle
        type="target"
        position={Position.Top}
      />

      {data.label}

      <Handle
        type="source"
        position={Position.Bottom}
      />

    </div>

  )
}

export default CustomNode