Polymer('polymer-vehicleListing', {
  applyAuthorStyles: true,

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
    console.log(res.response);
    var linkArray = [
      {
        url:'#',
        title:'Home',
        className:''
      },
      {
        url:'make/'+this.make,
        title:this.make,
        className:''
      },
      {
        url:'vehicles/'+this.make+'/'+res.response.niceName,
        title:res.response.name,
        className:''
      }
    ];
    this.fire('set-breadcrumb', {links: linkArray});
    
  }
});