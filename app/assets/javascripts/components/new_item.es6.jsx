class NewItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {name: "", description: "", amount: ""}
    //this.handleNameChange = this.onChange.bind(this)
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleDescriptionChange(e){
    this.setState({description: e.target.value});
  }

  handleItemCostChange(e){
    this.setState({amount: e.target.value});
  }

  renderItemNameField(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= 'form-group'>
            <input name="name" type="text" placeholder="Enter Name" onChange={this.handleNameChange.bind(this)} className="form-control" />
          </div>
        </div>
      </div>
    );
  }

  renderDescriptionField(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= 'form-group'>
          <textarea name="description" placeholder="Enter Description" onChange={this.handleDescriptionChange.bind(this)} className="text form-control"/>
          </div>
        </div>
      </div>
    );
  }

  renderItemCostField(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= 'form-group'>
            <input name="amount" type="number" placeholder="Enter Item Cost" onChange={this.handleItemCostChange.bind(this)} className="numeric decimal form-control"/>
          </div>
        </div>
      </div>
    );
  }

  handleClick(){
    const name = this.state.name;
    const desc = this.state.description;
    const amount = this.state.amount;
    $.ajax({ 
      url: '/api/v1/items', 
      type: 'POST', 
      data: { 
        item: { name: name, description: desc, amount: amount } 
      }, 
      success: (response) => { 
        console.log('it worked!', response);
        this.setState({name: "", description: "", amount: ""})
        this.props.handelAddItem(response);
      } 
    });

  }

  render () {
    return( 
        <div>
          <h4> Create New Item </h4>
            <div className='form-inputs'/>
    
              {this.renderItemNameField()}
  
              {this.renderDescriptionField()}
  
              {this.renderItemCostField()}
  
  
              <div className='row'>
                <div className='col-sm-4'>
                  <input type="button" value="Save" className='btn btn-primary' onClick= {this.handleClick.bind(this)}/>
                </div>
              </div>
  
        </div>
    );
  }
}


