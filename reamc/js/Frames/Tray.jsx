var Tray = React.createClass({
    getDefaultProps: function() {
        return { 
            trayType: "",
            picId: -1,
            indexInPic: -1
        }
    },    
    getTrayClass: function(trayType) {
        switch(trayType) {
            case "A" : return TrayA;
            case "B" : return TrayB;
        }
        return TrayZ; 
    },
    render: function() {
        var trayClass = this.getTrayClass(this.props.trayType);
        var self = this;
        return (
            React.createElement(trayClass, 
            { 
                picId: self.props.picId, 
                indexInPic: self.props.indexInPic
            })
        );
    }
});

