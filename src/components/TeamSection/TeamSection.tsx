import Stephen from "../../assets/icons/avatars/Stephen.png";
import Nolan from "../../assets/icons/avatars/Nolan.png";
import Ferris from "../../assets/icons/avatars/Ferris.png";
import Aria from "../../assets/icons/avatars/Aria.png";
import Niko from "../../assets/icons/avatars/Niko.png";

import "./teamSection.css";

const TeamSection = () => {
	return (
		<div className="team" id="team">
			<div className="team_wrapper">
				<div className="text_wrapper">
					<div className="title">Meet our team</div>
					<div className="descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis.
					</div>
					<span className="link">See team</span>
				</div>
				<div className="avatars_wrapper">
					<div className="avatar">
						<img src={Stephen} alt="Stephen" />

						<div className="text_wrapper">
							<div className="name">Stephen Collier</div>
							<div className="position">Senior Partner</div>
						</div>
					</div>

					<div className="avatar">
						<img src={Nolan} alt="Nolan" />

						<div className="text_wrapper">
							<div className="name">Nolan Peters</div>
							<div className="position">Associate</div>
						</div>
					</div>

					<div className="avatar">
						<img src={Ferris} alt="Ferris" />

						<div className="text_wrapper">
							<div className="name">Ferris Wonder</div>
							<div className="position">Associate Partner</div>
						</div>
					</div>

					<div className="avatar">
						<img src={Aria} alt="Aria" />

						<div className="text_wrapper">
							<div className="name">Aria Stone</div>
							<div className="position">Senior Partner</div>
						</div>
					</div>

					<div className="avatar">
						<img src={Niko} alt="Niko" />

						<div className="text_wrapper">
							<div className="name">Niko Ferry</div>
							<div className="position">Partner</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamSection;
