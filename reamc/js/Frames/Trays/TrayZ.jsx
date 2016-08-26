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
        return (
            <div style={{width: 400 + "px"}}>
                <SimpleRow cellWidth={100} cellHeight={25} cellNumbers={[1, 2, 3, 4]} />
                <SimpleRow cellWidth={50} cellHeight={25} cellNumbers={[5, 6, 7, 8, 9, 10, 11, 12]} />
            </div>
        );
    }
});

