(self.webpackChunkngx_vant=self.webpackChunkngx_vant||[]).push([[374],{9374:(t,e,d)=>{"use strict";d.r(e),d.d(e,{En_USModule:()=>p});var o=d(8583),n=d(7584),r=d(4082),a=d(3018),u=d(2167);let i=(()=>{class t{constructor(){this._readMe=""}set readMe(t){this._readMe=t}get readMe(){return(0,r.K)(this._readMe)}ngOnInit(){this.setReadMe()}setReadMe(){this.readMe=d(5894).Z}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-button"]],inputs:{readMe:"readMe"},decls:1,vars:1,consts:[[3,"readMe"]],template:function(t,e){1&t&&a._UZ(0,"vant-pc-doc",0),2&t&&a.Q6J("readMe",e.readMe)},directives:[u.K],styles:[""]}),t})();const l=n.Bz.forChild([{path:"home",component:(()=>{class t{constructor(){this._readMe=""}set readMe(t){this._readMe=t}get readMe(){return(0,r.K)(this._readMe)}ngOnInit(){this.setReadMe()}setReadMe(){this.readMe=d(4508).Z}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-home"]],inputs:{readMe:"readMe"},decls:1,vars:1,consts:[[3,"readMe"]],template:function(t,e){1&t&&a._UZ(0,"vant-pc-doc",0),2&t&&a.Q6J("readMe",e.readMe)},directives:[u.K],styles:[""]}),t})()},{path:"quickstart",component:(()=>{class t{constructor(){this._readMe=""}set readMe(t){this._readMe=t}get readMe(){return(0,r.K)(this._readMe)}ngOnInit(){this.setReadMe()}setReadMe(){this.readMe=d(3520).Z}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-quickstart"]],inputs:{readMe:"readMe"},decls:1,vars:1,consts:[[3,"readMe"]],template:function(t,e){1&t&&a._UZ(0,"vant-pc-doc",0),2&t&&a.Q6J("readMe",e.readMe)},directives:[u.K],styles:[""]}),t})()},{path:"button",component:i}]);let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[l],n.Bz]}),t})();var s=d(1693);let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,c,s.r]]}),t})()},5894:(t,e,d)=>{"use strict";d.d(e,{Z:()=>o});const o='<h1 id="button">Button</h1> <h3 id="install">Install</h3> <pre><code class="language-js">import ButtonModule from &#39;ngx-vant/button&#39;;</code></pre> <h2 id="usage">Usage</h2> <h3 id="type">Type</h3> <pre><code class="language-html">&lt;van-button type=&quot;primary&quot;&gt;Primary&lt;/van-button&gt;\n&lt;van-button type=&quot;info&quot;&gt;Info&lt;/van-button&gt;\n&lt;van-button type=&quot;default&quot;&gt;Default&lt;/van-button&gt;\n&lt;van-button type=&quot;danger&quot;&gt;Danger&lt;/van-button&gt;\n&lt;van-button type=&quot;warning&quot;&gt;Warning&lt;/van-button&gt;</code></pre> <h3 id="plain">Plain</h3> <pre><code class="language-html">&lt;van-button [plain]=&quot;true&quot;  type=&quot;primary&quot;&gt;Primary&lt;/van-button&gt;\n&lt;van-button [plain]=&quot;true&quot;  type=&quot;info&quot;&gt;Danger&lt;/van-button&gt;</code></pre> <h3 id="hairline">Hairline</h3> <pre><code class="language-html">&lt;van-button [plain]=&quot;true&quot;  [hairline]=&quot;true&quot;  type=&quot;primary&quot;&gt;Hairline&lt;/van-button&gt;\n&lt;van-button [plain]=&quot;true&quot;  [hairline]=&quot;true&quot;  type=&quot;info&quot;&gt;Hairline&lt;/van-button&gt;</code></pre> <h3 id="disabled">Disabled</h3> <pre><code class="language-html">&lt;van-button [disabled]=&quot;true&quot; type=&quot;primary&quot;&gt;Diabled&lt;/van-button&gt;\n&lt;van-button [disabled]=&quot;true&quot; type=&quot;info&quot;&gt;Diabled&lt;/van-button&gt;</code></pre> <h3 id="loading">Loading</h3> <pre><code class="language-html">&lt;van-button [loading]=&quot;true&quot; type=&quot;primary&quot; /&gt;\n&lt;van-button [loading]=&quot;true&quot; type=&quot;primary&quot; loadingText=&quot;spinner&quot; /&gt;\n&lt;van-button [loading]=&quot;true&quot; type=&quot;info&quot; loadingText=&quot;Loading...&quot; /&gt;</code></pre> <h3 id="shape">Shape</h3> <pre><code class="language-html">&lt;van-button [square]=&quot;true&quot; type=&quot;primary&quot;&gt;Square&lt;/van-button&gt;\n&lt;van-button [round]=&quot;true&quot; type=&quot;info&quot;&gt;Round&lt;/van-button&gt;</code></pre> <h3 id="icon">Icon</h3> <pre><code class="language-html">&lt;van-button icon=&quot;plus&quot; type=&quot;primary&quot; /&gt;\n&lt;van-button icon=&quot;plus&quot; type=&quot;primary&quot;&gt;Button&lt;/van-button&gt;\n&lt;van-button icon=&quot;https://img.yzcdn.cn/vant/user-active.png&quot; type=&quot;info&quot;&gt;\n  Button\n&lt;/van-button&gt;</code></pre> <h3 id="size">Size</h3> <pre><code class="language-html">&lt;van-button type=&quot;primary&quot; size=&quot;large&quot;&gt;Large&lt;/van-button&gt;\n&lt;van-button type=&quot;primary&quot; size=&quot;normal&quot;&gt;Normal&lt;/van-button&gt;\n&lt;van-button type=&quot;primary&quot; size=&quot;small&quot;&gt;Small&lt;/van-button&gt;\n&lt;van-button type=&quot;primary&quot; size=&quot;mini&quot;&gt;Mini&lt;/van-button&gt;</code></pre> <h3 id="block-element">Block Element</h3> <pre><code class="language-html">&lt;van-button type=&quot;primary&quot; block]=&quot;true&quot;&gt;Block Element&lt;/van-button&gt;</code></pre> <h3 id="route">Route</h3> <pre><code class="language-html">&lt;van-button type=&quot;primary&quot; url=&quot;/vant/mobile.html&quot;&gt;URL&lt;/van-button&gt;\n&lt;van-button type=&quot;primary&quot; to=&quot;index&quot;&gt;Vue Router&lt;/van-button&gt;</code></pre> <h3 id="custom-color">Custom Color</h3> <pre><code class="language-html">&lt;van-button color=&quot;#7232dd&quot;&gt;Pure&lt;/van-button&gt;\n&lt;van-button color=&quot;#7232dd&quot; [plain]=&quot;true&quot;&gt;Pure&lt;/van-button&gt;\n&lt;van-button color=&quot;linear-gradient(to right, #ff6034, #ee0a24)&quot;&gt;\n  Gradient\n&lt;/van-button&gt;</code></pre> <h2 id="api">API</h2> <h3 id="props">Props</h3> <table> <thead> <tr> <th>Attribute</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr> </thead> <tbody><tr> <td>type</td> <td>Can be set to <code>primary</code> <code>info</code> <code>warning</code> <code>danger</code></td> <td><em>string</em></td> <td><code>default</code></td> </tr> <tr> <td>size</td> <td>Can be set to <code>large</code> <code>small</code> <code>mini</code></td> <td><em>string</em></td> <td><code>normal</code></td> </tr> <tr> <td>text</td> <td>Text</td> <td><em>string</em></td> <td>-</td> </tr> <tr> <td>color</td> <td>Color, support linear-gradient</td> <td><em>string</em></td> <td>-</td> </tr> <tr> <td>icon</td> <td>Left Icon</td> <td><em>string</em></td> <td>-</td> </tr> <tr> <td>iconPrefix</td> <td>Icon className prefix</td> <td><em>string</em></td> <td><code>van-icon</code></td> </tr> <tr> <td>iconPosition</td> <td>Icon position, can be set to <code>right</code></td> <td><em>string</em></td> <td><code>left</code></td> </tr> <tr> <td>tag</td> <td>HTML Tag</td> <td><em>string</em></td> <td><code>button</code></td> </tr> <tr> <td>native-type</td> <td>Native Type Attribute</td> <td><em>string</em></td> <td><code>&#39;&#39;</code></td> </tr> <tr> <td>plain</td> <td>Whether to be plain button</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> <tr> <td>block</td> <td>Whether to set display block</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> <tr> <td>round</td> <td>Whether to be round button</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> <tr> <td>square</td> <td>Whether to be square button</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> <tr> <td>disabled</td> <td>Whether to disable button</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> <tr> <td>loading</td> <td>Whether show loading status</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> <tr> <td>loadingText</td> <td>Loading text</td> <td><em>string</em></td> <td>-</td> </tr> <tr> <td>loadingType</td> <td>Loading type, can be set to <code>spinner</code></td> <td><em>string</em></td> <td><code>circular</code></td> </tr> <tr> <td>loadingSize</td> <td>Loading icon size</td> <td><em>string</em></td> <td><code>20px</code></td> </tr> <tr> <td>url</td> <td>Link URL</td> <td><em>string</em></td> <td>-</td> </tr> <tr> <td>to</td> <td>Target route of the link, same as using vue-router</td> <td><em>string | object</em></td> <td>-</td> </tr> <tr> <td>replace</td> <td>If true, the navigation will not leave a history record</td> <td><em>boolean</em></td> <td><code>false</code></td> </tr> </tbody></table> <h3 id="events">Events</h3> <table> <thead> <tr> <th>Event</th> <th>Description</th> <th>Arguments</th> </tr> </thead> <tbody><tr> <td>click</td> <td>Emitted when button is clicked and not disabled or loading</td> <td><em>event: Event</em></td> </tr> <tr> <td>touchstart</td> <td>Emitted when button is touched</td> <td><em>event: TouchEvent</em></td> </tr> </tbody></table> <h3 id="less-variables">Less Variables</h3> <p>How to use: <a href="#/en-US/theme">Custom Theme</a>.</p> <table> <thead> <tr> <th>Name</th> <th>Default Value</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>@button-mini-height</td> <td><code>24px</code></td> <td>-</td> </tr> <tr> <td>@button-mini-font-size</td> <td><code>@font-size-xs</code></td> <td>-</td> </tr> <tr> <td>@button-small-height</td> <td><code>32px</code></td> <td>-</td> </tr> <tr> <td>@button-small-font-size</td> <td><code>@font-size-sm</code></td> <td>-</td> </tr> <tr> <td>@button-normal-font-size</td> <td><code>@font-size-md</code></td> <td>-</td> </tr> <tr> <td>@button-large-height</td> <td><code>50px</code></td> <td>-</td> </tr> <tr> <td>@button-default-height</td> <td><code>44px</code></td> <td>-</td> </tr> <tr> <td>@button-default-line-height</td> <td><code>1.2</code></td> <td>-</td> </tr> <tr> <td>@button-default-font-size</td> <td><code>@font-size-lg</code></td> <td>-</td> </tr> <tr> <td>@button-default-color</td> <td><code>@text-color</code></td> <td>-</td> </tr> <tr> <td>@button-default-background-color</td> <td><code>@white</code></td> <td>-</td> </tr> <tr> <td>@button-default-border-color</td> <td><code>@border-color</code></td> <td>-</td> </tr> <tr> <td>@button-primary-color</td> <td><code>@white</code></td> <td>-</td> </tr> <tr> <td>@button-primary-background-color</td> <td><code>@green</code></td> <td>-</td> </tr> <tr> <td>@button-primary-border-color</td> <td><code>@green</code></td> <td>-</td> </tr> <tr> <td>@button-info-color</td> <td><code>@white</code></td> <td>-</td> </tr> <tr> <td>@button-info-background-color</td> <td><code>@blue</code></td> <td>-</td> </tr> <tr> <td>@button-info-border-color</td> <td><code>@blue</code></td> <td>-</td> </tr> <tr> <td>@button-danger-color</td> <td><code>@white</code></td> <td>-</td> </tr> <tr> <td>@button-danger-background-color</td> <td><code>@red</code></td> <td>-</td> </tr> <tr> <td>@button-danger-border-color</td> <td><code>@red</code></td> <td>-</td> </tr> <tr> <td>@button-warning-color</td> <td><code>@white</code></td> <td>-</td> </tr> <tr> <td>@button-warning-background-color</td> <td><code>@orange</code></td> <td>-</td> </tr> <tr> <td>@button-warning-border-color</td> <td><code>@orange</code></td> <td>-</td> </tr> <tr> <td>@button-border-width</td> <td><code>@border-width-base</code></td> <td>-</td> </tr> <tr> <td>@button-border-radius</td> <td><code>@border-radius-sm</code></td> <td>-</td> </tr> <tr> <td>@button-round-border-radius</td> <td><code>@border-radius-max</code></td> <td>-</td> </tr> <tr> <td>@button-plain-background-color</td> <td><code>@white</code></td> <td>-</td> </tr> <tr> <td>@button-disabled-opacity</td> <td><code>@disabled-opacity</code></td> <td>-</td> </tr> </tbody></table> '},4508:(t,e,d)=>{"use strict";d.d(e,{Z:()=>o});const o='<div class="card"> <div class="van-doc-intro"> <img class="van-doc-intro__logo" style="width:120px;height:120px" src="https://img.yzcdn.cn/vant/logo.png"> <h2 style="margin:0;font-size:36px;line-height:60px">Ngx-Vant</h2> <p>Mobile UI Components built on Angular</p> </div> </div> <h3 id="features">Features</h3> <ul> <li>65+ Reusable components</li> <li>Extensive documentation and demos</li> <li>Support Angular12</li> <li>Support Tree Shaking</li> <li>Support Custom Theme</li> <li>Support i18n</li> <li>Support TS</li> </ul> <h3 id="quickstart">Quickstart</h3> <p>See in <a href="#/en-US/quickstart">Quickstart</a>.</p> <h3 id="contribution">Contribution</h3> <p>Please make sure to read the <a href="#/en-US/contribution">Contributing Guide</a> before making a pull request.</p> <h3 id="browser-support">Browser Support</h3> <p>Modern browsers and Android 4.0+, iOS 8.0+.</p> <h3 id="ecosystem">Ecosystem</h3> <table> <thead> <tr> <th>Project</th> <th>Description</th> </tr> </thead> <tbody><tr> <td><a href="https://github.com/youzan/vant-demo">vant-demo</a></td> <td>Official vant demo collection</td> </tr> <tr> <td><a href="https://github.com/youzan/vant-weapp">vant-weapp</a></td> <td>WeChat MiniProgram UI</td> </tr> <tr> <td><a href="https://github.com/mxdi9i7/vant-react">vant-react</a></td> <td>Vant React (maintained by the community)</td> </tr> <tr> <td><a href="https://github.com/youzan/vant/tree/dev/packages/vant-cli">vant-cli</a></td> <td>Scaffold for UI library</td> </tr> <tr> <td><a href="https://github.com/youzan/vant/tree/dev/packages/vant-icons">vant-icons</a></td> <td>Vant icons</td> </tr> <tr> <td><a href="https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator">vant-touch-emulator</a></td> <td>Using vant in desktop browsers</td> </tr> </tbody></table> <h3 id="links">Links</h3> <ul> <li><a href="https://github.com/yutao331763646/ngx-vant/issues">Feedback</a></li> </ul> <h3 id="license">LICENSE</h3> <p><a href="https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89">MIT</a></p> '},3520:(t,e,d)=>{"use strict";d.d(e,{Z:()=>o});const o='<h1 id="quickstart">Quickstart</h1> <h2 id="install">Install</h2> <h3 id="npm-or-yarn">npm or yarn</h3> <pre><code class="language-js">npm i ngx-vant -S</code></pre> <h2 id="usage">Usage</h2> <h3 id="manually-import">Manually import</h3> <pre><code class="language-js">import { BrowserModule } from &#39;@angular/platform-browser&#39;;\nimport { NgModule } from &#39;@angular/core&#39;;\nimport { AppComponent } from &#39;./app.component&#39;;\nimport { ButtonModule } from &#39;ngx-vant/button&#39;;\nimport { Vant18nModule, VANT_I18N } from &#39;ngx-vant/i18n&#39;;\n@NgModule({\n    declarations: [\n        AppComponent,\n    ],\n    imports: [\n        BrowserModule,\n        AppRoutingModule,\n        ButtonModule\n    ],\n    providers: [{ provide: VANT_I18N, useValue: zh_CN }],\n    bootstrap: [AppComponent]\n})\nexport class AppModule { }</code></pre> '}}]);