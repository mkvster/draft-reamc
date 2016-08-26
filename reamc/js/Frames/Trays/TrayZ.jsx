var TrayZ = React.createClass({
    getDefaultProps: function() {
        return { 
            trayType: "",
            picId: -1,
            indexInPic: -1,
            numberOffset: 0
        }
    },    
    render: function() {
        var items = [1, 2, 3, 4];
        var cellWidth = 100;
        var cellHeight = 25;
        var cellColor = "LightGreen";
        var self = this;
        var listItems = items.map(function(item) {
          return (
            <li key={item} className="cell-board-noselect cell-board-row-li" style={{backgroundColor: cellColor}}>
                  <div className="cell-area" style={{backgroundColor: cellColor, width: cellWidth + "px", height: cellHeight + "px"}}>
                      {self.props.picId}.{self.props.indexInPic + 1}.{item}
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

