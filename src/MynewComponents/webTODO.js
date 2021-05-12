// import React from 'react'


export default function TodoItem(props){

    return (
        <div className="card m-3" style= {{borderRadius : 10+"px"}}>

  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.disc}</p>
    <a href="#" className="btn btn-primary" onClick = {()=>{
        props.Ondelete(props.mainItem)
    }}>Delete</a>
  </div>
</div>

    )
}