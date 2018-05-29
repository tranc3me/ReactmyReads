import React,{Component} from 'react'
import Book from './Book'

class CurrentlyReading extends Component{

update=(book,target)=>{
    this.props.update(book,target);
}

render(){

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">CurrentlyReading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    <Book type="current" books={this.props.books}
                                        update={this.update}
                                        />

                </ol>
            </div>
        </div>
    )
}

}


export default CurrentlyReading
