"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/inheritsLoose"),t=require("react");function s(e){return e&&e.__esModule?e:{default:e}}var n=s(e),i=s(t);function o(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function r(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function a(e){return null!==e&&1===e.length?e[0]:e.slice()}function p(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function u(e,t){return l(function(e,t){let s=e;s<=t.min&&(s=t.min);s>=t.max&&(s=t.max);return s}(e,t),t)}function l(e,t){const s=(e-t.min)%t.step;let n=e-s;return 2*Math.abs(s)>=t.step&&(n+=s>0?t.step:-t.step),parseFloat(n.toFixed(5))}let h=function(e){function t(t){var s;(s=e.call(this,t)||this).onKeyUp=()=>{s.onEnd()},s.onMouseUp=()=>{s.onEnd(s.getMouseEventMap())},s.onTouchEnd=e=>{e.preventDefault(),s.onEnd(s.getTouchEventMap())},s.onBlur=()=>{s.setState({index:-1},s.onEnd(s.getKeyDownEventMap()))},s.onMouseMove=e=>{s.setState({pending:!0});const t=s.getMousePosition(e),n=s.getDiffPosition(t[0]),i=s.getValueFromPosition(n);s.move(i)},s.onTouchMove=e=>{if(e.touches.length>1)return;s.setState({pending:!0});const t=s.getTouchPosition(e);if(void 0===s.isScrolling){const e=t[0]-s.startPosition[0],n=t[1]-s.startPosition[1];s.isScrolling=Math.abs(n)>Math.abs(e)}if(s.isScrolling)return void s.setState({index:-1});const n=s.getDiffPosition(t[0]),i=s.getValueFromPosition(n);s.move(i)},s.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(s.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),s.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),s.moveUpByStep();break;case"Home":e.preventDefault(),s.move(s.props.min);break;case"End":e.preventDefault(),s.move(s.props.max);break;case"PageDown":e.preventDefault(),s.moveDownByStep(s.props.pageFn(s.props.step));break;case"PageUp":e.preventDefault(),s.moveUpByStep(s.props.pageFn(s.props.step))}},s.onSliderMouseDown=e=>{if(!s.props.disabled&&2!==e.button){if(s.setState({pending:!0}),!s.props.snapDragDisabled){const t=s.getMousePosition(e);s.forceValueFromPosition(t[0],(e=>{s.start(e,t[0]),p(s.getMouseEventMap())}))}o(e)}},s.onSliderClick=e=>{if(!s.props.disabled&&s.props.onSliderClick&&!s.hasMoved){const t=s.getMousePosition(e),n=u(s.calcValue(s.calcOffsetFromPosition(t[0])),s.props);s.props.onSliderClick(n)}},s.createOnKeyDown=e=>t=>{s.props.disabled||(s.start(e),p(s.getKeyDownEventMap()),o(t))},s.createOnMouseDown=e=>t=>{if(s.props.disabled||2===t.button)return;s.setState({pending:!0});const n=s.getMousePosition(t);s.start(e,n[0]),p(s.getMouseEventMap()),o(t)},s.createOnTouchStart=e=>t=>{if(s.props.disabled||t.touches.length>1)return;s.setState({pending:!0});const n=s.getTouchPosition(t);s.startPosition=n,s.isScrolling=void 0,s.start(e,n[0]),p(s.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},s.handleResize=()=>{const e=window.setTimeout((()=>{s.pendingResizeTimeouts.shift(),s.resize()}),0);s.pendingResizeTimeouts.push(e)},s.renderThumb=(e,t)=>{const n=s.props.thumbClassName+" "+s.props.thumbClassName+"-"+t+" "+(s.state.index===t?s.props.thumbActiveClassName:""),i={ref:e=>{s["thumb"+t]=e},key:s.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:s.createOnMouseDown(t),onTouchStart:s.createOnTouchStart(t),onFocus:s.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":s.props.orientation,"aria-valuenow":s.state.value[t],"aria-valuemin":s.props.min,"aria-valuemax":s.props.max,"aria-label":Array.isArray(s.props.ariaLabel)?s.props.ariaLabel[t]:s.props.ariaLabel,"aria-labelledby":Array.isArray(s.props.ariaLabelledby)?s.props.ariaLabelledby[t]:s.props.ariaLabelledby,"aria-disabled":s.props.disabled},o={index:t,value:a(s.state.value),valueNow:s.state.value[t]};return s.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof s.props.ariaValuetext?s.props.ariaValuetext:s.props.ariaValuetext(o)),s.props.renderThumb(i,o)},s.renderTrack=(e,t,n)=>{const i={key:s.props.trackClassName+"-"+e,className:s.props.trackClassName+" "+s.props.trackClassName+"-"+e,style:s.buildTrackStyle(t,s.state.upperBound-n),onTouchStart:t=>{t.pageX=t.touches[0].pageX,t.pageY=t.touches[0].pageY,s.onSliderMouseDown(t),s.createOnTouchStart(e)(t)}},o={index:e,value:a(s.state.value)};return s.props.renderTrack(i,o)};let n=r(t.value);n.length||(n=r(t.defaultValue)),s.pendingResizeTimeouts=[];const l=[];for(let e=0;e<n.length;e+=1)n[e]=u(n[e],t),l.push(e);return s.resizeObserver=null,s.resizeElementRef=i.default.createRef(),s.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:l},s}n.default(t,e);var s=t.prototype;return s.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const s=r(e.value);return s.length?t.pending?null:{value:s.map((t=>u(t,e)))}:null},s.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},s.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},s.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},s.getValue=function(){return a(this.state.value)},s.getClosestIndex=function(e){let t=Number.MAX_VALUE,s=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),r=Math.abs(e-i);r<t&&(t=r,s=o)}return s},s.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},s.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},s.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},s.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},s.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},s.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return u(this.state.startValue+t,this.props)},s.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},s.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const s=this.sizeKey(),n=e.getBoundingClientRect(),i=e[s],o=n[this.posMaxKey()],r=n[this.posMinKey()],a=t.getBoundingClientRect()[s.replace("client","").toLowerCase()],p=i-a,u=Math.abs(o-r);this.state.upperBound===p&&this.state.sliderLength===u&&this.state.thumbSize===a||this.setState({upperBound:p,sliderLength:u,thumbSize:a})},s.calcOffset=function(e){const t=this.props.max-this.props.min;if(0===t)return 0;return(e-this.props.min)/t*this.state.upperBound},s.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},s.calcOffsetFromPosition=function(e){const{slider:t}=this,s=t.getBoundingClientRect(),n=s[this.posMaxKey()],i=s[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},s.forceValueFromPosition=function(e,t){const s=this.calcOffsetFromPosition(e),n=this.getClosestIndex(s),i=u(this.calcValue(s),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},s.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},s.start=function(e,t){const s=this["thumb"+e];s&&s.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((s=>({startValue:s.value[e],startPosition:void 0!==t?t:s.startPosition,index:e,zIndices:n})))},s.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],s=u(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(s,this.props.max))},s.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],s=u(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(s,this.props.min))},s.move=function(e){const t=this.state.value.slice(),{index:s}=this.state,{length:n}=t,i=t[s];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:r,min:a,minDistance:p}=this.props;if(!o){if(s>0){const n=t[s-1];e<n+p&&(e=n+p)}if(s<n-1){const n=t[s+1];e>n-p&&(e=n-p)}}t[s]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,p,s),function(e,t,s,n){for(let i=0;i<e;i+=1){const o=n-i*s;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,p,r)):e<i&&(this.pushPreceding(t,p,s),function(e,t,s,n){for(let i=0;i<e;i+=1){const e=n+i*s;t[i]<e&&(t[i]=e)}}(n,t,p,a))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},s.pushSucceeding=function(e,t,s){let n,i;for(n=s,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=l(i,this.props)},s.pushPreceding=function(e,t,s){for(let n=s,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=l(i,this.props)},s.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},s.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},s.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},s.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},s.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},s.fireChangeEvent=function(e){this.props[e]&&this.props[e](a(this.state.value),this.state.index)},s.buildThumbStyle=function(e,t){const s={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return s[this.posMinKey()]=e+"px",s},s.buildTrackStyle=function(e,t){const s={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0,touchAction:"none"};return s[this.posMinKey()]=e,s[this.posMaxKey()]=t,s},s.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},s.renderThumbs=function(e){const{length:t}=e,s=[];for(let n=0;n<t;n+=1)s[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(s[e],e);return n},s.renderTracks=function(e){const t=[],s=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<s;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(s+1,e[s],this.state.upperBound)),t},s.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),s={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(s)}))},s.render=function(){const e=[],{value:t}=this.state,s=t.length;for(let n=0;n<s;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),r=this.props.marks?this.renderMarks():null;return i.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,r)},t}(i.default.Component);h.displayName="ReactSlider",h.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.default.createElement("div",e),renderTrack:e=>i.default.createElement("div",e),renderMark:e=>i.default.createElement("span",e)};var c=h;exports.default=c;