import React from 'react'

class BadgeForm extends React.Component{
    // state = {
        
    // };

    // handleChange = (e) => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });
    //     this.setState({
    //         [e.target.name]: e.target.value, //reconoce del lado izquierdo el campo que se lleno y lo guarda en el campo adecuado del lado derecho
            
    //     })
    // }

    // handleClick = (e) => {
    //     console.log("El boton fue pulsado");
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("El form se activo");
    //     console.log(this.state);
    // }

    render(){
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group">
                        <label >Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label >E-mail</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>

                    <div className="form-group">
                        <label >Job Tittle</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>

                    <div className="form-group">
                        <label >Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;