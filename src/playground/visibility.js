class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.visibilityToggle = this.visibilityToggle.bind(this);
        this.state = {
            visibility: true,
            buttonText: "Make it Invisible!!",
        }
    }

    visibilityToggle(){
        if (this.state.visibility) {
            this.setState((prevState)=> {
                    return { 
                        visibility: !prevState.visibility,
                        buttonText: "Make it Visible!!!!",
                    };
                }
            );
        } else {
            this.setState((prevState)=> { 
                    return {
                        visibility: !prevState.visibility,
                        buttonText:"Make it Invisible!!",
                    };
                }
            );
        }
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.visibilityToggle}>{this.state.buttonText}</button>
                { this.state.visibility && <p>This is a bunch of text that I've inteded to make it invisible!!!</p> }
            </div>
        );
    }   
}

ReactDOM.render(<Visible/>, document.getElementById('app'))


// console.log("app.js is running!");

// const app = {
//     buttonVisible: "Make it Invisible!",
//     buttonInvisible: "Make it Visible!",
//     toggle: true,
//     hidingText: "This is a bunch of text that I've intended to make it invisible!!!! Woohoooooooooo :D"
// }

// const rootApp = document.getElementById('app');

// const toggleVisible = () => {
//     // app.toggle == true ? app.toggle = false : app.toggle = true;
//     // console.log(app.toggle);
//     app.toggle = !app.toggle
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisible}>{app.toggle ? app.buttonVisible : app.buttonInvisible}</button>
//             {app.toggle && <p>{app.hidingText}</p>}
//         </div>
//     );

//     ReactDOM.render(template,rootApp);
// };

// render();