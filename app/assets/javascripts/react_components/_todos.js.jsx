var Todos = React.createClass({
  render: function () {
    var data = ["this is a message",2,3,4];
    return (
      <ul>
        {data.map(function(item, i){
          return <Todo key={i} todo={item}/>
        }.bind(this))}
      </ul>
    );
  }
});