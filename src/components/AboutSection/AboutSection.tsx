import Stephen from "../../assets/icons/avatars/Stephen.png";

import "./aboutSection.css";

const AboutSection = () => {
	return (
		<div className="about" id="about">
			<div className="about_wrapper">
				<div className="title">Our firm</div>
				<div className="text_wrapper">
					<div className="descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis
						viverra ornare, eros dolor interdum nulla, ut commodo diam libero
						vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
						imperdiet. Nunc ut sem vitae risus tristique posuere.
					</div>
					<div className="descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis
						viverra ornare, eros dolor interdum nulla, ut commodo diam libero
						vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
						imperdiet. Nunc ut sem vitae risus tristique posuere.
					</div>
					<div className="descr">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis
						viverra ornare, eros dolor interdum nulla, ut commodo diam libero
						vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
						imperdiet. Nunc ut sem vitae risus tristique posuere.
					</div>

					<div className="avatar_wrapper">
						<img src={Stephen} alt="Stephen" />

						<div className="descr_wrapper">
							<div className="name">Stephen Collier</div>
							<div className="position">Senior Partner</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
