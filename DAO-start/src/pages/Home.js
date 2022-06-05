import React, { useEffect, useState } from "react";
import "./pages.css";
import { TabList, Tab, Widget, Tag, Table, Form } from "web3uikit";
import { Link } from "react-router-dom";


const Home = () => {

  const [proposals, setProposals] = useState([
      [
        1,
        <div>Should we start a web3 spicy chicken sandwich chain?</div>,
        <Tag color="green" text="Passed" />,
      ],
      [
        2,
        "Should we accept Truist's offer of 200 ETH for our DAO?",
        <Link to="/proposal" state={"hello"}>
          <Tag color="red" text="Rejected" />
        </Link>,
      ],
      [
        3,
        "Do you want a web3 3d printing tutorial?",
        <Tag color="blue" text="Ongoing" />,
      ],
      [
        4,
        "Are you interested in ReFi and impact DAO tutorials?",
        <Tag color="blue" text="Ongoing" />,
      ],
      [
        5,
        "Would you attend a Developer_DAO meetup in DC?",
        <Tag color="blue" text="Ongoing" />,
      ],
  ]
  );
 
  return (
    <>
      <div className="content">
        <TabList defaultActiveKey={1} tabStyle="bulbUnion">
          <Tab tabKey={1} tabName="DAO">
            <div className="tabContent">
              Governance Overview
              <div className="widgets">
                <Widget
                info={47}
                title="Proposals Created"
                style={{ width: "200%" }}
                >
                  <div className="extraWidgetInfo">
                    <div className="extraTitle">Pass Rate</div>
                    <div className="progress">
                      <div
                      className="progressPercentage"
                      style={{width: `${60}%`}}
                      ></div>
                    </div>
                  </div>
                </Widget>
                <Widget info={447} title="Eligible Voters" />
                <Widget info={4} title="Ongoing Proposals" />
              </div>
              Recent Proposals
                <div style={{ marginTop: "30px"}}>
                  <Table
                    columnsConfig="10% 70% 20%"
                    data={proposals}
                    header={[
                      <span>ID</span>,
                      <span>Description</span>,
                      <span>Status</span>
                    ]}
                    pageSize={5}
                    />
                </div>
                <Form
                  buttonConfig={{
                    isLoading: false,
                    loadingText: "Submitting Proposal",
                    text: "Submit",
                    theme: "secondary",
                  }}
                  data={[
                    {
                      inputWidth: "100%",
                      name: "New Proposal",
                      type: "textarea",
                      validation: {
                        required: true,
                      },
                      value: "",
                    },
                  ]}
                  onSubmit={(e) => {
                    alert("Proposal Submitted")
                  }}
                  title="Create a New Proposal"
                />



            </div>



          </Tab>
          <Tab tabKey={2} tabName="Forum"></Tab>
          <Tab tabKey={3} tabName="Docs"></Tab>
        </TabList>
      </div>
      <div className="voting"></div>
    </>
  );
};

export default Home;
