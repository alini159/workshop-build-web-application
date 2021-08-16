import ApiService from "../api.service";

const Tasks = {
    lists: () => ApiService.get('tasks/v1/users/@me/lists?key=AIzaSyAfC2Y5-60uOPrcZzyXPjzZ32q591Z8jog'), 
};
export default Tasks; 