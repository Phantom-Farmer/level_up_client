import { clientCredentials } from '../client';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    body: JSON.stringify(event),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getSingleEvent = (eventId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updateEvent = (data, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export {
  getEvents,
  createEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
