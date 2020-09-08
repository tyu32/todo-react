import ajax from './ajax'
import jsonp from 'jsonp'
import axios from 'axios';

export const addCategory = (data) => {
    console.log("titleeee" + data);
    ajax.post('/Category', {
        data
    })
};

export const deleteCategory = (data) => {
    console.log(data);
    // ajax.delete('/Category', {
    //     data
    // })
    // console.log("id: " + data);
    // ajax.delete('/Category', {
    //     data
    // })
    axios({
        method: 'delete',
        url: 'Category',
        data: {
            "id": data.id
        }
    })
};

export const deleteTask = (data) => {
    console.log(data);
    // ajax.delete('/Task', {
    //     data
    // })
    axios({
        method: 'delete',
        url: 'Task',
        data: {
            "id": data.TaskId
        }
    })
    
    
}
