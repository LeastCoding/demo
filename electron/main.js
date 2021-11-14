const modules = {

    root:'./main/',

    get:function(name){

        return require(this.root + name);
    }
}

modules.get('app').createApp(800,600,'index.html',function(win){

    //menu
    setTimeout(() => {
        
        modules.get('menu').createMenu(win);
    }, 5000);
    
})