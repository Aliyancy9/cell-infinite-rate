import * as React from 'react'
import SimulateMethod from './SimulateMethod'
import MathMethod from'./MathMethod'
export class App extends React.Component {
  public render() {
      return ( 
        <div>
          <SimulateMethod />
          <MathMethod />
        </div>
      )
  }
}
export default App
