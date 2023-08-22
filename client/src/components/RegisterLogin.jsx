import { useState } from 'react'
import './RegisterLogin.css'

function RegisterLogin(props) {
    //Initialize state for my form field
    const [form, setForm] = useState ('');

    const handleChange = (e) => {
        // handle key presses
        //Update state of form field
        setForm(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        props.getFormCb(form);
        setForm('');
      };

    return (
        
        <div className='RegisterLogin'>

              <h1>Register your account</h1>

                 <h2>Enter your details below</h2>
                 
            <form onSubmit = {handleSubmit}>
                <label>
                    Please enter your first and lastname:
                    <input
                       type='text'
                       value={form}
                       onChange={handleChange}
                       />
                </label>
                <label>
                    Please upload your Image URL:
                  <input
                      type='text'
                      name="imageUrl"
                       value={form.imageUrl}
                    onChange={(e) => handleChange(e)}
                   />
                </label>

                <div className="span-2-cols" style={{ textAlign: 'center'}}>
                <button type='submit'>Enter</button>
                </div>

            </form>

            <h1>Please Login</h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    Please enter your first and lastname:
                    <input
                       type='text'
                       value={form}
                       onChange={handleChange}
                       />
                </label>
                <button type='submit'>Go to Profile</button>
                </form>
        </div>
    );

}




export default RegisterLogin;