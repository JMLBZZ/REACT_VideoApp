import React, {Component} from'react';

export default class SearchBar extends Component{
    state = {term:""}

    onChange = (e) =>{
        this.setState({term:e.target.value})
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="card mb-3">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="nom">Rechercher une vidéo</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg"
                                value={this.state.term}
                                onChange={this.onChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}







