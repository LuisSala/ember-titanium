(function() {
  describe("EmTi.Window", function() {
    it("should be defined", function() {
      expect(EmTi.Window).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.Window", function() {
      var view = EmTi.Window.create(), tiObject;
      
      tiObject = view.createObject();
      
      expect(tiObject).toBeDefined();
    });
  });

  describe("EmTi.Label", function() {
    it("should be defined", function() {
      expect(EmTi.Label).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.Label", function() {
      var view = EmTi.Label.create(), tiObject;
      
      tiObject = view.createObject();
      
      expect(tiObject).toBeDefined();
    });
  });
  
  describe("EmTi.TextField", function() {
    it("should be defined", function() {
      expect(EmTi.TextField).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.TextField", function() {
      var view = EmTi.TextField.create(), tiObject;
      
      tiObject = view.createObject();
      
      expect(tiObject).toBeDefined();
    });
  });
  
  describe("EmTi.Button", function() {
    it("should be defined", function() {
      expect(EmTi.Button).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.Button", function() {
      var view = EmTi.Button.create(), tiObject;
      
      tiObject = view.createObject();
      
      expect(tiObject).toBeDefined();
    });
  });
  
  describe("EmTi.Tab", function() {
    it("should be defined", function() {
      expect(EmTi.Tab).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.Tab", function() {
      var view = EmTi.Tab.create(), tiObject;
      
      tiObject = view.createObject();
      
      expect(tiObject).toBeDefined();
    });
    
    it("should be able to open a EmTi.Window", function() {
      var tab = EmTi.Tab.create();
      var win = EmTi.Window.create();
      
      expect(function() { tab.open(win); }).not.toThrow();
    });
  });
  
  describe("EmTi.TabGroup", function() {
    it("should be defined", function() {
      expect(EmTi.TabGroup).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.TabGroup", function() {
      var view = EmTi.TabGroup.create(), tiObject;
      
      tiObject = view.createObject();
      
      expect(tiObject).toBeDefined();
    });
    
    it("should be able to add tabs", function() {
      var view = EmTi.TabGroup.create();
      
      expect(view.childViews.length).toEqual(0);
    
      view.add(EmTi.Tab.create());
      expect(view.childViews.length).toEqual(1);
    });
    
    it("should be able to set the active tab", function() {
      var view = EmTi.TabGroup.create();
      expect(function() { view.setActiveTab(0); }).not.toThrow();
    });
    
    it("should render tabs when displayed", function() {
      var view = EmTi.TabGroup.create({
        childViews: [
          EmTi.Tab.create()
        ]
      });
      
      expect(view.childViews.length).toEqual(1);
    
      var fakeTiObject = {
        addTab: function() {}
      };
      view.set('tiObject', fakeTiObject);
      spyOn(fakeTiObject, 'addTab');
      
      view.render();
      
      expect(fakeTiObject.addTab).toHaveBeenCalled();
      expect(fakeTiObject.addTab.callCount).toEqual(1);
    });
  });
  
  describe("EmTi.ImageView", function() {
    it("should be defined", function() {
      expect(EmTi.ImageView).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.ImageView", function() {
      var view = EmTi.ImageView.create(), tiView;
      
      tiView = view.createObject();
      
      expect(tiView).toBeDefined();
    });
  });
  
  describe("EmTi.TextArea", function() {
    it("should be defined", function() {
      expect(EmTi.TextArea).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.TextArea", function() {
      var view = EmTi.TextArea.create(), tiView;
      
      tiView = view.createObject();
      
      expect(tiView).toBeDefined();
    });
  });
  
  describe("EmTi.AlertDialog", function() {
    it("should be defined", function() {
      expect(EmTi.AlertDialog).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.AlertDialog", function() {
      var view = EmTi.AlertDialog.create(), tiView;
      
      tiView = view.createObject();
      
      expect(tiView).toBeDefined();
    });
  });
  
  describe("EmTi.Animation", function() {
    it("should be defined", function() {
      expect(EmTi.Animation).toBeDefined();
    });
  
    it("should be able to create a Ti.UI.Animation", function() {
      var view = EmTi.Animation.create(), tiView;
      
      tiView = view.createObject();
      
      expect(tiView).toBeDefined();
    });
  });
  
  describe("EmTi.MapView", function() {
    it("should be defined", function() {
      expect(EmTi.MapView).toBeDefined();
    });
  
    it("should be able to create a Ti.Map.MapView", function() {
      var view = EmTi.MapView.create(), tiView;
      
      tiView = view.createObject();
      
      expect(tiView).toBeDefined();
    });
  });
  
  describe("EmTi.MapAnnotation", function() {
    it("should be defined", function() {
      expect(EmTi.MapAnnotation).toBeDefined();
    });
  
    it("should be able to create a Ti.Map.Annotation", function() {
      var view = EmTi.MapAnnotation.create(), tiView;
      
      tiView = view.createObject();
      
      expect(tiView).toBeDefined();
    });
  });
  
})();
