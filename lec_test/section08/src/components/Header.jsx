import "./Header.css";
const Header=()=>{
    return (
    <div className="Header">
        <h3>오늘은 해더수정</h3>
        <h1>{new Date().toDateString()}</h1>

    </div>
    );
};

export default Header;
