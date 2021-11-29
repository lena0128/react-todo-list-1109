import React from 'react'

const Item = (props) => {
        return (
            <div>
              <li key={props.idx}>{props.item}</li>   
            </div>
        )
}

export default Item