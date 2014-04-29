Polymer('polymer-vehicleMedia', {
  applyAuthorStyles: true,

  // element is fully prepared
  ready: function(){ },
  
  // instance of the element is created
  created: function() { },
  
  // instance was inserted into the document
  enteredView: function() { 
    var that = this;
    // delay ajax call b/c of API rate limitations
    var tmr = setInterval(function(){
      that.$.ajax.go();
      clearInterval(tmr);
    },1000);
  },
  
  // instance was removed from the document
  leftView: function() { },
  
  // attribute added, removed or updated
  attributeChanged: function(attrName, oldVal, newVal) { },
  
  // handle ajax response
  handleResponse: function(ev, res) {
    // console.log(res.response);
    this.photoURL = this.getExteriorPhoto(res.response);
  },
  
  // get exterior photo
  getExteriorPhoto: function(data) {
    for(var i=0; i < data.length; i++) {
      var photoSet = data[i];
      if(photoSet.subType == 'exterior') {
        for(var j=0; j < photoSet.photoSrcs.length; j++) {
          var splt1 = photoSet.photoSrcs[j].split('_');
          var splt2 = splt1[splt1.length-1].split('.jpg');
          var val = Number(splt2[0]);
          if(val > 500) return photoSet.photoSrcs[j];
        }
      }
    }
    return false;
  }
});