import React from 'react'

const style = {
  width: '200px',
  height: '200px',
  background: 'red',
}

export default function(props: any) {

  return (
    <div {...props} style={style}>I'm a common div</div>
  )

}