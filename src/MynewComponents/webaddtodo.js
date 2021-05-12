import React from 'react'
import PropTypes from 'prop-types'

export default function TodoInput(props) {

    const btn_style = {
        width : "160px",
        textAlign : "justify"
    }

    function change_list(){
            var todo_work =  document.getElementById("todo_work").value
            var todo_discription = document.getElementById("todo_discription").value
            var todo_sno = props.list.length + 1
            var todo_obj = {id: todo_sno , work_title : todo_work , work_discription : todo_discription}
            if (!todo_work || !todo_discription){
                alert("Work or discription cannot be empty!!!")
                return
            }
           
            props.onchange(todo_obj )
            document.getElementById("todo_work").value = ""
            document.getElementById("todo_discription").value = ""
            }
   
    return (
        <div className="card-body">

            <div className="card" style={{ borderRadius: 10 + "px" }}>

                <div className="card-body">
                    <h5 className="card-title">Add TODO</h5>
                    <div className="mb-3">
                        <label className="form-label">Work Title</label>
                        <input type="email" className="form-control" id="todo_work"  />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Discription</label>
                        <textarea className="form-control" id="todo_discription" rows="3"></textarea>
                    </div>
                </div>

                <a id = "button" className="btn btn-primary m-3 "  style = {btn_style} onClick = {change_list}><svg  width="20" height="20" fill="currentColor" style = {{transform : "scale(1.3)"}} className="d-inline  mr-3 pl-2" >
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>&nbsp; Add to List</a>
            </div>
        </div>


    )
}

TodoInput.propTypes = {
    list : PropTypes.array
}

