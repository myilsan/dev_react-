import "./Header.css";
const Header=()=>{
    return (
    <dev className="Header">
        <h3>오늘은👩🏾‍🤝‍👩🏽</h3>
        <h1>{new Date().toDateString()}</h1>

    </dev>
    );
};

export default Header;