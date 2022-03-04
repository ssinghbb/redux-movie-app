import React,{useState} from "react";
import { Link } from "react-router-dom";
import User from "../../images/user.jpg";
import "./Header.scss";
const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const submitHandler=(e)=>{
e.preventDefault()
console.log("sss",searchQuery)
}
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
          
          <form onSubmit={ submitHandler}>
              <input type="text" placeholder="Seacrh Movies or Series" onChange={(e)=>setSearchQuery(e.target.value)} name="" id="" />
              <button type="submit">  <i className="fa fa-search"> </i></button>
              </form></div>
      <div className="user-image">
        <img src={User} alt="img" />
      </div>
    </div>
  );
};

export default Header;
