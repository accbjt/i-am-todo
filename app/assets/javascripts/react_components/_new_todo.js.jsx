var NewTodo = React.createClass({
  newTodo: function(e){ 
    if(this.refs.textBox.value){
      var jsonObject = {todo:{todo: this.refs.textBox.value}};

      this.props.createData(jsonObject, "todos");
      this.refs.textBox.value = '';
    }else{
      alert("Can't be Blank");
    }
  },
  render: function () {
    return (
      <div className="new-todo-section" >
        <input type="text" ref="textBox" />
        <div className="new-todo-button" onClick={this.newTodo}>Add Todo</div>
      </div>
    );
  }
});