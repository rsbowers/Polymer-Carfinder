
Polymer('polymer-makeListing', {
  applyAuthorStyles: true,
  currentIndex: 0,

  // element is fully prepared
  ready: function(){ 
    if(this.layout == 'select') {
      this.showSelect = true;
    } else {
      this.showRows = true;
    }
  },

  // select list change handler
  onDropdownChanged: function(e,d,t) {
    var index = e.path[0].selectedIndex;
    var make = this.vehicles.makes[index];
    this.fire('make-slection', {make: make.name});
  },
  
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
  }

});