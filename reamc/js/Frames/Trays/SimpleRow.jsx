var SimpleRow = React.createClass({
    render: function() {
        var items = this.props.cellNumbers;
        var w = this.props.cellWidth;
        var h = this.props.cellHeight;
        var cellColor = "LightGreen";
        var listItems = items.map(function(item) {
          return (
            <li key={item} className="cell-board-noselect cell-board-row-li">
                  <div className="cell-area" style={{width: w + "px", height: h + "px", backgroundColor: cellColor}}>
                      {item}
                  </div>
            </li>
          );
        });

        return (
            <ul className="cell-board-row-ul">
              {listItems}
            </ul>
        );
    }
});
