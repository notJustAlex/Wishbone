import MalmoImg from "../../assets/img/Malmö.png";
import NewYorkImg from "../../assets/img/NewYork.png";
import LondonImg from "../../assets/img/London.png";

import "./featuredProjectsSection.css";

const FeaturedProjectsSection = () => {
	return (
		<div className="fuatured_projects" id="fuatured_projects">
			<div className="fuatured_projects_wrapper">
				<div className="title">Featured projects</div>
				<div className="descr">
					Some of the latest and greatest projects from us here at
					Wishbone+Partners.
				</div>
				<div className="pictures_wrapper">
					<div className="picture">
						<img src={MalmoImg} alt="Malmö" />
						<div className="text_wrapper">
							<div className="title">Malmö</div>
							<div className="sub_title">Pumpkin St. Bar</div>
						</div>
						<button type="button">Read more</button>
					</div>

					<div className="picture">
						<img src={NewYorkImg} alt="New York" />
						<div className="text_wrapper">
							<div className="title">New York</div>
							<div className="sub_title">Big Road Brewery</div>
						</div>
						<button type="button">Read more</button>
					</div>

					<div className="picture">
						<img src={LondonImg} alt="London" />
						<div className="text_wrapper">
							<div className="title">London</div>
							<div className="sub_title">Lupin London</div>
						</div>
						<button type="button">Read more</button>
					</div>
				</div>

				<span className="link">View all projects</span>
			</div>
		</div>
	);
};

export default FeaturedProjectsSection;
