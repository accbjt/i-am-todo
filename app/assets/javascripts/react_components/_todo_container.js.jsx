var REACT;
var TodoApp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  updateData: function(data, endpoint, id, index){
    this['updateDataIndex'] = index;

    $.ajax({
          url: 'http://localhost:3000/'+endpoint+"/"+id,
          type: 'PUT',
          dataType: 'json',
          success: function (data) {
            var newState = this.state.todos;

            if(!data.active){
              newState.splice(this.updateDataIndex, 1);
            }else{
              newState.splice(this.updateDataIndex, 1, data);
            }

            this.setState({todos:newState});
          }.bind(this),
          data: data
      });
  },
  createData: function(data, endpoint){

    $.ajax({
        url: 'http://localhost:3000/'+endpoint,
        type: 'post',
        dataType: 'json',
        success: function (data) {
          var newState = this.state.todos

          newState.push(data);
          this.setState({todos:newState});
        }.bind(this),
        data: data
    })
  },
  sortData: function(data, endpoint){

    $.ajax({
        url: 'http://localhost:3000/'+endpoint,
        type: 'patch',
        dataType: 'json',
        success: function (data) {
        }.bind(this),
        data: data
    })
  },
  render: function () {

    return (
      <div>
        <div className="todo-container">
          <h2>List of Todos</h2>
        	<Todos todos={this.state.todos} createData={this.createData} updateData={this.updateData} sortData={this.sortData} />
        </div>
        <div className="new-todo-container">
          <NewTodo createData={this.createData} updateData={this.updateData} />
        </div>
      </div>
    );
  }
});