import {useState} from "react";
import { Link } from "react-router";

export default function Navbar() { // ตัวแปรสำหรับเก็บค่าการแสดงเมนูมือถือ
	const [isOpen, setIsOpend] = useState(false);

	return (
		<>
			<nav className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white">
				<div className="container mx-auto flex items-center justify-between p-4">
					<Link to="#" className="text-xl font-extrabold">
						My Brand
					</Link>
					{/* desktop menu */}
					<ul className="hidden md:flex space-x-6">
						<li>
							<Link to="/" className="hover:text-gray-400">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-gray-400">
								About
							</Link>
						</li>
						<li>
							<Link to="/service" className="hover:text-gray-400">
								Service
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-gray-400">
								Contact
							</Link>
						</li>
					</ul>
					{/* hamburger menu */}
					<button className="md:hidden cursor-pointer"
						onClick={
							() => setIsOpend(!isOpen)
					}>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
							strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
						</svg>
					</button>
				</div>
				{/* mobile menu */}
				<ul className={
					`md:hidden flex-col space-y-4 p-4 transition-all duration-600 ${
						isOpen ? "block" : "hidden"
					}`
				}>
					<li>
						<Link to="#" className="block text-center">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="block text-center">
							About
						</Link>
					</li>
					<li>
						<Link to="#" className="block text-center">
							Service
						</Link>
					</li>
					<li>
						<Link to="#" className="block text-center">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
