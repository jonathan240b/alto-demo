import './index.css'

function Child(props) {
  return (
    <>
      <p>This is the child component</p>
      <button onClick={props.loadData}>
        Child load
      </button>
    </>
  )
}

export default Child
