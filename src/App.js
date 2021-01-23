import React from 'react';
import './App.css';

function Header(props){
    return(
        <header className="header">
            <h1>welcome to cars App</h1>
        </header>
    );
}

function Footer(props){
    return(
        <footer className={props.cls}>
            <h3>web site : <a href='#'>www.cras.com</a></h3>
            <h3>phone : <a href='#'>+963511522533</a></h3>
        </footer>
    )
}

function Snack(props){
    return (
        <li>
            <h4>ID : {props.snack.id}</h4>
            <h4>Name: {props.snack.name}</h4>
            <h4>Model: {props.snack.model}</h4><br></br>

        </li>
    )
}

function CarList(props){
    return(
        <main className="main">
            <h2>cars List</h2>
            <ul>
                { props.carsList.map( (snack) => <Snack snack={snack} />) }
            </ul><br></br>

            <h3>Number of cars: {props.carsList.length}</h3><br></br>


        </main>
    )
}

class CarForm extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name:"",
            model:"",
        };

        this.handleChange = this.handleChange.bind(this); // Configuration
        this.handleChange1 = this.handleChange1.bind(this); // Configuration
        this.handleSubmit = this.handleSubmit.bind(this); // Configuration
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> {this.props.title}
                    <input type="text" name='name' onChange={this.handleChange}></input>
                </label> <br></br>

                <label>Car model 
                    <input type="text" name='model' onChange={this.handleChange1} ></input>
                </label><br></br>

                <input type="submit" value="Add" /><br></br><br></br>


            </form>
        )
    }

    handleChange(event){
        console.log("Change Happened!!!");
        console.log(event.target.value);
        this.setState({name: event.target.value});
        // this.setState({model: event.target.value});
    }
    
    handleChange1(event){
        this.setState({model: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.model);
        this.props.onSnackCreate(this.state);
    }
}

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            cars: [
                {
                    id: 1,
                    name: "BMW",
                    model: "X5"
                },
                {
                    id: 2,
                    name: "MERSEDES",
                    model: "G class"
                },
                {
                    id: 3,
                    name: "Firari",
                    model: "F8"
                }
            ],
            // counter: 0
        };
        this.handleCreateCar = this.handleCreateCar.bind(this);
    }

    handleCreateCar(snack){
        let newcar = this.state.cars;
        newcar.push({id: this.state.cars.length+1, name: snack.name, model: snack.model});
        this.setState({cars: newcar});
    }

    render(){
        return(
            <div className="App">
                {/* <h2>{this.state.counter}</h2>
                <button onClick={() => this.setState({counter: this.state.counter+1}) }>Increment</button> */}

                <Header />
                <CarList carsList={this.state.cars}/>
                <h1>Would you like to add a new car ? </h1>
                <CarForm title="Car name "  onSnackCreate= { (snack) => this.handleCreateCar(snack) } />
                <Footer cls="footer" />
            </div>
        );
    }
}

export default App;