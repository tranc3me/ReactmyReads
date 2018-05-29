import React,{Component} from 'react';
import WantToRead from './WantToRead'
import CurrentlyReading from './CurrentlyReading.js'
import Read from './Read'
import {Link} from 'react-router-dom'


class Home extends Component{

state={
    currentlyReading:[],
    wantToRead:[],
    read:[]

}




componentDidMount(){

        this.props.myBooks.filter((book)=>{

                switch(book.shelf){
                    case 'read':
                        this.setState((state)=>({read:[...state.read,book]}))
                    break;

                    case 'wantToRead':
                        this.setState((state)=>({wantToRead:[...state.wantToRead,book]}))
                    break;

                    case 'currentlyReading':
                        this.setState((state)=>({currentlyReading:[...state.currentlyReading,book]}))
                    break;

                    case 'none':
                        console.log("this happens")
                    break;

                    default:
                    break;
                }

                return true;
            })
}



clearShelf=(shelf,book)=>{

    switch(shelf){
        case 'read':

            this.setState({read: this.state.read.filter((books)=>
                                                (books.id !== book.id))})
        break;
        case 'wantToRead':

            this.setState({wantToRead: this.state.wantToRead.filter((books)=>
                                                (books.id !== book.id))})
        break;
        case 'currentlyReading':

            this.setState({currentlyReading: this.state.currentlyReading.filter((books)=>
                                                (books.id !== book.id))})
        break;
        default:
        break;
    }

}



update=(book,target)=>{
    let {prevShelf}=book;
    book.shelf=target;
    if(target==='wantToRead'){
        console.log("nesfrsdsdfjkas")
        this.setState({wantToRead:[...this.state.wantToRead,book]})
        this.clearShelf(prevShelf,book)
    }else if(target==='read'){
        this.setState({read:[...this.state.read,book]})
        this.clearShelf(prevShelf,book)
    }else if(target==='currentlyReading'){
        this.setState({currentlyReading:[...this.state.currentlyReading,book]})
        this.clearShelf(prevShelf,book)
    }else{ ///VALUE IS NONE
        book.shelf=undefined;
        this.setState({[prevShelf]: this.state[prevShelf].filter((books)=>
                                            (books !== book))})
    }

}




    render(){

        return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading books={this.state.currentlyReading} update={this.update}/>

                  <WantToRead books={this.state.wantToRead} update={this.update}/>

                  <Read books={this.state.read} update={this.update}/>

                </div>
              </div>
              <div className="open-search">
              <Link to="search">
                Add a book
                </Link>
              </div>
            </div>
        )
    }

}

export default Home;
