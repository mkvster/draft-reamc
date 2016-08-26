var TrayB = React.createClass({
    render: function() {
        var cellNumbers = [1];
        var cellWidth = 400;
        return (
            <div style={{width: cellNumbers.length*cellWidth + "px"}}>
                <SimpleRow cellWidth={cellWidth} cellHeight={20} cellNumbers={cellNumbers} />
                <SimpleRow cellWidth={cellWidth} cellHeight={20} cellNumbers={cellNumbers} />
                <SimpleRow cellWidth={cellWidth} cellHeight={20} cellNumbers={cellNumbers} />
            </div>
        );
    }
});