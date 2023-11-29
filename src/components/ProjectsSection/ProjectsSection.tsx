import ProjectsBg from "../../assets/img/bg/projects_bg.png";
import { Link } from "react-scroll";

import "./projectSection.css";

const ProjectsSection = () => {
	return (
		<div className="projects" id="projects">
			<div className="text_wrapper">
				<div className="logo">Wishbone+Partners</div>
				<h1 className="title">The home of beautiful architecture.</h1>
				<span className="descr">
					We are an architecture firm with a focus on beautiful but functional
					design. At its heart, we believe design is about usability and
					accessibility — these are the guiding principles for our work. Read
					more about our previous projects, our process and our team below.
				</span>
				<Link to="about" smooth={true} className="link">
					Read more
				</Link>
			</div>

			<div className="img_wrapper">
				<img src={ProjectsBg} loading="lazy" alt="projects_bg" />
			</div>
		</div>
	);
};

export default ProjectsSection;
