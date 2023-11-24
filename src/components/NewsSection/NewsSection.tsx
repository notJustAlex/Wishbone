import Bg from "../../assets/img/bg/news_bg.png";

import "./newsSection.css";

const NewsSectiont = () => {
	return (
		<div className="news">
			<img src={Bg} alt="news_bg" className="bg" />
			<div className="text_wrapper">
				<div>
					<span className="title">Reeding House</span>
					<span className="descr">
						Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
					</span>
				</div>
			</div>
		</div>
	);
};

export default NewsSectiont;
