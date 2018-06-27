import React, {Component} from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
    state = {
        headerTitle: "This is the Indecision App",
        headerSubtitle: "Put your life in the hands of a computer",
        options:["first thing", "second thing", "third thing"],
        selectedOption: undefined,
    };

    closeModal = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    }


    handleDeleteOption= () => {
        this.setState(() => ({options: []}));
    };

    handleSingleDelete = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove != option)
        }));
    };

    handlePick = () => {
        const pick = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({
            selectedOption: pick 
        }));  
    };

    handleAddOption = (option) => {
        if (!option) {
            alert("Enter a valid value!");
        } else if (this.state.options.indexOf(option) > -1) {
            alert("This option alredy exists");
        } 
    
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
        
    };

    componentDidMount() {
        try {
            const json = localStroage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };


    render() {
        return (
            <div>
                <Header  
                    subTitle={this.state.headerSubtitle}
                />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options} 
                        handleDeleteOption={this.handleDeleteOption}
                        handleSingleDelete = {this.handleSingleDelete}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />    
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default IndecisionApp
