import React,{Component} from 'react'


class BookShelfChanger extends Component{

getBook=(e)=>{
    e.persist()
    let {book}=this.props
    let target=e.target.value

    if(book.shelf===undefined){
        book.shelf=target;
        this.props.update(book,target)
    }else{
    
    book.prevShelf=book.shelf
        this.props.update(book,target)
    }
}



setBook=(e)=>{
    let target=e.target.value
    let {book}=this.props;
    book.shelf=target;

    this.props.setBook(book,target)
}




controls = (type)=>{
    switch (type){
        case 'read':
            return(
            <div className="book-shelf-changer">
              <select value={this.props.shelf} id={this.props.id} onChange={(e)=>{this.getBook(e)}}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option disabled value="read">Read✔</option>
                <option value="none">None</option>
               </select>
            </div>)
        break;

        case 'wantToRead':
            return(
            <div className="book-shelf-changer">
            <select value={this.props.shelf} id={this.props.id} onChange={(e)=>this.getBook(e)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option  disabled value="wantToRead">Want to Read✔</option>
                <option value="read">Read</option>
                <option value="none">None</option>
               </select>
            </div>)
        break;

        case 'currentlyReading':
            return(
            <div className="book-shelf-changer">
              <select value={this.props.shelf} onChange={(e)=>this.getBook(e)}>
                <option value="none" disabled>Move to...</option>
                <option disabled value="currentlyReading">Currently Reading✔</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
               </select>
            </div>)
        break;

        case undefined:
        return(
        <div className="book-shelf-changer">
          <select value='none' onChange={(e)=>this.setBook(e)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>

           </select>
        </div>)
        break;

        default:
        break;

    }
}

    render(){

        return(

            <div>{this.controls(this.props.shelf)}</div>

        )
    }
}


export default BookShelfChanger
