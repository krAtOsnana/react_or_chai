import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>hellow react!!</h1>
            <h4>*javaScript</h4>
        </div>
    )
    /**
     * whatever we write in this syntax at the end of the day it will parsed into object like tree structuree
     *  like this-> eg..const reactElement={
        type:"a",
        props:{
         href:"https://google.com"
        },
        children:"hellow custom React"
        }
        but writing this custon class wont work
        because we use our custon key-value pair name 
        and convention
        we have to follow the coding convention of react library
        and when we directly write object 
        to run this we use syntax
        reactElement not reactElement() or <reactElement/>
        beacuse this is class and not a function
     */
}


const AnotherElement=(
        <a href='https://google.com' target='_blank'> visit google </a>
        //
)

const reactElement=(
    'p',
     {},//attributes
    "lorem50"
    //variable injection
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {reactElement} 
    {AnotherElement} 
    <App/>
 </div>
    //MyApp()         //since MyApp is a function thats why we can also run like this
                    //but we dont wse this syntax bcoz of optimization and code convention
    )
//****NOTE */

//{AnotherElement} -->evaluated expression
//evaluated expression --> final outcome not some if( ) or for()