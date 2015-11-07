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
  handleEnterKey: function(e){
    if(e.keyCode === 13){
      this.newTodo();
    }
  },
  render: function () {
    return (
      <div className="new-todo-section" >
        <input type="text" ref="textBox" onKeyUp={this.handleEnterKey} />
        <div className="new-todo-button" onClick={this.newTodo} >Add Todo</div>
      </div>
    );
  }
});