const container = document.querySelector('#root')
 
function customRender(element,container){
    const div = document.createElement(element.type)
    div.innerHTML=element.children
    for (const attri in element.props) {
        if(attri==="children")continue;
        div.setAttribute(attri,element.props[attri])
    }
    container.appendChild(div)
}


const reactElement={
        type:"a",
        props:{
         href:"https://google.com"
        },
        children:"hellow custom React"
}
 customRender(reactElement,container)