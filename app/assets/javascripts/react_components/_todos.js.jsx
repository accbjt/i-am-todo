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
    var data = ["This is a Message",2,3,4];
    return (
      <ul id="todo-list">
        {data.map(function(item, i){
          return <Todo key={i} todo={item} makeSortable={this.makeSortable} />
        }.bind(this))}
      </ul>
    );
  }
});