var Tray = React.createClass({
    getDefaultProps: function() {
        return { 
            trayType: "",
            picId: -1,
            indexInPic: -1
        }
    },    
    render: function() {
        var trayWidth = 400;
        var trayHeight = 10;
        var trayClassName = "Tray" + this.props.trayType;
        return (
            <div style={{width: trayWidth + "px", height: trayHeight + "px"}}>
                <TrayZ picId={this.props.picId} indexInPic={this.props.indexInPic} />
            </div>
        );
    }
});

