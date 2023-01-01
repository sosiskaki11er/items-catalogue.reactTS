import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 items-center bg-gray-500 text-white">
            <span className="font-bold">React 2023</span>

            <span>
                <Link to="/" className="mr-5">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}