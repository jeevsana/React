import React from 'react'
import Card from './Card'

function Jeev() {
    let data=[
        {
          icon : "",
          id : "abc",
          title : "Private Banking",
          description : "gdwytwrdtef",
        },
        {
            icon : "",
            id : "def",
            title : "jeevan",
            description : "gdwytwrdtef",
          },
          {
            icon : "",
            id : "red",
            title : "prathu",
            description : "gdwytwrdtef",
          },
          {
            icon : "",
            id : "jeevan",
            title : "bindu",
            description : "gdwytwrdtef",
          },
      ]
  return (
    <div style={{backgroundColor:"grey",padding:"20px"}}><h3 style={{textAlign:'center'}}>Our Focus is our Client Success</h3>
        <div className='row'>
            {
                data.map((element)=>{
                    return(
                        <div className="col" key={element.id}><Card data={element}/></div>
    
                    )
                })
            }
    
</div>
</div>
  )
}

export default Jeev