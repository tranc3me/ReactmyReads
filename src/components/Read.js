import React,{Component} from 'react'
import Book from './Book'

class Read extends Component{

    update=(book,target)=>{

        this.props.update(book,target)
    }

render(){
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    <Book {...this.props} type="current" update={this.update}/>

                </ol>
            </div>
        </div>
    )
}

}


export default Read
