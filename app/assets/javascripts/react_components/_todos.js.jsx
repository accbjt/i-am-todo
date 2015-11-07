var Todos = React.createClass({
  componentDidMount: function(){
    this.makeSortable();
  },
  makeSortable: function(){
    $('#todo-list').sortable({
      update: function(e){
        debugger
      }
    });
  },
  render: function () {
    var todos = this.props.todos;

    return (
      <ul id="todo-list">
        {todos.map(function(item, i){
          return <Todo key={i} todo={item} makeSortable={this.makeSortable} createData={this.createData} updateData={this.updateData}/>
        }.bind(this))}
      </ul>
    );
  }
});