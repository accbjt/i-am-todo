var NewTodo = React.createClass({
  newTodo: function(e){ 
    debugger
  },
  render: function () {
    return (
      <div className="new-todo-section" >
        <input type="text" />
        <div className="new-todo-button" onClick={this.newTodo}>Add Todo</div>
      </div>
    );
  }
});