import ApiService from "../api.service";

const Tasks = {
    lists: () => ApiService.get('tasks/v1/users/@me/lists?key=AIzaSyAfC2Y5-60uOPrcZzyXPjzZ32q591Z8jog'), 
    listItems: (taskslistId) => ApiService.get(`tasks/v1/lists/${taskslistId}/tasks?key=AIzaSyAfC2Y5-60uOPrcZzyXPjzZ32q591Z8jog`),
    insertItem: (params) => ApiService.post(`tasks/v1/lists/${params.taskslistId}/tasks?key=AIzaSyAfC2Y5-60uOPrcZzyXPjzZ32q591Z8jog`, params),
};
export default Tasks; 