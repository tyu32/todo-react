import ajax from './ajax'
import jsonp from 'jsonp'

export const addCategory = (form) => {
    console.log("titleeee" + form);
    ajax.post('/Category', {
    form
})}
