import EventItem from './event-item';

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          location={event.location}
          image={event.image}
          date={event.date}
          title={event.title}
        ></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
