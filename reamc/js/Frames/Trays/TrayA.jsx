var TrayA = React.createClass({
    render: function() {
        return (
            <div style={{width: 400 + "px"}}>
                <SimpleRow cellWidth={200} cellHeight={50} cellNumbers={[10, 20]} />
            </div>
        );
    }
});