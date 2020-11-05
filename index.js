'use strict';


const dirsBase = function(){
    /*
     * @public
     * @return {array}
     */
    this.cdn = function(){
        return cdn;
    };
    /*
     * @public
     * @return {array}
     */
    this.components = function(){
        return components;
    };
    /*
     * @public
     * @return {array}
     */
    this.db = function(){
        return db;
    };
    /*
     * @public
     * @return {array}
     */
    this.extension = function(){
        return extension;
    };
    /*
     * @public
     * @return {array}
     */
    this.www = function(){
        return www;
    };
    /*
     * @public
     * @return {array}
     */
    this.all = function(){
        let out =[];
        for (let i of db)
            out.push(i);
        for (let i of cdn)
            out.push(i);
        for (let i of www){
            out.push(i);
            for (let c of components)
                out.push(i+'/'+c);
        }
        for (let i of extension)
            out.push(i);
        return out;
    }
    /*
     * @private
     * @var {array}
     */
    const cdn = [
        'cdn'
    ];
    /*
     * @private
     * @var {array}
     */
    const db = [
        '.db'
    ];
    /*
     * @private
     * @var {array}
     */
    const www = [
        'www'
    ];
    /*
     * @private
     * @var {array}
     */
    const components = [
        'css',
        'html',
        'js',
        'svg'
    ];
    /*
     * @private
     * @var {array}
     */
    const extension = [
        'extension'
    ];
}


exports.dirs = new dirsBase();
