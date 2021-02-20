import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                  <span className="experience-text">Javascript</span>
                                                </li>
                                                <li>
                                                  <span className="experience-text">React</span>
                                                </li>
                                                <li>
                                                  <span className="experience-text">Node</span>
                                                </li>
                                                <li>
                                                  <span className="experience-text">Express</span>
                                                </li>
                                                <li>
                                                  <span className="experience-text">Redux</span>
                                                </li>
                                                <li>
                                                  <span className="experience-text">Databases</span>
                                                </li>
                                                <li>
                                                  <span className="experience-text">UI/UX Design</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                 <span className="experience-text">NYSBPC Regionals </span><span> - 1st Place</span><br /> 2016
                                               </li>
                                               <li>
                                                 <span className="experience-text">NYSBPC Finals </span><span> - Top 5 Tech Award</span><br /> 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                <span className="experience-text">Software Engineer</span><span> - formaBull</span><br />
                                                2020 - Present
                                               </li>
                                               <li>
                                                <span className="experience-text">Software Engineer</span><span> - The Green Pup</span><br />
                                                2012 - 2020
                                               </li>
                                               <li>
                                                <span className="experience-text">Software Engineer</span><span> - Brain Kandy NYC </span><br />
                                                2012- 2017
                                               </li>
                                               <li>
                                                <span className="experience-text">Open Source Contribution</span><br />
                                                <span>- FitLyfe | Trainer & Trainee Management App</span><br />
                                                2021 - Present<br />
                                                <span>- Study Buddy | COVID-19 Student Study Support</span><br /> 
                                                2020 - 2021
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                               <span className="experience-text">B.A, Advertising and Technology</span><span> | New York Institute of Technology, Manhattan, NY</span><br /> 2016
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
        )
    }
}



export default TabsTwo;