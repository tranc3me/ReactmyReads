import React,{Component} from 'react'

import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchResults extends Component{

    state={
        query:'',
        books:[],
        empty:true,
        search:true
    }


setBook=(book,target)=>{
    this.props.setBooks(book,target);
}


update=(book,target)=>{
    this.props.setBooks(book,target);
}


filterBooks(result){

    let {searchBooks}=this.props;
    let shadowBooks=result;

        shadowBooks=result.map((books)=>{
            let i=searchBooks.length

            while(i!==0){
                i--;
                if(books.id===searchBooks[i].id){
                    return books=searchBooks[i]
                }
            }
            return books
        })

    this.setState({empty: false,
                  books:shadowBooks})

}




    updateQuery= (query) =>{
        let that=this;
         query=query.target.value

        return new Promise(function(resolve){
            that.setState({query:query})
            resolve(query)
        }).catch((error)=> console.log("shits happens " + error))
        .then((query)=>BooksAPI.search(this.state.query))
        .then((result)=>{

            if(result.length!==0){

                this.filterBooks(result)
            }
            if(result.error){
                console.log(result.error)
                throw 'sreach is empty'
            }
        }).catch((error) => (that.setState({empty:true,books:[],search:false})))
    }




    render(){

        return(
        <div>
            <div className="search-books-bar">
              <Link className="close-search" to="/" >Close</Link>
              <div className="search-books-input-wrapper">

              <input  value={this.state.query}
                      onChange={this.updateQuery }
                      type="text"
                      placeholder="Search by title or author"/>

              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
                    {
                        (()=>{
                            if(this.state.empty && this.state.query.length===0)
                                return <h1>Type something here</h1>

                            else if(this.state.empty===false)
                                return <Book type="default"  books={this.state.books}
                                        setBook={this.setBook}
                                        update={this.update}/>

                            else if(this.state.empty && this.state.query.length>0 &&
                                    this.state.search===false )
                                return <p>No books found</p>
                        })()

                    }

              </ol>
            </div>
        </div>

        )
    }


}

export default SearchResults
