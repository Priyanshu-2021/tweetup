import Meetupitem from "../components/meetups/Meetupitem";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function Allmeetup() {
  return (
    <section>
      <h1> All Meetups </h1>
           <MeetupList meetups={DUMMY_DATA}/>  

      {/* <ul>   {DUMMY_DATA.map((parameter) => {return <li>{parameter.title}</li>})} </ul> */}
    </section>

    //   we are using arrow function "() => {}"
    // <section> {[<li>item1</li>,<li>item2</li>,<li>item3</li>]}   // </section>
  );
}

export default Allmeetup;
