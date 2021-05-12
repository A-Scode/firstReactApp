// import React from 'react'

export default function Footer(){
    return(
        <footer className = "container-fluid bg-dark my-0 mx-0 text-light"
        style = {{
            display : "flex",
            position : "relative",
            bottom: 0,
            padding:0,
            width : "100vw !important",
            justifyContent: "center",
            placeItems: "center",
            height : "10vh",
        }}>
              <p className = "text-center"> 
                  Copyright &copy; TODOs list App
              </p>
        </footer>
      
    )
}