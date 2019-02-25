/*HashMap = function(){  
    this.map = new Array();
};  
HashMap.prototype = {  
    put : function(key, value){  
        this.map[key] = value;
    },  
    get : function(key){  
        return this.map[key];
    },  
    getAll : function(){  
        return this.map;
    },  
    clear : function(){  
        this.map = new Array();
    },  
    getKeys : function(){  
        var keys = new Array();  
        for(i in this.map){  
            keys.push(i);
        }  
        return keys;
    },
    containsValue : function(value){    
        for(var prop in this.map){
         if(this.map[prop] == value) return true;
        }
        return false;
    },
    getKeyByValue : function( value ) {
    	for(var prop in this.map){
    		if(this.map[prop] == value) {
    			return prop;
    		}
    	}
    	return null;
    },
    remove : function(index) {
    	var keys = this.getKeys();
        keys.splice(index, 1);
        var temp =[];                 
        for (var i = 0 ; i < keys.length ; i++) {
            temp[keys[i]] = this.obj[keys[i]];
        }     
        this.obj = temp;
        this.length = keys.length;
        index--;
    },
    indexOf : function(key) {
        var cnt = 0;
        for ( var i in this.obj )
        {
            if ( key == i ) 
            	return cnt;
            cnt++;    
        }
    }
    

};*/
var HashMap = function()
{
    this.obj = [];
    this.length = 0;        

    this.containsValue = function(value)
    {    
        for(var prop in this.obj){
         if(this.obj[prop] == value) return true;
        }
        return false;
    };
    
    this.getKeyByValue = function(value) {
    	for(var prop in this.obj){
    		if(this.obj[prop] == value) {
    			return prop;
    		}
    	}
    	return null;
    };
    
    this.put = function(key, value)
    { 
        if( this.obj[key] == null )this.length++; 
        this.obj[key] = value; 
    };
    
    this.get = function(key)
    {
        return this.obj[key];
    };
    
    this.keys = function()
    {
        var keys = [];
        for ( var property in this.obj ) keys.push(property);
        return keys;
    };
    
    this.values = function()
    {
        var values = [];
        for ( var property in this.obj ) values.push(this.obj[property]);
        return values;
    };
    
    this.toQueryString = function(divMark)
    {
        var divMark = (typeof divMark == "undefined") ? "&" : divMark;
        var quaryString = "";
        var key = this.keys();
        var value = this.values();
        if ( this.length < 1 ) return "";
        
        for( var i = 0 ; i < this.length ; i++ )
        {
            if ( quaryString != "" )
                quaryString += divMark;
            quaryString +=     key[i] +"="+ value[i];
        }
        return quaryString;
    };
    
    this.remove = function(index)
    {
        var keys = this.keys();
        keys.splice(index, 1);
        var temp =[];                 
        for ( var i = 0 ; i < keys.length ; i++ )
        {
            temp[keys[i]] = this.obj[keys[i]];
        }     
        this.obj = temp;
        this.length = keys.length;
        index--;
    };
    
    this.indexOf = function(key)
    {
        var cnt = 0;
        for ( var i in this.obj )
        {
            if ( key == i ) return cnt;
                cnt++;    
        }
    };
    
    this.splice = function(spliceIndex)
    {
        var keys = this.keys();
        keys.splice(spliceIndex, 1);
        var temp =[];                 
        for ( var i = 0 ; i < keys.length ; i++ )
        {
            temp[keys[i]]=this.obj[keys[i]];
        }     
        this.obj = temp;
        this.length = keys.length;
        index--;
    };
    
    this.point = function(key)
    {
        var cnt = 0;
        for ( var i in this.obj )
        {
            if ( key == i ) return cnt;
                cnt++;    
        }
    };
 
    this.clear = function()
    {
        this.obj = [];
        this.length = 0;
    };
        
    var index = 0;
    this.next = function()
    {
        if ( index == this.length )
        {
            index = 0;
            return -1;
        }
        var values = this.values();
        var currentValue = values[index];     
        index++;
        return currentValue;
    };
 
    this.indexValue = function(Idx)
    {
        var keys = this.keys();
        return this.obj[keys[Idx]];
    };
};
