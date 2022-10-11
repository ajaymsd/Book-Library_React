import React from "react";
import ReactDOM  from "react-dom";
import "./app.css";

const Books=[
    {
        img:"https://m.media-amazon.com/images/I/71LaJylkUvL._AC_UL320_.jpg",
        title:"Wise and Otherwise",
        author:"Sutha Murthy",
        price:"$156"
    },
    {
        img:"https://m.media-amazon.com/images/I/71GbGol4p+L._AC_UL320_.jpg",
        title:"The Room Roof",
        author:"Ruskin Bond",
        price:"$168"
    },
    {
        img:"https://m.media-amazon.com/images/I/81i2034Lj0S._AC_UL320_.jpg",
        title:"Train to Pakistan",
        author:"Khushant",
        price:"$134"
    },
];
    const Books2=[{
        img:"https://m.media-amazon.com/images/I/41IMpHaZpmL._AC_UL320_.jpg",
        title:"Shantaram",
        author:"Gregory",
        price:"$100"
    },
    {
        img:"https://m.media-amazon.com/images/I/81-7rvh85jL._AC_UL320_.jpg",
        title:"Long SIlence",
        author:"Deshpande Shashi",
        price:"$236"
    },
    {
        img:"https://m.media-amazon.com/images/I/71m4x4wunyL._AC_UL320_.jpg",
        title:"The Guide",
        author:"R.K Narayanan",
        price:"$202"

    }
];
const Booklibrary=()=>{
    return(
        <section>
        <h1>BOOK LIBRARY</h1>
        <div className="firstlist">
       
        {Books.map((book) => {
         const { img, title, author,price } = book;
          return <SingleBook book={book}></SingleBook>;
     })}
           </div>
           <div className="secondlist">
       
       {Books2.map((book) => {
        const { img, title, author,price } = book;
         return <SingleBook book={book}></SingleBook>;
    })}
          </div>
          



        </section>
    );
}

const SingleBook=(props)=>{
    const{img,title,author,price}=props.book;
    function handleAlert(){
        alert("Title:"+title)
    }
    return(
      <div className="Booklist">
        <img src={img} alt=""/>
        <h3>TITLE: {title}</h3>
        <h3>AUTHOR: {author}</h3>
        <h3 className="pri">PRICE: {price}</h3>
        <button onClick={handleAlert}>Click to Display Title</button>

      </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Booklibrary/>)