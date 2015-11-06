var Todo = React.createClass({
	checkBoxClick: function(e){
		if(e.currentTarget.checked){
			this.refs.todoText.style.textDecoration = "line-through";
			this.refs.todoText.style.opacity = "0.3";
		}else{
			this.refs.todoText.style.textDecoration = "";
			this.refs.todoText.style.opacity = "1.0";
		}
	},
	editTodo: function(e){
		$(e.currentTarget).siblings('input[type="text"]').show().focus();
		$(e.currentTarget).hide();
	},
	resetEntry: function(e){
		$(e.currentTarget).hide();
		$(e.currentTarget).siblings('span').show();
	},
	updateEntry: function(e){
		switch (e.nativeEvent.type) {
	    case "keyup":
        if(e.keyCode === 13){
        	this.resetEntry(e);
        }
        break;
	    case "blur":
        this.resetEntry(e);
        break;
		}
	},
	destroyEntry: function(e){
		debugger
	},
  render: function () {
    return (
      <li className="todo">
        <input type="checkbox" onClick={this.checkBoxClick} />
        <input type="text" defaultValue={this.props.todo} onBlur={this.updateEntry} onKeyUp={this.updateEntry} />
        <span ref="todoText" onClick={this.editTodo}>{this.props.todo}</span>
        <div className="delete" onClick={this.destroyEntry}>x</div>
      </li>
    );
  }
});