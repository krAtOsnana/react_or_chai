```javascript
import {Link,NavLink} from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
Link ->  we use linnk in place of <a>
bcoz using <a> tag refresh your whole page
and in react we dont refresh our page
NOTE: in react we dont want to use <a> tag


<Link to="/">    //just like href in <a> we use to in <link> tag


  <NavLink to="/"
  className={({isActive}) =>  `b ${isActive ? "text-orange-700" : " text-grey-700"} ` }
   >
     Home
 </NavLink>                                   

// //navlink gives you the access of isActive variable 
// which tells you that the state of page 
// it matches with the url
// to make check that the page you are in is active or not

``````

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
