const events = [];


export default events;

const baseUrl = "https://625ac031398f3bc782a5bba2.mockapi.io/events"

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat Eevent')
    } 
  });
};

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(eventsList => events = eventsList);
};

export const updateEvent = (eventId, eventData) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat Event')
    }
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete Event')
    } 
  });
}