class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {items: []}
  }

  handelAddItem(item){
    var newState = this.state.items.concat(item); 
    this.setState({ items: newState })
  }

  handleDeleteItem(id){
    $.ajax({ 
      url: '/api/v1/items/'+id, 
      type: 'DELETE', 
      success: (response) => { 
        console.log('it worked!', response);
        var newItems = this.state.items.filter((item) => { 
          return item.id != id; 
        });
        this.setState({items: newItems});
      } 
    });
  }

  componentDidMount(){
    $.getJSON('/api/v1/items.json',(response) => {this.setState({ items: response })});
  }

  render () {
    return (<div>
        <NewItem handelAddItem = {this.handelAddItem.bind(this)} />
        <AllItems items={this.state.items} handleDeleteItem ={this.handleDeleteItem.bind(this)}/>
      </div>
    );
  }
}


