var TodoApp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  updateData: function(data, endpoint, id){
    debugger
    $.ajax({
          url: 'http://localhost:3000/'+endpoint+"/"+id,
          type: 'PUT',
          dataType: 'json',
          success: function (data) {
            
          },
          data: data
      });
  },
  createData: function(data, endpoint){
    debugger
   $.ajax({
        url: 'http://localhost:3000/'+endpoint,
        type: 'post',
        dataType: 'json',
        success: function (data) {
          
        },
        data: data
    });
  },
  render: function () {
    return (
      <div>
        <div className="todo-container">
          <h2>List of Todos</h2>
        	<Todos todos={this.state.todos} createData={this.createData} updateData={this.updateData}/>
        </div>
        <div className="new-todo-container">
          <NewTodo createData={this.createData} updateData={this.updateData} />
        </div>
      </div>
    );
  }
});