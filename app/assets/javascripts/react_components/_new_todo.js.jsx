var NewTodo = React.createClass({
  render: function () {
    return (
      <div className="new-todo-section" >
        <input type="text" />
        <div className="new-todo-button">Add Todo</div>
      </div>
    );
  }
});