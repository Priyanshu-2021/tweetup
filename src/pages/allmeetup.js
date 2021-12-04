import MeetupList from "../components/meetups/meetup-list/MeetupList";

import { DUMMY_DATA } from '../models/meetups/DummyData'

function Allmeetup() {
  return (
    <section>
      <h1> All Meetups </h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>

  );
}

export default Allmeetup;
