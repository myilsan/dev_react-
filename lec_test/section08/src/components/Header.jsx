import "./Header.css";
const Header=()=>{
    return (
    <div className="Header">
       <h3>오늘은 2024-07-08 14:53👩🏾‍🤝‍👩🏽</h3>
        <h1>{new Date().toDateString()}</h1>

    </div>
    );
};

export default Header;
