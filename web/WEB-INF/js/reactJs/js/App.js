/**
 * Created by SungTak on 16. 7. 9..
 */
import React from '../React_v15.2.1.js';

class App extends React.Component {
    _say() {
        alert("say hoho");
    }

    render() {
        let text = "안녕 ㅎㅎ";
        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return (
            <div>
                <h1>Hello App</h1>
                <h2>Welcome to {text}</h2>
                <button onclick={this._say}>Click Me</button>
                /* if - else문이 안된데요. 헐. */
                <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
            </div>
        );
    }
}

export default App;