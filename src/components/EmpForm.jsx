import React, { Component } from 'react';

class EmpForm extends Component {
    constructor(props){
        super()
        this.state={
            ename:'',
            email:'',
            gender:'select',
            formErrors:{}
        }
        this.initialState=this.state;
    }
    handlesValidations(){
        const {ename,email,gender}=this.state;
        let formErrors={};
        let isFormValid=true;

        //ename
        if(!ename){
            isFormValid=false;
            formErrors["enameErr"]="Ename is Mandatory";
        }

        //email
        if(!email){
            isFormValid=false;
            formErrors["emailErr"]="Email is Mandatory";
        }
        else if(!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/.test(email))){
            isFormValid=false;
            formErrors["emailErr"]="invalid email";
        }

        //gender
        if(gender===''|| gender==='select'){
            isFormValid=false;
            formErrors["genderErr"]="pl. select your gender"
        }
        this.setState({formErrors:formErrors});
        return isFormValid;
    }

    handleChange=(e)=>{
        const {name, value}=e.target
        this.setState({[name]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.handlesValidations()){
            console.log(this.state);
            this.setState(this.initialState);
        }
    }

    render() {
        const {enameErr, emailErr, genderErr}=this.state.formErrors;
        return (
            <div>
                <h2 style={{color:'red', textAlign:'center'}}>VALIDATION FORM</h2>
                <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">ENAME</label>
                <input type="text" name="ename" value={this.state.ename}
                    onChange={this.handleChange} placeholder='Enter your name...'
                    className={enameErr?'showError':''} />
                    {enameErr && <div style={{color:'red'}}>{enameErr}</div>}
                    <br /><br />

                <label htmlFor="">EMAIL</label>
                <input type="text" name="email" value={this.state.email}
                    onChange={this.handleChange} placeholder='Enter your email...'
                    className={emailErr?'showError':''} />
                    {emailErr && <div style={{color:'red'}}>{emailErr}</div>}
                    <br /><br />

                <label htmlFor="">GENDER</label>
                <select name="gender" value={this.state.gender}
                    onChange={this.handleChange}
                    className={genderErr?'showError':''}>
                    <option value="select">--SELECT--</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                {genderErr && <div style={{color:'red'}}>{genderErr}</div>}
                <br /><br />
                <button type='submit' className='btn btn-success'>submit</button>
                </form>
            </div>
        );
    }
}

export default EmpForm;