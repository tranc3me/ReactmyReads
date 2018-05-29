import React,{Component} from 'react'
import Book from './Book'

class WantToRead extends Component{

    update=(book,target)=>{
        this.props.update(book,target)
    }


render(){

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    <Book {...this.props} type="current" update={this.update} />

                </ol>
            </div>
        </div>
    )
}

}


export default WantToRead
