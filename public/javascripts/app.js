collect = {};
collect.mobile = function(){  
  this.fetch();
}

collect.mobile.prototype.fetch = function(){
  Ext.util.JSONP.request({
    url: 'https://geoffreymoller.cloudant.com/collect/_design/uri/_view/uri?limit=50&descending=true&callback=app.main'
  });
}

collect.mobile.prototype.main = function(data){

  Ext.regModel('Link', {
    fields: ['id', 'key', 'value'],
  });

  var store = new Ext.data.Store({
    model: 'Link',
    data: data.rows
  });

  new Ext.Application({

      launch: function() {

          new Ext.Panel({
              fullscreen: true,
              dockedItems: [{xtype:'toolbar', title:'Collect'}]
          });

          var list = new Ext.List({
              fullscreen: true,
              itemTpl : '<a href="{value.uri}" target="_blank">{value.title}</a>',
              store: store
          });

          list.show();

      }

  });

}

var app = new collect.mobile();
