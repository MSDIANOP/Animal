function Navbar(){
    return <>
    <h1>This is a Navbar</h1>
    <button>Click me</button>
    </>
}
function Content(){
    let arr=["apple","banana","mango","grapes"]
  
    return <>
    <h2>This is Content</h2>
    <ul>
       { 
       arr.map(function(ele){
        return <li>{ele}</li>
       })
    }
    </ul>
    </>
}
function Footer(){
    return <>
    <h3>This is Footer</h3>
    </>
}
function App(){
    return <>
    <Navbar/>
    <Content/> 
    <Footer/>
  
    </>
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);