var REACT;
var TodoApp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  updateData: function(data, endpoint, id, index){
    REACT = this;
    REACT['updateDataIndex'] = index;

    $.ajax({
          url: 'http://localhost:3000/'+endpoint+"/"+id,
          type: 'PUT',
          dataType: 'json',
          success: function (data) {
            var newState = REACT.state.todos;

            if(!data.active){
              newState.splice(REACT.updateDataIndex, 1);
            }else{
              newState.splice(REACT.updateDataIndex, 1, data);
            }

            REACT.setState({todos:newState});
            REACT = null;
          },
          data: data
      });
  },
  createData: function(data, endpoint){
    REACT = this;

    $.ajax({
        url: 'http://localhost:3000/'+endpoint,
        type: 'post',
        dataType: 'json',
        success: function (data) {
          var newState = REACT.state.todos

          newState.push(data);
          REACT.setState({todos:newState});
          REACT = null;
        },
        data: data
    })
  },
  sortData: function(data, endpoint){
    REACT = this;

    $.ajax({
        url: 'http://localhost:3000/'+endpoint,
        type: 'patch',
        dataType: 'json',
        success: function (data) {
        },
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