Polymer('polymer-vehicleDetail', {
  applyAuthorStyles: true,
  showColors: false,
  showOptions: false,

  // element is fully prepared
  ready: function(){ },
  
  // instance of the element is created
  created: function() { },
  
  // instance was inserted into the document
  enteredView: function() { },
  
  // instance was removed from the document
  leftView: function() { },
  
  // attribute added, removed or updated
  attributeChanged: function(attrName, oldVal, newVal) { },
  
  // handle ajax response
  handleResponse: function(ev, res) {
    // console.log(res.response);
    this.showColors = (res.response.colors.length)? true : false;
    this.showOptions = (res.response.options.length)? true : false;
    
    var linkArray = [
      {
        url:'#',
        title:'Home',
        className:''
      },
      {
        url:'make/'+res.response.make.niceName,
        title:res.response.make.name,
        className:''
      },
      {
        url:'vehicles/'+res.response.make.niceName+'/'+res.response.model.niceName,
        title:res.response.model.name,
        className:''
      },
      {
        url:'vehicle/'+res.response.id,
        title:res.response.name,
        className:'active'
      }
    ];
    this.fire('set-breadcrumb', {links: linkArray});

  }
});