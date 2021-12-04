import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../../ui/Card";

function NewMeetupForm(props) { 
const titleInputRef =useRef();
const imageInputref=useRef();
const addressInputref=useRef();
const descriptionInputref=useRef();
// using "useRef" hook to catch data input into element
    
    function SubmitHandler(event){
        event.preventDefault();
// storing the obtained current value in new constants
        const enteredTitle=titleInputRef.current.value
        const enteredImage=imageInputref.current.value
        const enteredAddress=addressInputref.current.value
        const entereddescription=descriptionInputref.current.value 

    //  finally storing all data entered in a single object , thsi will be sent to database
    const meetupdata={
        title:enteredTitle,
        image:enteredImage,
        address:enteredAddress,
        description:entereddescription
    };
    // console.log(meetupdata);
    

    }
  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="file" required id="image" ref={imageInputref}/>
          {/* note url accepts only an image that is laready present on web ,new image cannot be uploaded  */}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required row="5" ref={descriptionInputref}></textarea>
        </div>
        <div className={classes.actionsleft}>
          <input type="reset" />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
