import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
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
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter data</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events.</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events found with current filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events.</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEvents;
