import { LightningElement } from 'lwc';
import APPLE_IMAGE from '@salesforce/resourceUrl/Apple_music';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'
import SELF_IMAGE from '@salesforce/resourceUrl/test_image';
import SVG_IMAGE  from '@salesforce/resourceUrl/SVG_Image'
export default class StaticImages extends LightningElement {


    userImage = APPLE_IMAGE ;
    self_image = SELF_IMAGE;
   svg_image = SVG_IMAGE;
}