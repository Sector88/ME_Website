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
                                                    <a> <span>Javascript</span></a>
                                                </li>
                                                <li>
                                                    <a><span>React</span></a>
                                                </li>
                                                <li>
                                                    <a>Node<span></span></a>
                                                </li>
                                                <li>
                                                    <a>Express<span></span></a>
                                                </li>
                                                <li>
                                                    <a>Redux<span></span></a>
                                                </li>
                                                <li>
                                                    <a>Databases<span></span></a>
                                                </li>
                                                <li>
                                                    <a>UI/UX Design<span></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">NYSBPC Regionals <span>- 1st Place</span></a> 2016
                                               </li>
                                               <li>
                                                   <a href="/service">NYSBPC Finals <span>- Top 5 Tech Award</span></a> 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Software Engineer<span> - formaBull</span></a> 2020 - Present
                                               </li>
                                               <li>
                                                   <a>Software Engineer<span> - The Green Pup</span></a> 2012 - 2020
                                               </li>
                                               <li>
                                                   <a>Software Engineer<span> - Brain Kandy NYC </span></a> 2012- 2017
                                               </li>
                                               <li>
                                                   <a>Open Source Contribution<br />
                                                   <span>- FitLyfe | Trainer & Trainee Management App<br />
                                                   2021 - Present<br />
                                                   - Study Buddy | COVID-19 Student Study Support
                                                   </span></a> 2020 - 2021
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>B.A, Advertising and Technology<span> | New York Institute of Technology, Manhattan, NY</span></a> 2016
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