import axios from 'axios'

type NavbarProps = {
  nodes:any[]
  edges:any[]
}

const Navbar = ({
  nodes,
  edges
}:NavbarProps) => {

  const saveLearningPath = async () => {

    const payload = {

      id:'lp-1',

      name:'Adaptive Learning Path',

      status:'draft',

      nodes,

      edges
    }

    try{

      await axios.post(
        'http://localhost:8080/api/learning-paths',
        payload
      )

      alert('Learning Path Saved!')

    }catch(error){

      alert('Save Failed')

    }
  }

  return (

    <div
      style={{
        height:'70px',
        background:'#111827',
        color:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'0 20px'
      }}
    >

      <h2>Adaptive Learning Builder</h2>

      <button
        onClick={saveLearningPath}
        style={{
          padding:'10px 20px',
          border:'none',
          borderRadius:'8px',
          cursor:'pointer'
        }}
      >
        Save Draft
      </button>

    </div>
  )
}

export default Navbar