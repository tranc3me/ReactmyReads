import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom'


//COMPONENTS
import Home from './components/Home.js'
import SearchResults from './components/SearchResults'


class BooksApp extends React.Component {
  state = {
    setBooks:[],  //gets current getAll() books
    searchBooks:[], //books that user has added, including getAll books
    loading:true
  }


  componentWillMount=()=>{
      BooksAPI.getAll().then((result)=>this.setState({setBooks:result,
                                                      loading:false,
                                                      searchBooks:result}))
  }


setBooks=(book,target)=>{

    this.setState({setBooks:[...this.state.setBooks.filter(books=>(books.id!==book.id)),book],
                    searchBooks:[...this.state.searchBooks,book]});
}





  render() {

     return (
    <BrowserRouter>

      <div className="app">
        <div className="search-books">
            <Route exact path="/search" render={()=>(
                 <SearchResults searchBooks={this.state.searchBooks} setBooks={this.setBooks}/>
             )}/>
          </div>
        <Route exact path="/" render={()=>(
          <div>{this.state.loading===true ? <p>Loading...</p>:(
              <Home myBooks={this.state.setBooks}/>)}
            </div>
        )}/>
    </div>

    </BrowserRouter>

    )
  }
}

export default BooksApp
