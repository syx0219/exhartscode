import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Main from '../pages/main';
import Global from '../pages/global';
import Good from '../pages/good';
import Mask from '../pages/mask';
import Page404 from '../pages/page404';
import Header from '../components/common/header';
import List from '../pages/list';
import Item from '../pages/item';
import Cart from '../pages/cart';
import Login from '../pages/login';
import Center from '../pages/center';
const App =()=>(
    <BrowserRouter>
        <div>
            <div>
                <Header />
            </div>
            <div className="qcs-content">
                <Route path="/" exact={true} component={Main}></Route>
                <Route path="/mask" component={Mask}></Route>
                <Route path="/good" component={Good}></Route>
                <Route path="/global" component={Global}></Route>
                <Route path="/list" component={List} />
                <Route path="/item" component={Item} />
                <Route path="/cart" component={Cart} />
                <Route path="/center" component={Center} />
                <Route path="/login" component={Login} />
                <Route path="/page404" component={Page404}></Route>
            </div>
        </div>
    </BrowserRouter>
)
export default App;