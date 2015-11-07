var Todos = React.createClass({
  componentDidMount: function(){
    this.makeSortable();
  },
  makeSortable: function(){
    $('#todo-list').sortable({
      update: function(e){
        var sortedList = [];

        $(this.refs.list).children().each(function(item){
          sortedList.push(this.dataset.id);
        });

        this.props.sortData({sort_list:sortedList},"sort");
      }.bind(this)
    });
  },
  render: function () {
    var todos = this.props.todos;

    return (
      <ul ref="list" id="todo-list">
        {todos.map(function(item, i){
          return <Todo key={i} index={i} todo={item} makeSortable={this.makeSortable} createData={this.props.createData} updateData={this.props.updateData}/>
        }.bind(this))}
      </ul>
    );
  }
});