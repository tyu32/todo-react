import React from 'react';
import { Button } from 'antd';
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { addCategory } from '../api';

class Home extends React.Component {
    state = { redirect: null }
    addCategory() {
        this.setState({redirect: "/addCategory"})
    }
    render() {
        
        if (this.state.redirect) {
            console.log("redirect");
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <Button type="primary" onClick={addCategory}>Category</Button>
            </div >
        )
    }
}
// const onClickAdd = () => {
//     <Redirect to='/addCategory' />
// }
// function onClick() {
//     console.log("hhh");
//     render() {
//          <Redirect to='/addCategory' />
//     } 
// }
// function Home () {

//     <div>
//     <Button type="primary" >Category</Button>
//     </div >
//     return (null)
// };


// const Home = () => {

//     let history = useHistory();

//     const routeChange = () => {
//         let path = "/Category";
//         history.push("/Category");
//     }

//     return (
//         <div className="app flex-row align-items-center">
//             <Button type="primary" onClick={routeChange}>Category</Button>
//         </div>
//     );
// }

export default Home;