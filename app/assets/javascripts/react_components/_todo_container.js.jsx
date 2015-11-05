var TodoApp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },
  render: function () {
    return (
      <div className="todo-container">
      	<Todo todos={this.state.todos} />
      </div>
    );
  }
});
