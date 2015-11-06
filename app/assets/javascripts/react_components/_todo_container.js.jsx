var TodoApp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  render: function () {
    return (
      <div className="todo-container">
        <h2>Todo List</h2>
      	<Todos todos={this.state.todos} />
      </div>
    );
  }
});
