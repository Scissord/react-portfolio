import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Nurdaulet</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://hh.kz/resume/3039d021ff0c29daf50039ed1f683559387362"
				   className="btn" target='_blank' rel='noreferrer'>
					Look CV
				</a>
			</div>
		</header>
	);
}

export default Header;