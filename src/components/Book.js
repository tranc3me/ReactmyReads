import React,{Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component{



  update=(book,target)=>{
     book.shelf=target
     if(target==='none'){
         book.shelf=undefined;
     }
     this.props.update(book,target)
 }


 setBook=(book,target)=>{
     this.props.setBook(book,target);
 }



    makeBooks=()=>{

        if(this.props.books.length!==0){
            let {books}=this.props;
            let template=null;
            let link,title,authors;

            switch(this.props.type){
                case ('current'):

                    template=books.map((book,id)=>{
                        authors= book ? book["authors"]: "none"
                        title=book.title;
                        link=book.imageLinks===undefined ? "none" :
                            book.imageLinks.thumbnail

                    return(
                    <div key={id} className="book" style={{display:'inline-block',marginRight:'20px'}}>
                        <div className="book-top">
                            <div className="book-cover"
                                style={{ width: 128, height: 193, backgroundImage:
                                        `url("${link}")` }}>
                            </div>

                            <BookShelfChanger id={book.id}
                                                shelf={book.shelf}
                                                update={this.update}
                                                book={book}            />

                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>)
                })

                break;

                
                default:

                    template=books.map((book,id)=>{
                        authors= book ? book["authors"]: "none"
                        title=book.title;
                        link=book.imageLinks===undefined ? "none" :
                            book.imageLinks.thumbnail


                    return(
                    <div key={id} className="book" style={{display:'inline-block',marginRight:'20px'}}>
                        <div className="book-top">
                            <div className="book-cover"
                                style={{ width: 128, height: 193, backgroundImage:
                                        `url("${link}")` }}>
                            </div>

                            <BookShelfChanger id={book.id}
                                                shelf={book.shelf}
                                                update={this.update}
                                                book={book}
                                                setBook={this.setBook}            />

                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>)
                    })

                break;
            }

            return template;
        }

    }




    render(){

    return  <div>{this.makeBooks()}</div>

    }


}

export default Book

Book.defaultProps = {books:[]};
