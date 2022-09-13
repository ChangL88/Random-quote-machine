const SELECT_QUOTE = 'SELECT_QUOTE'
const ADD_QUOTES = 'ADD_QUOTES'
const RANDOMCOLOR = 'RANDOMCOLOR'
const quoteurl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

export const fetchQuotes = () => dispatch => {

    return fetch(quoteurl)
    .then(response => {
            if (response.ok){
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(response => dispatch(addQuotes(response)))
    .catch(error => {
        console.log('post comment', error.message);
            alert('Could not fetch quotes\nError: ' + error.message);
    })
}


export const addQuotes = quotes => ({
    type: ADD_QUOTES,
    payload: quotes
})


export const Quotes = (state = {quotes: []}, action) => {
    switch(action.type){
        case ADD_QUOTES:
            return {...state, quotes: action.payload}
        default:
            return state
    }
}


export const selectQuote = quote => ({
    type: SELECT_QUOTE,
    payload: quote
})

export const randomizeColor = color => ({
    type: RANDOMCOLOR,
    payload: color
})


    // REDUCERS

export const SelectQuote = (state = { quote: {}}, action) => {
    switch(action.type){
        case SELECT_QUOTE:
            return {...state, quote: action.payload}
        default:
            return state;
    }
}



export const RandomColor = (state = { color: '' }, action) => {
    switch(action.type){
        case RANDOMCOLOR:
            return {...state, color: action.payload}
        default:
            return state;
    }
}