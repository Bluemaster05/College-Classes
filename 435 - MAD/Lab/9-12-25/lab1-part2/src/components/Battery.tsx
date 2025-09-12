import React from 'react'

const Battery = (props: {charging: boolean, percentage: number}) => {
  const {charging, percentage} = props
  let color = '';
  
  if (percentage === 100){
    color = 'lightblue'
  }
  if (percentage <= 10 && percentage < 100){
    color = 'lightgreen'
  }
  if (percentage < 10){
    color = '#FF4040'
  } 

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      height: '100px',
      borderRadius: '20px',
      color: 'black',
      fontWeight: 'bold'
    }}>{charging && '⚡'}{percentage}%</div>
  )
}

export default Battery