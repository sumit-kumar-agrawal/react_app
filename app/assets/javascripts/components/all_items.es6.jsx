class AllItems extends React.Component {

  constructor(props){
    super(props);
  }

  handleDelete(itemId){
    this.props.handleDeleteItem(itemId);
  }

  render () {
    var items= this.props.items.map((item) => { 
      return ( 
        <div className="row" style={{marginTop: "20px"}} key={item.id}>

          <div className="col-sm-2">
            <button className='btn btn-sm btn-primary'>Edit</button>&nbsp;<button className='btn btn-sm btn-primary' onClick= {this.handleDelete.bind(this,item.id)}>Delete</button>
          </div>

          <div className="col-sm-2">
            {item.name}
          </div>

          <div className="col-sm-4">
            {item.description}
          </div>

          <div className="col-sm-2">
            {item.amount}
          </div>

        </div>
      )
    });


    return (<div> 
              <h1>All items component</h1>
              <div>

              <div className="row" style={{marginTop: "50px"}}>

                <div className="col-sm-2">
                  Action
                </div>

                <div className="col-sm-2" style={{fontWeight: "bold"}}>
                  Name
                </div>

                <div className="col-sm-4" style={{fontWeight: "bold"}}>
                  Description
                </div>

                <div className="col-sm-2" style={{fontWeight: "bold"}}>
                  Amount
                </div>
              </div>
              {items}
              </div>
            </div>
    );
  }
}


