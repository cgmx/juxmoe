

const UIMastContainer = () => (
	<div className="GHS-about-container">
		<div className="GHS-about-containing-image-box">

			<div className="sticky-container">
				<figure className="GHS_Image main-img log" style={{ display: 'block' }}></figure>
				<figure className="GHS_Image blur-img log" style={{ display: 'block' }}></figure>
				<div className="GHS_Image blur-bg log" style={{ display: 'block' }}></div>
			</div>
				<div className="masthead-inner-container presentation-header--container">
				<div className="masthead-hero">
					<div className="masthead-inner-image-prev">
					<img className="masthead-self-prev" src="/static/i/me2.jpg" />
					</div>
					<h1 className="supermast-banner">
					Hi! I'm, Corbin.
					</h1>

					<h3 className="supermast-sub-banner">
					A developer that focuses on node.js/ES6 and React based applications.
					</h3>


					<ul className="masthead-intro-list">
					<li className="masthead-intro-list-el">
						<div>
							<a className="anchor-mast-social" id="github-nav" href="https://github.com/cgmx">
							<i className="fab fa-github"></i>
							&nbsp;GitHub
							</a>
						</div>
					</li>
					<li className="masthead-intro-list-el">
						<div>
							<a className="anchor-mast-social" id="twitter-nav" href="https://twitter.com/basedjux">
							<i className="fab fa-twitter"></i>
							&nbsp;Twitter
							</a>
						</div>
					</li>
					<li className="masthead-intro-list-el">
						<div>
							<a className="anchor-mast-social" id="medium-nav" href="https://www.linkedin.com/in/corbinmatschull/">
							<i className="fab fa-linkedin-in"></i>
							&nbsp;LinkedIn
							</a>
						</div>
					</li>
					</ul>
				</div>
				<style jsx>{`
					.anchor-mast-social i {
						padding: 0 4px;
					}
				`}</style>
			</div>
			
		</div>
	</div>
)

export default UIMastContainer
