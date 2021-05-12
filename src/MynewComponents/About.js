import React from 'react'


export default function About(){
    var about_style ={
        minHeight: "80vh"
    }
    return (
        <div  style = {about_style}>
        <h1 className = "m-3 fs-1 text-center" >About</h1>
        <div className = "text-center lh-lg">
        <p className = "m-5 fs-5 font-monospace  position-absolute" >This is about page of my todo app.
        Now this the first time I'am using react, well actually I'am following tutorial
        and learning the basics of React I'am amazed by the routing feature of React.
        This power of react helps to create WebApps flawlessly and Enjoyfully.</p>
        </div>
       
        </div>
    )
}