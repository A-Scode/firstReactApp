import logo from '../logo.svg'
import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './webTODO.js'

let TODOs

export default  TODOs = (props)=>{
    var list = props.todos
    if (list.length ===0) {return (
        <>
        <div className="d-grid gap-2 col-6 my-3 mx-auto rounded border border-primary" >
  <h3 className = " text-center m-3" style = {{color : "#0d6efd"}}>No TODO to display</h3>
  </div>

</>
    )}
    return (
     
            list.map((item)=>{
            return <TodoItem title ={ item.work_title} key= {item.id}  mainItem = {item} disc ={item.work_discription} Ondelete = {(title)=>{
                props.Ondelete(title)
            }} />
            })
        

    )

}


TODOs.propTypes = {
    todos : PropTypes.array 
}