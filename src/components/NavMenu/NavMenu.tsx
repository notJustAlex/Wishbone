import { Link } from "react-scroll";
import { useEffect, useState } from "react";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import "./navMenu.css";

const NavMenu = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navMenuStyle: { [key: string]: string } = {
		height: "60px",
	};

	return (
		<>
			<div style={{ height: "90px" }}></div>
			<div
				id="nav_menu"
				className="nav_menu"
				style={scrollPosition >= 75 ? navMenuStyle : undefined}
			>
				<div className="logo_wrapper">
					<LogoIcon />
				</div>

				<div className="links_wrapper">
					<Link to="projects" smooth={true} spy={true} className="link">
						Projects
					</Link>
					<Link to="about" smooth={true} spy={true} className="link">
						About
					</Link>
					<Link to="news" smooth={true} className="link">
						News
					</Link>
					<Link to="team" smooth={true} className="link">
						Team
					</Link>
					<Link to="contact" smooth={true} className="link">
						Contact
					</Link>
					<Link to="" smooth={true} className="link" id="template">
						Get template
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavMenu;
