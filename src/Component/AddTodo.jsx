import React from 'react'

const AddTodo = () => {
  return (
    <div>
        <div className='container mx-auto bg-white shadow p-5'>
            <h1>Add Todo</h1>
            <form>
                <input type="text" placeholder="Enter your todo" className='form-control' />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default AddTodo