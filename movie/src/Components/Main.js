import react from "react";
const Main = () => {
  return <>
  <div className="header">
    <nav>
        <ul>
            <li>
                <a href="#">Popular</a></li>
                <li><a href="#">Theatre</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Comedy</a></li>
            
        </ul>
    </nav>
    <form>
        <div className="search-btn">
            <input type="text" placeholder="Enter Movie Name" className="inputText"></input>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </form>
  </div>
  </>;
};
export default Main;