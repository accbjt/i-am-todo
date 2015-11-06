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
  render: function () {
    return (
      <li className="todo">
        <input type="checkbox" onClick={this.checkBoxClick} />
        <span ref="todoText">{this.props.todo}</span>
      </li>
    );
  }
});