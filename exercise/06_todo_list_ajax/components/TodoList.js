var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        { id: 1, text: 'buy1', done: false },
        { id: 2, text: 'buy11', done: false },
        { id: 3, text: 'buy22', done: true },
      ],
    };
  },
  addItem: function (text) {
    var item = {
      id: this.state.list.length + 1,
      text: text,
      done: false,
    };
    this.setState({
      list: this.state.list.concat(item),
    });
  },
  toggleItem: function (id) {
    var list = this.state.list.map(function (item) {
      return (item.id !== id) ? item : {
        id: item.id,
        text: item.text,
        done: !item.done,
      };
    });
    this.setState({
      list: list,
    });
  },
  render: function () {
    var toggleItem = this.toggleItem;
    return (
     <div className="todo-list">
      TodoList
      <TodoForm addItem={this.addItem}/>
      <ul>
        {this.state.list.map(function (item) {
          return (
            <TodoItem
              done={item.done}
              id={item.id}
              toggleItem={toggleItem}
            >
              {item.text}
            </TodoItem>
          );
        })}
      </ul>
     </div>
    );
  },
});
