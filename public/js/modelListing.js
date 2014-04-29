
Polymer('polymer-modelListing', {
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
    var model = this.vehicles.models[index];
    console.log(model.niceName);
    window.location = '/vehicles/'+this.make+'/'+model.niceName+'/';
  },
  
  // instance of the element is created
  created: function() { },
  
  // instance was inserted into the document
  enteredView: function() { 
    if(this.showSelect) {
      var that = this;
      var makeNav = document.querySelector('polymer-makeListing');
      makeNav.addEventListener('make-slection',function(e) {
        that.make = e.detail.make;
        that.$.ajaxlist.go();
      });
    } else {
      this.$.ajaxlist.go();
    }
  },

  makeNavHandler: function(e) {
    this.make = e.detail.make;
    this.$.ajaxlist.go();
  },
  
  // instance was removed from the document
  leftView: function() { },
  
  // attribute added, removed or updated
  attributeChanged: function(attrName, oldVal, newVal) { },
  
  // handle ajax response
  handleResponse: function(ev, res) {
    // console.log(res.response);
    var linkArray = [
      {
        url:'#',
        title:'Home',
        className:''
      },
      {
        url:'make/'+res.response.niceName,
        title:res.response.name,
        className:'active'
      }
    ];
    this.fire('set-breadcrumb', {links: linkArray});
  }

});