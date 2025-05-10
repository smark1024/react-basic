import React, { useContext } from "react";
import "./App.css";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { DarkModeContext } from "./context/DarkModeContext";

export default function AppTheme() {
    return (
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    );
}

function Header() {
    return <header className="header">Header</header>;
}

function Main() {
    return (
        <main className="main">
            Main
            <Profile />
            <Product />
        </main>
    );
}

function Footer() {
    return <footer className="footer">Footer</footer>;
}

function Profile() {
    return (
        <div>
            Profile
            <User />
        </div>
    );
}

function User() {
    return <div className="user">User</div>;
}

function Product() {
    return (
        <div className="product">
            Product
            <ProductDetail />
        </div>
    );
}
function ProductDetail() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div className="productDetail">
            ProductDetail
            <p>DarkMode : {darkMode ? "Dark" : "Light"}</p>
            <button onClick={toggleDarkMode}>Toggle</button>
        </div>
    );
}
