import React, { useState } from "react";
import { JAppContainer, JAppWrapper, JAppDescBox, JAppTitle, JAppDesc, JAppRegForm, Label, JAppName, JAppEmail, JAppPhone, JAppExperience, FName, LName, SendBtnWrapper, ResumeUpload, UploadBtnlabel} from './JobApplyElements'
import {Button} from '../ButtonElement'

// this.handleSubmit = this.handleSubmit.bind(this);






const initVals = {
    first_name:"",
    last_name:"",
    phone:"",
    email:"",
    experience:""

}


const JobApply = () => {

    const [values, setValues] = useState(initVals);
 
    const handleSubmit = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
        
        console.log(values.first_name);

    }


const state = {

        selectedFile: null
};
      
const onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
      
};


    return (
        <>
            <JAppContainer>
                <JAppWrapper>
                    <JAppDescBox>
                        <JAppTitle>Drive for Us</JAppTitle>
                        <JAppDesc>We are always looking for LONG HAUL Cross-Border Single and Team A-Z Truck Drivers to serve FTL and LTL irregular routes throughout Canada and USA. Please fill in required information and we will get back to you</JAppDesc>
                    </JAppDescBox>
                    <JAppRegForm>
                        <Label>Name*</Label>
                        <JAppName>
                            <FName name="firstName" placeholder="firstname" value={values.first_name} onChange={handleSubmit}></FName>
                            <LName name="lastName" placeholder="lastname"  onChange={handleSubmit}></LName>
                        </JAppName>
                        <Label>Email*</Label>
                        <JAppEmail placeholder="johndoe@email.com"></JAppEmail>
                        <Label>Phone*</Label>
                        <JAppPhone type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></JAppPhone>
                        <Label>Experience</Label>
                        <JAppExperience placeholder="0 months">
                            <option value="a">0 - 6 months</option>
                            <option value="b">1 year</option>
                            <option value="c">2 years</option>
                            <option value="d">2+ years</option>
                        </JAppExperience>
                        <Label>Upload Resume</Label>
                        <ResumeUpload type="file" id="uploadBtn" hidden></ResumeUpload>
                        <UploadBtnlabel for="uploadBtn">Choose File</UploadBtnlabel>
                        <SendBtnWrapper>
                            <Button onClick={handleSubmit}>Send</Button>
                        </SendBtnWrapper>                        
                    </JAppRegForm>
                </JAppWrapper>
            </JAppContainer>
        </>
    )
}

export default JobApply
