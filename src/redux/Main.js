import { randomizeColor, fetchQuotes, selectQuote } from "./action";
import { connect } from 'react-redux';
import { Component } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../main.css'




const mapStateToProps = state => {
    return {
        quotes: state.Quotes.quotes.quotes,
        quote: state.SelectQuote.quote.quote,
        author: state.SelectQuote.quote.author,
        color: state.RandomColor.color
    }
}

const mapDispatchToProps = {
    fetchQuotes: () => fetchQuotes(),
    randomizeColor: (color) => randomizeColor(color),
    selectQuote: (quote) => selectQuote(quote)
}


const randomColor = () => {
    let color = '#'
    for (let i = 0 ; i < 6 ; i++){
        color += Math.floor(Math.random()*16).toString(16)
    }

    return (  
        color
    );
}








class Main extends Component {
    componentDidMount() {
        this.props.fetchQuotes()
        .then(response => this.props.selectQuote(response.payload.quotes[Math.floor(Math.random()*response.payload.quotes.length)]))
        .then(this.props.randomizeColor(randomColor()))
    }

    randomQuote = () => {
        let num = Math.floor(Math.random()*this.props.quotes.length)
        return this.props.quotes[num]
    }


    render(){
        return (
            <>
                <h1>Random Quote Generator</h1>
                <div className="quote-box-wrapper">
                    <div id="quote-box" className="" style={{backgroundColor: this.props.color}}> 
                        <h3 id="text">{this.props.quote}</h3>
                        <p id="author">{this.props.author}</p>
                        <a id="tweet-quote" href="https://twitter.com/intent/tweet" className="btn btn-primary"><FontAwesomeIcon icon = { faTwitter }></FontAwesomeIcon></a>
                        <button id="new-quote" type="button" className="btn btn-primary" onClick={() => {this.props.randomizeColor(randomColor()); this.props.selectQuote(this.randomQuote());}}>New quote</button>
                    </div>
                </div>
            </>
        );
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Main);