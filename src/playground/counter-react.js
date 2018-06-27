class Counter extends React.Component {
    constructor(props){
        super(props);
        this.minusCount = this.minusCount.bind(this);
        this.addCount = this.addCount.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.state = {
            count: 0
        }
    }
   
    minusCount(){
        this.setState((prevState)=> { return {count: prevState.count - 1};});
    }

    addCount(){
        this.setState((prevState) => { return {count: prevState.count + 1};});
    }

    clearAll(){
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        let count = 0;
        return (
            <div>
                <h1>counter: {this.state.count}</h1>
                <button onClick={this.minusCount}>-1</button>
                <button onClick={this.addCount}>+1</button>
                <button onClick={this.clearAll}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();