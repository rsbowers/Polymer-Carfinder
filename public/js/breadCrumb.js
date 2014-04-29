Polymer('polymer-breadCrumb', {
  applyAuthorStyles: true,

  // element is fully prepared
  ready: function(){ },
  
  // instance of the element is created
  created: function() { },
  
  // instance was inserted into the document
  enteredView: function() { 
    this.setBreadCrumbListener('polymer-modelListing');
    this.setBreadCrumbListener('polymer-vehicleListing');
    this.setBreadCrumbListener('polymer-vehicleDetail');
  },
  
  // listen for the breadcrumb event
  setBreadCrumbListener: function(element) {
    var that = this,
        el = document.querySelector(element);
    
    if(el) {
      el.addEventListener('set-breadcrumb',function(e) {
        that.links = e.detail.links;
      });
    }
  },

  // instance was removed from the document
  leftView: function() { },
  
  // attribute added, removed or updated
  attributeChanged: function(attrName, oldVal, newVal) { }
});