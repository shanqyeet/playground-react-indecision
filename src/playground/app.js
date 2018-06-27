class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle: "This is the Indecision App",
            headrSubtitle: "Put your life in the hands of a computer",
            options:["first thing", "second thing", "third thing"],
        };
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleSingleDelete = this.handleSingleDelete.bind(this);
    }

    handleDeleteOption() {
        this.setState(() => {
            return {options: []};
        });
    }

    handleSingleDelete(e) {
        const optionContent = e.target.parentNode.firstChild.innerHTML;
        const index = this.state.options.indexOf(optionContent);
        this.setState((prevState) => { 
            prevState.options.splice(index, 1);
            return (
                {options: prevState.options}
                );
            }
        );
    }

    handlePick () {
        const pick = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(pick);
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (!option) {
            alert("Enter a valid value!");
        } else if (this.state.options.indexOf(option) > -1) {
            alert("This option alredy exists");
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat(option)}));
        }
        
    }
    render() {
        return (
            <div>
                <Header 
                    id="header" 
                    className="header-class" 
                    title={this.state.headerTitle} 
                    subtitle={this.state.headerSubtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    function={this.handleDeleteOption}
                    handleSingleDelete = {this.handleSingleDelete}
                />
                <AddOption function={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
          <div>
            <h1>{this.props.title }</h1>
            <h2>{this.props.subtitle}</h2>
          </div>  
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions} >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        const removeAll = "Remove All";
        return (
            <div>
                <button onClick={this.props.function}>Remove All</button>
                {this.props.options.map((option) => {
                    return <Option 
                    key={option} 
                    optionText={option}
                    handleSingleDelete = {this.props.handleSingleDelete}
                    />
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
                <button onClick={this.props.handleSingleDelete}>Remove</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.function}>
                    <input type="text" id="new-option" name="option"/>
                    <input type="submit" name="Add Option"/>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name:{props.name} </p>
            <p>Age: {props.age}</p>
        </div>
    );
};


// ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));