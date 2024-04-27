import React from 'react'

function ConditionalRenderinfFunctional(props) {
  return (
    <div>
        <h1>{props.connected ? "Connected" : "Not connected"}</h1>
    </div>
  )
}

export default ConditionalRenderinfFunctional