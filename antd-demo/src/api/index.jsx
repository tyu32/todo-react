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
    axios({
        method: 'delete',
        url: 'Task',
        data: {
            "id": data.TaskId
        }
    }) 
};

export const addTask = (data) => {
    console.log(data);
    axios({
        method: 'post',
        url: 'Task',
        data: {
            "title": data.title,
            "note": data.note,
            "cId": data.cId
        }
    }) 
};

export const updateTask = (data) => {
    console.log(data);
    axios({
        method: 'put',
        url: 'Task',
        data: {
            "id": data.TaskId
        }
    }) 
};
