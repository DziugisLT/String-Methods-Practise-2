'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const events = flights.split('+');
// console.log(events);

const getCountry = (str) => str.slice(0, 3).toUpperCase();

for (const event of events) {
  const eventData = event.slice(1).replaceAll('_', ' ').split(';');
  // console.log(eventData);
  const [eventName, from, to, time] = eventData;
  const announcement = `${
    eventName.includes('Delayed') ? '🔴 ' + eventName : eventName
  } from ${getCountry(from)} to ${getCountry(to)} (${time.replace(':', 'h')})`;
  console.log(announcement.padStart(44, ' '));
}
