import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap/';
import { MdEdit, MdCheck } from "react-icons/md";
import 'Styles/Profile/Components/ProfileTabs.css';
import BasicTab from './BasicTab';
import MedicalTab from './MedicalTab';
import DgcaTab from './DgcaTab';
import AccountsTab from './AccountsTab';

const ProfileTabs = () => {
    
    const [disableForm, setDisableForm] = useState(true);
    const [disableBasic, setDisableBasic] = useState(false);
    const [disableMedical, setDisableMedical] = useState(false);
    const [disableDgca, setDisableDgca] = useState(false);
    const [disableAccounts, setDisableAccounts] = useState(false);
    const [tabId, setTabId] = useState("basic");
    const [btn, setBtn] = useState(<Button variant="outline-danger" id={tabId} className="edit-btn">Edit &nbsp;<MdEdit/></Button>);

    /**
     * @hook useEffect
     * @params {tabId, disableForm}
     * This hook updates tabId for button rendering
     */
    useEffect(() => {
        if(disableForm) {
            setBtn(<Button variant="outline-danger" id={tabId} className="edit-btn">Edit &nbsp;<MdEdit/></Button>);
        } else {
            setBtn(<Button variant="outline-primary" id={tabId} className="edit-btn">Save &nbsp;<MdCheck/></Button>);    
        }
    },[tabId,disableForm])

    /**
     * @function handleEdit
     * @param {event}
     * This function disables unselected tabs during editing  
     */
    const handleEdit = (e) => {
        if(disableForm) {
            setDisableForm(false);
            switch (e.target.id) {
                case "basic":
                    setDisableBasic(false);
                    setDisableMedical(true);
                    setDisableDgca(true);
                    setDisableAccounts(true);
                    break;
                case "medical":
                    setDisableBasic(true);
                    setDisableMedical(false);
                    setDisableDgca(true);
                    setDisableAccounts(true);
                    break;
                case "dgca":
                    setDisableBasic(true);
                    setDisableMedical(true);
                    setDisableDgca(false);
                    setDisableAccounts(true);
                    break;
                case "accounts":
                    setDisableBasic(true);
                    setDisableMedical(true);
                    setDisableDgca(true);
                    setDisableAccounts(false);
                    break;
                default:
                    break;
            }
        } else {
            setDisableForm(true);
            setDisableBasic(false);
            setDisableMedical(false);
            setDisableDgca(false);
            setDisableAccounts(false);
        }
    }

     /**
     * @function handleSelect
     * @param {event}
     * This function sets state to active tab  
     */
    const handleSelect = (key) => {
        if(key){
            setTabId(key);
        }
    }



    return ( 
        <div>
            <Tabs defaultActiveKey="basic" id="profileTab" onSelect={handleSelect}> 
                <Tab eventKey="basic" title="Basic" disabled={disableBasic}>
                    <div className="d-flex btn">
                        <div className="ml-auto" onClick={handleEdit}>
                            {btn}
                        </div>
                    </div>
                    <div className="tab-bottom">
                        <BasicTab disableForm={disableForm} />
                    </div>
                </Tab>
                <Tab eventKey="medical" title="Medical" disabled={disableMedical}>
                    <div className="d-flex btn">
                        <div className="ml-auto" onClick={handleEdit}>
                            {btn}
                        </div>
                    </div>
                    <div className="tab-bottom">
                        <MedicalTab disableForm={disableForm}/>
                    </div>
                </Tab>
                <Tab eventKey="dgca" title="DGCA" disabled={disableDgca}>
                    <div className="d-flex btn">
                        <div className="ml-auto" onClick={handleEdit}>
                            {btn}
                        </div>
                    </div>
                    <div className="tab-bottom">
                        <DgcaTab disableForm={disableForm}/>
                    </div>
                </Tab>
                <Tab eventKey="accounts" title="Accounts" disabled={disableAccounts}>
                    <div className="d-flex btn">
                        <div className="ml-auto" onClick={handleEdit}>
                            {btn}
                        </div>
                    </div>
                    <div className="tab-bottom">
                        <AccountsTab disableForm={disableForm} />
                    </div>
                </Tab>
            </Tabs>
        </div>
     );
}
 
export default ProfileTabs;