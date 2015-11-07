var Todo = React.createClass({
	checkBoxClick: function(e){
		if(e.currentTarget.checked){
			var jsonObject = {todo:{done:true}};

			this.props.updateData(jsonObject,"todos",this.props.todo.id, this.props.index)
			this.refs.todoText.style.textDecoration = "line-through";
			this.refs.todoText.style.opacity = "0.3";
		}else{
			var jsonObject = {todo:{done:false}};

			this.props.updateData(jsonObject,"todos",this.props.todo.id, this.props.index)
			this.refs.todoText.style.textDecoration = "";
			this.refs.todoText.style.opacity = "1.0";
		}
	},
	editTodo: function(e){
		this.refs.todoInput.value = this.refs.todoText.innerHTML;
		$(e.currentTarget).siblings('input[type="text"]').show().focus();
		$(e.currentTarget).hide();
	},
	resetEntry: function(e){
		$(e.currentTarget).hide();
		$(e.currentTarget).siblings('span').show();
	},
	updateEntry: function(e){
		var jsonObject = {todo:{todo:this.refs.todoInput.value}}
		
		switch (e.nativeEvent.type) {
	    case "keyup":
        if(e.keyCode === 13){
        	this.props.updateData(jsonObject,"todos",this.props.todo.id, this.props.index);
        	this.resetEntry(e);
        }
        break;
	    case "blur":
	    	this.refs.todoInput.value = this.refs.todoText.innerHTML
        this.resetEntry(e);
        break;
		}
	},
	destroyEntry: function(e){
		var jsonObject = {todo: {active:false}}
		this.props.updateData(jsonObject, "todos", this.props.todo.id, this.props.index);
	},
	isDone: function(){
		return this.props.todo.done ? {textDecoration : "line-through", opacity : "0.3" } : {}
	},
  render: function () {

    return (
      <li className="todo" data-id={this.props.todo.id} >
        <input type="checkbox" onClick={this.checkBoxClick} defaultChecked={this.props.todo.done}/>
        <input type="text" ref="todoInput" defaultValue={this.props.todo.todo} onBlur={this.updateEntry} onKeyUp={this.updateEntry} />
        <span ref="todoText" onClick={this.editTodo} style={this.isDone()}>{this.props.todo.todo}</span>
        <div className="delete" onClick={this.destroyEntry}>x</div>
      </li>
    );
  }
});