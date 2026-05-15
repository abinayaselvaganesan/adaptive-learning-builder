import { useEffect, useState } from 'react'
import axios from 'axios'

type SidebarProps = {
  nodes:any[]
  setNodes:any
}

const Sidebar = ({
  nodes,
  setNodes
}:SidebarProps) => {

  const [components, setComponents] =
    useState<any[]>([])

  useEffect(() => {

    axios
      .get('http://localhost:8080/api/components')

      .then((response) => {

        setComponents(response.data.items)

      })

      .catch((error) => {

        console.log(error)

      })

  }, [])

  const addNode = (item:any) => {

    const newNode = {

      id: crypto.randomUUID(),

      position: {
        x: 250 + (nodes.length * 20),
        y: 100 + (nodes.length * 80)
      },

      data: {
        label: item.title
      },

      type:'custom'
    }

    setNodes((prev:any) => [
      ...prev,
      newNode
    ])
  }

  return (

    <div
      style={{
        width:'260px',
        borderRight:'1px solid #ddd',
        padding:'20px',
        background:'#f9fafb',
        overflowY:'auto'
      }}
    >

      <h2
        style={{
          marginBottom:'20px'
        }}
      >
        Add Components
      </h2>

      {
        components.map((item) => (

          <div
            key={item.id}

            onClick={() => addNode(item)}

            style={{
              background:'white',
              border:'1px solid #ddd',
              borderRadius:'10px',
              padding:'15px',
              marginBottom:'15px',
              cursor:'pointer'
            }}
          >

            <h3
              style={{
                marginBottom:'10px'
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize:'14px',
                color:'#666',
                marginBottom:'10px'
              }}
            >
              {item.shortDescription}
            </p>

            <small>
              {item.type} • {' '}
              {item.approximateDurationMinutes} mins
            </small>

          </div>

        ))
      }

    </div>
  )
}

export default Sidebar