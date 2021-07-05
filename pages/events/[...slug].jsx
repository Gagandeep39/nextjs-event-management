import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list.jsx';
import { getFilteredEvents } from '../data/dummy-data';

const FilteredEvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const year = +filteredData[0];
  const month = +filteredData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    month < 1 ||
    month > 12 ||
    year < 2020 ||
    year > 2030
  ) {
    return <p className="center">Invalid Filter data</p>;
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events found with current filter</p>;
  }

  return (
    <div>
      <h1>Filtered Events</h1>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
