const baseUrl = "https://623d57ac7efb5abea68cf7da.mockapi.io/api/v1/events"

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat task')
    } 
  });
};



export const updateTask = (taskId, TaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(TaskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Fail to creat task')
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task')
    } 
  });
}
const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2022, 3, 15, 10, 15),
    dateTo: new Date(2022, 3, 15, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2022, 3, 16, 10, 15),
    dateTo: new Date(2022, 3, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2022, 3, 17, 10, 30),
    dateTo: new Date(2022, 3, 17, 11, 30),
  },
  {
    id: 3,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2022, 3, 25, 10, 30),
    dateTo: new Date(2022, 3, 25, 11, 0),
  },
];


export default events;
