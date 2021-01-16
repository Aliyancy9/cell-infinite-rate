import * as React from 'react'

import Main from './Main'
import Math from'./Math'
export class App extends React.Component {
  public render() {
      return ( 
        <div>
        <Main />
        <Math />
        </div>

      )
  }
}
export default App;
