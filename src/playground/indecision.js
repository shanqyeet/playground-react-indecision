
console.log('App.js is running!');
// JSX - Javascript XML

const app = {
    title: "this is the main title now",
    subtitle: "this is the new subtitle now",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormChange();
    }
};

const removeAll = () => {
    app.options = [];
    renderFormChange();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderFormChange = () => {
    const template = (
    <div>
        <h1>{app.title} Fuck it</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
        <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol> 
            {app.options.map(function(option){
                return <li> {option}</li>
            })}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderFormChange();



