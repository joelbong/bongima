import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component {
	render() {
		let tab1 = 'Technical skils',
			tab2 = 'Experience',
			tab3 = 'Education',
			tab4 = 'Language';
		const { tabStyle } = this.props;
		return (
			<div>
				{/* Start Tabs Area */}
				<div className="tabs-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12" style={{height: '200px'}}>
								<Tabs>
									<TabList className={`${tabStyle}`}>
										<Tab>{tab1}</Tab>
										<Tab>{tab2}</Tab>
										<Tab>{tab3}</Tab>
										<Tab>{tab4}</Tab>
									</TabList>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													Stack: Reactjs, Nodejs, Typescript, React Native
												</li>
												<li>
													Database: MySQL, MongoDB, Elastic, Postgresql
												</li>
												<li>
													Chatbot: Mindmeld, Rasa
												</li>
												<li>
													Infrastucture: Docker, Digital Ocean, Netifily, AWS, Heroku
												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													Full stack developer, SI services, Leuven<span> - 2018-now </span>
												</li>
												<li>
													Machine learning assistent under supervision of a PhD
student, KU Leuven, Leuven<span> - 2018, July-2018, August </span>
												</li>
												<li>
													Machine learning internship, Macq, Jette<span> - 2018, March-2018, June </span>
												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													Masters In Biomedical Engineer, KU Leuven, Leuven <span> - 2014-1018 </span>
												</li>
												<li>
													Bachelor In Bio Engineer, KU Leuven, Leuven <span> - 2011-1014 </span>
												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													Dutch
													<span> - Mother tongue</span>
												</li>
												<li>
													French
													<span> - Mother tongue</span>
												</li>
												<li>
													English
													<span> - Fluent</span>
												</li>
												<li>
													Spanish
													<span> - Basic</span>
												</li>
											</ul>
										</div>
									</TabPanel>

								</Tabs>
							</div>
						</div>
					</div>
				</div>
				{/* End Tabs Area */}
			</div>
		);
	}
}

export default TabsTwo;
