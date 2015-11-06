var TodoApp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  render: function () {
    return (
      <div>
        <div className="todo-container">
        	<Todos todos={this.state.todos} />
        </div>
        <div className="new-todo-container">
          <NewTodo />
        </div>
      </div>
    );
  }
});
