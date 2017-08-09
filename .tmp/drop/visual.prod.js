var powerbi;!function(t){!function(t){!function(t){!function(t){!function(t){function e(t,e,n){void 0===t&&(t=[]);var o=t;return i(o),e&&(o.identityFields=e),n&&(o.source=n),o}function i(t,e){t.grouped=e?function(){return e}:function(){return n(t)}}function n(t){for(var e,i=[],n=0,o=t.length;n<o;n++){var r=t[n];if(!e||e.identity!==r.identity){if(e={values:[]},r.identity){e.identity=r.identity;var a=r.source;void 0!==a.groupName?e.name=a.groupName:a.displayName&&(e.name=a.displayName)}i.push(e)}e.values.push(r)}return i}t.createValueColumns=e,t.setGrouped=i,t.groupValues=n}(t.DataViewTransform||(t.DataViewTransform={}))}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(t){!function(t){!function(t){!function(t){function e(t,e){if(!t||!t.length)return-1;var i=t[0];if(i.values&&i.values.length>0)for(var o=0,r=i.values.length;o<r;++o){var a=i.values[o];if(a&&a.source&&n(a.source,e))return o}return-1}function i(t,e){if(t&&t.length)for(var i=0,o=t.length;i<o;i++)if(n(t[i].source,e))return i;return-1}function n(t,e){var i=t.roles;return i&&i[e]}function o(t,e){return null!=t&&null!=t.metadata&&t.metadata.columns&&t.metadata.columns.some(function(t){return t.roles&&void 0!==t.roles[e]})}function r(t,e){return t&&t.source&&t.source.roles&&!0===t.source.roles[e]}t.getMeasureIndexOfRole=e,t.getCategoryIndexOfRole=i,t.hasRole=n,t.hasRoleInDataView=o,t.hasRoleInValueColumn=r}(t.DataRoleHelper||(t.DataRoleHelper={}))}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(t){!function(t){!function(t){!function(t){function e(t,e,i){if(!t)return i;var n=t[e];return void 0===n?i:n}function i(t,i,n){var o=e(t,i);return o&&o.solid?o.solid.color:n}t.getValue=e,t.getFillColorByPropertyName=i}(t.DataViewObject||(t.DataViewObject={}))}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(t){!function(t){!function(t){!function(e){function i(e,i,n){return e?t.DataViewObject.getValue(e[i.objectName],i.propertyName,n):n}function n(t,e,i){return t&&t[e]?t[e]:i}function o(t,e,n){var o=i(t,e);return o&&o.solid?o.solid.color:n}function r(t,e,n){var o=i(t,e,n);return o&&o.solid?o.solid.color:void 0===o||null===o||"object"==typeof o&&!o.solid?n:o}e.getValue=i,e.getObject=n,e.getFillColor=o,e.getCommonValue=r}(t.DataViewObjects||(t.DataViewObjects={}))}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(e){!function(e){!function(e){var i=t.extensibility.utils.dataview.DataRoleHelper;!function(t){function e(t,e,n){if(t.categories&&t.categories.length>0){var o=t.categories[0];return o.source&&i.hasRole(o.source,e)&&i.hasRole(o.source,n)}return!1}function n(t){return void 0!==t.groupName?t.groupName:t.queryName}function o(t){var e=a(t);return null!=e&&!0===e.imageUrl}function r(t){var e=a(t);return null!=e&&!0===e.webUrl}function a(t){return t&&t.type&&t.type.misc}function s(t){return!!(t&&t.metadata&&t.metadata.columns&&t.metadata.columns.length)&&t.metadata.columns.some(function(t){return!0===o(t)})}t.categoryIsAlsoSeriesRole=e,t.getSeriesName=n,t.isImageUrlColumn=o,t.isWebUrlColumn=r,t.getMiscellaneousTypeDescriptor=a,t.hasImageUrlColumn=s}(e.converterHelper||(e.converterHelper={}))}(e.dataview||(e.dataview={}))}(e.utils||(e.utils={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(t){!function(t){!function(t){var e=function(){function e(){}return e.getDefault=function(){return new this},e.createPropertyIdentifier=function(t,e){return{objectName:t,propertyName:e}},e.parse=function(e){var i,n=this.getDefault();if(!e||!e.metadata||!e.metadata.objects)return n;i=n.getProperties();for(var o in i)for(var r in i[o]){var a=n[o][r];n[o][r]=t.DataViewObjects.getCommonValue(e.metadata.objects,i[o][r],a)}return n},e.isPropertyEnumerable=function(t){return!e.InnumerablePropertyPrefix.test(t)},e.enumerateObjectInstances=function(t,e){var i=t&&t[e.objectName];if(!i)return[];var n={objectName:e.objectName,selector:null,properties:{}};for(var o in i)i.hasOwnProperty(o)&&(n.properties[o]=i[o]);return{instances:[n]}},e.prototype.getProperties=function(){var t=this,i={};return Object.keys(this).forEach(function(n){if(e.isPropertyEnumerable(n)){var o=Object.keys(t[n]);i[n]={},o.forEach(function(t){e.isPropertyEnumerable(n)&&(i[n][t]=e.createPropertyIdentifier(n,t))})}}),i},e}();e.InnumerablePropertyPrefix=/^_/,t.DataViewObjectsParser=e}(t.dataview||(t.dataview={}))}(t.utils||(t.utils={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},powerbi;!function(t){!function(e){!function(e){!function(e){"use strict";var i=t.extensibility.utils.dataview.DataViewObjectsParser,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dataPoint=new o,e.subTitle=new r,e.icon=new a,e}return __extends(e,t),e}(i);e.VisualSettings=n;var o=function(){function t(){this.defaultColor="",this.showAllDataPoints=!0,this.fill="",this.fillRule="",this.fontSize=40,this.heightOffset=0,this.widthOffset=0,this.units=0,this.decimalPlaces=2}return t}();e.dataPointSettings=o;var r=function(){function t(){this.text="Sub Text",this.fontColor="",this.alignment="",this.textSize=15,this.fontFamily=""}return t}();e.subTitleSettings=r;var a=function(){function t(){this.icon="fa-times"}return t}();e.icon=a}(e.testViz0C2A3232231743ADA90718431B35655A||(e.testViz0C2A3232231743ADA90718431B35655A={}))}(e.visual||(e.visual={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(t){!function(t){!function(t){"use strict";var e=function(){function e(t){this.target=t.element}return e.prototype.update=function(t){this.model=0,this.settings=e.parseSettings(t&&t.dataViews&&t.dataViews[0]),this.model=this.parseDataView(t);var i=this.calculateUnits(this.settings.dataPoint.units),n=(t.viewport.height,t.viewport.width,this.settings.dataPoint),o=n.fontSize,r=n.heightOffset,a=n.widthOffset,s=n.fill,u=n.decimalPlaces,l=this.settings.subTitle,c=l.text,f=l.textSize,p=l.alignment,h=l.fontColor,d=this.settings.icon.icon;this.target.innerHTML='\n                <div>\n                    <div style="font-size: '+f+"px; position: relative; margin-top: -5px; color: "+h+"; text-align: "+p+'">'+c+'</div>\n                    <div style="font-size: '+o+"px; color: "+s+"; position: absolute; top: "+(50+r)+"px; margin-left: "+(20+a)+'px;">'+(this.model.toFixed(u)+i)+'</div>\n                    <div style="width: 30px; height: 30px; font-size: 60px; position: absolute; top:30px; right: 50px">\n                        <i class="fa '+d+'" style="color: white; opacity: 0.6"></i>\n                    </div>\n                </div>'},e.prototype.calculateUnits=function(t){var e="",i=10*t;switch(0===i&&(i=Math.pow(10,this.model.toString().split(".")[0].length)),i){case Math.pow(10,4):case Math.pow(10,5):case Math.pow(10,6):e="k",this.model=this.model/Math.pow(10,3);break;case Math.pow(10,7):case Math.pow(10,8):case Math.pow(10,9):e="m",this.model=this.model/Math.pow(10,6);break;case Math.pow(10,10):case Math.pow(10,11):case Math.pow(10,12):e="bn",this.model=this.model/Math.pow(10,9);break;case Math.pow(10,13):case Math.pow(10,14):case Math.pow(10,15):e="tr",this.model=this.model/Math.pow(10,12)}return e},e.prototype.parseDataView=function(t){return t&&t.dataViews&&t.dataViews[0]&&t.dataViews[0].single&&t.dataViews[0].single.value&&"number"==typeof t.dataViews[0].single.value?+t.dataViews[0].single.value:0},e.parseSettings=function(e){return t.VisualSettings.parse(e)},e.prototype.enumerateObjectInstances=function(e){return t.VisualSettings.enumerateObjectInstances(this.settings||t.VisualSettings.getDefault(),e)},e}();t.Visual=e}(t.testViz0C2A3232231743ADA90718431B35655A||(t.testViz0C2A3232231743ADA90718431B35655A={}))}(t.visual||(t.visual={}))}(t.extensibility||(t.extensibility={}))}(powerbi||(powerbi={}));var powerbi;!function(t){!function(e){!function(e){e.testViz0C2A3232231743ADA90718431B35655A={name:"testViz0C2A3232231743ADA90718431B35655A",displayName:"testViz",class:"Visual",version:"1.0.0",apiVersion:"1.7.0",create:function(e){return new t.extensibility.visual.testViz0C2A3232231743ADA90718431B35655A.Visual(e)},custom:!0}}(e.plugins||(e.plugins={}))}(t.visuals||(t.visuals={}))}(powerbi||(powerbi={}));