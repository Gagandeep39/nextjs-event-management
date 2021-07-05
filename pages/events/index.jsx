import { Fragment } from 'react';
import EventList from '../../components/events/event-list.jsx';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../data/dummy-data.js';

const AllEvents = () => {
  const allEvents = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEvents;
