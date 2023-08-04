const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Shymkent, Kazakhstan</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">WhatsApp / Telegram </h2>
						<p>
							<a href="tel:+77762643168">+77762643168</a><br/>
							<h1>@scissorxd</h1>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:mrnurdik@mail.ru">
								mrnurdik@mail.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;