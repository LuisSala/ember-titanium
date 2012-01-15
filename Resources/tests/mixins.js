(function() {
  describe("EmTi.Animatable", function() {
    it("should be defined", function() {
      expect(EmTi.Animatable).toBeDefined();
    });
    
    it("should animate", function() {
      var view = EmTi.Object.create(EmTi.Animatable),
          animation = EmTi.Animation.create(),
          wasCalled = false;
          
      view.set('tiObject', {
        animate: function(animation) { wasCalled = true; }
      });
      
      view.animate(animation);
      expect(wasCalled).toEqual(true);
    });
  });
  
  describe("EmTi.Openable", function() {
    it("should be defined", function() {
      expect(EmTi.Openable).toBeDefined();
    });
    
    it("should be openable", function() {
      var view = EmTi.Object.create(EmTi.Openable), wasCalled = false;
      
      view.set('tiObject', {
        open: function() { wasCalled = true; }
      });
      
      view.open();
      expect(wasCalled).toEqual(true);
    });
    
    it("should be closable", function() {
      var view = EmTi.Object.create(EmTi.Openable), wasCalled = false;
      
      view.set('tiObject', {
        close: function() { wasCalled = true; }
      });
      
      view.close();
      expect(wasCalled).toEqual(true);
    });
  });
  
  describe("EmTi.Hideable", function() {
    it("should be defined", function() {
      expect(EmTi.Hideable).toBeDefined();
    });
    
    it("should be hideable", function() {
      var view = EmTi.Object.create(EmTi.Hideable), wasCalled = false;
      
      view.set('tiObject', {
        hide: function() { wasCalled = true; }
      });
      
      view.hide();
      expect(wasCalled).toEqual(true);
    });
    
    it("should be showable", function() {
      var view = EmTi.Object.create(EmTi.Hideable), wasCalled = false;
      
      view.set('tiObject', {
        show: function() { wasCalled = true; }
      });
      
      view.show();
      expect(wasCalled).toEqual(true);
    });
  });
  
  describe("EmTi.Focusable", function() {
    it("should be defined", function() {
      expect(EmTi.Focusable).toBeDefined();
    });
    
    it("should respond to blur", function() {
      var view = EmTi.Object.create(EmTi.Focusable),
          wasCalled = false;

      view.set('tiObject', {
        blur: function() { wasCalled = true; }
      });

      view.blur();
      expect(wasCalled).toEqual(true);
    });

    it("should respond to focus", function() {
      var view = EmTi.Object.create(EmTi.Focusable),
          wasCalled = false;

      view.set('tiObject', {
        focus: function() { wasCalled = true; }
      });

      view.focus();
      expect(wasCalled).toEqual(true);
    });
  });
})();
