import React, {Component} from 'react';
import '../styles/app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {charCount: 0, wordCount: 0, sentenceCount: 0}

        this.change = this.change.bind(this);
        this.clear = this.clear.bind(this);
    }

    change() {
        let txArea = document.getElementById("mainText");
        let str = txArea.value;
        let ch = str.length;
        let wdL = str.split(" ");
        let wd = 0;
        if(wdL[wdL.length-1] == ""){
            wd = wdL.length - 1;
        }
        else{
            wd = wdL.length;
        }
        let stL = str.split(/[.!?]/);
        let st = 0;
        if(stL[stL.length-1] == ""){
            st = stL.length - 1;
        }
        else{
            st = stL.length;
        }
        this.setState({charCount: ch, wordCount: wd, sentenceCount: st});
    }

    clear(){
        document.getElementById("mainText").value = "";
        document.getElementById("mainText").focus();
        this.setState({charCount: 0, wordCount: 0, sentenceCount: 0});
    }

    render() {
        return <div>
            <textarea onChange={this.change} id="mainText" name="mainText" cols="40" rows="6" placeholder="Введите свой текст..." autoFocus></textarea>
            <div>
                <button id="clear" onClick={this.clear} >Очистить</button>
            </div>
            <p id="charCount">Количество символов: {this.state.charCount}</p>
            <p id="wordCount">Количество слов: {this.state.wordCount}</p>
            <p id="sentenceCount">Количество предложений: {this.state.sentenceCount}</p>
        </div>;
        
    }
}

export default App;