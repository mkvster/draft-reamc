var Pic = React.createClass({
    getDefaultProps: function() {
        return { 
            picId: -1,
            trays: [] 
        }
    },    
    render: function() {
        var self = this;
        var listTrays= this.props.trays.map(function(tray, index) {
            return (
                <Tray key={index} trayType={tray} picId={self.props.picId} indexInPic={index} />
            );
        });
        return (
            <div>
                <div> 
                    {listTrays} 
                </div>
            </div>
        );
    }
});

