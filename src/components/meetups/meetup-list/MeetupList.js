import classes from "./MeetupList.module.css";
import Meetupitem from "../meetup-item/Meetupitem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Meetupitem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
