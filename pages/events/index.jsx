import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list.jsx';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../data/dummy-data.js';

const AllEvents = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  function onSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default AllEvents;
