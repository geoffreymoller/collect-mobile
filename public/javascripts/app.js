new Ext.Application({
    launch: function() {
        new Ext.Panel({
            fullscreen: true,
            dockedItems: [{xtype:'toolbar', title:'Collect'}],
            layout: 'fit',
            styleHtmlContent: true,
            html: '<h2>Hello World!</h2>'
        });
    }
});
