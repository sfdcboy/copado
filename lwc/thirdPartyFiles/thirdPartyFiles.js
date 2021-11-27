import { LightningElement } from 'lwc';

import MOMENT from '@salesforce/resourceUrl/moment';
import MOMENT1 from '@salesforce/resourceUrl/moment1';
import {loadScript} from 'lightning/platformResourceLoader';

export default class ThirdPartyFiles extends LightningElement {

    // too mcuh code required to convert time etc in javascript
    // we can use moment library to these thigns very quickly
    currentDate ;
    scriptLoaded = false;
    // we want this to be called once our page is fully loaded hence doing it in here 
    renderedCallback(){
if(!this.scriptLoaded){
    console.log('address -> ' , MOMENT1);
        // Promise.all(
        //     loadScript(this,MOMENT)
        //     ).then(()=>{
        //         this.scriptLoaded = true;
        //         this.setDateOnScreen();
        //         console.log('loaded first time');
        //     }).catch(error=>{
        //         console.log('errror is ' ,error);
        //     })

        loadScript(this, MOMENT1+'/moment/moment.min.js').then(()=>{ 
            this.setDateOnScreen();
            this.scriptLoaded = true;
        }).catch(error=>{ 
            console.error(error)
        })
        }
    }

    setDateOnScreen(){
        this.currentDate = moment().format('LLLL');
    }
    



}