var window = this;
Ti.include('/lib/em_ti.js');

var RUN_TESTS = true;

if (RUN_TESTS) {
  Ti.include('/tests/tests.js');
} else {
  // this sets the background color of the master UIView (when there are no windows/tab groups on it)
  Titanium.UI.setBackgroundColor('#000');

  // create tab group
  var tabGroup = EmTi.TabGroup.create({
    opened: function() {
      var alertDialog = EmTi.AlertDialog.create({
        title: 'Hello',
        message: 'SproutCore Rocks!',
        buttonNames: ['OK', 'Cancel']
      });
      alertDialog.show();
    }
  });

  // create base UI tab and root window
  var win1 = EmTi.Window.create({
      title:'Tab 1',
      backgroundColor:'#fff'
  });
  var tab1 = EmTi.Tab.create({
      icon:'KS_nav_views.png',
      title:'Tab 1',
      window:win1
  });

  var label1 = EmTi.Label.create({
  	color:'#999',
  	text:'I am Window 1',
  	font:{fontSize:20,fontFamily:'Helvetica Neue'},
  	textAlign:'center',
  	width:'auto'
  });

  win1.add(label1);
  
  var image = EmTi.ImageView.create({
    image: 'KS_nav_views.png',
    height: 43,
    width: 46,
    top: 10
  });
  
  win1.add(image);
  
  var textarea = EmTi.TextArea.create({
    top: 60,
    height: 50,
    width: 200,
    value: 'I am a EmTi.TextArea'
  });
  
  win1.add(textarea);

  // create controls tab and root window
  var win2 = EmTi.Window.create({
      title:'Tab 2',
      backgroundColor:'#fff'
  });
  var tab2 = EmTi.Tab.create({
      icon:'KS_nav_ui.png',
      title:'Tab 2',
      window:win2
  });

  var label2 = EmTi.Label.create({
  	color:'#999',
  	text:'I am Window 2',
  	font:{fontSize:20,fontFamily:'Helvetica Neue'},
  	textAlign:'center',
  	width:'auto'
  });

  win2.add(label2);
  
  var animation = EmTi.Animation.create({
    duration: 2000,
    opacity: 0
  });
  
  image.animate(animation);
  
  // Map Tab
  var win3 = EmTi.Window.create({
    title: 'Map Test'
  });
  
  var mapView = EmTi.MapView.create({
    animate: true,
    mapType: 'standard',
    region: {
      latitude: 46.876951,
      longitude: -96.78664,
      latitudeDelta: 0.005, 
      longitudeDelta: 0.005 },
    regionFit: true
  });
  var mapAnnotation = EmTi.MapAnnotation.create({
    animate: true,
    latitude: 46.876951,
    longitude: -96.78664,
    pinColor: 'green',
    title: 'Brian was here!',
    subtitle: 'Mmmm... beer.'
  });
  mapView.add(mapAnnotation);
  
  win3.add(mapView);
  
  var tab3 = EmTi.Tab.create({
    icon: 'KS_nav_views.png',
    title: 'Map Test',
    window: win3
  });

  //  add tabs
  tabGroup.add(tab1);
  tabGroup.add(tab2);
  tabGroup.add(tab3);

  // open tab group
  tabGroup.open();
}
