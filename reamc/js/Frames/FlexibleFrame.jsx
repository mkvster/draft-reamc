var FlexibleFrame = React.createClass({
    
    getDefaultProps: function() {
        return { 
            data: {
                title: "",
                pics: [] 
            }
        }
    },    
    render: function() {
        var listPics = this.props.data.pics.map(function(pic) {
          return (
            <Pic key={pic.id} picId={pic.id} trays={pic.trays}/>
          );
        });
        return (
            <div> 
                <div> {this.props.data.title} </div>
                {listPics}
            </div>
        );
    }
});
