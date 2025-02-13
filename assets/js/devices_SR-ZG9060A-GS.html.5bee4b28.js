"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78114],{28898:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>l,data:()=>d});var o=t(6254);const r={},l=(0,t(32991).A)(r,[["render",function(e,a){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[a[7]||(a[7]=(0,o.Lk)("h1",{id:"sunricher-sr-zg9060a-gs",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg9060a-gs"},[(0,o.Lk)("span",null,"Sunricher SR-ZG9060A-GS")])],-1)),(0,o.Lk)("table",null,[a[6]||(a[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[a[2]||(a[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"SR-ZG9060A-GS")],-1)),(0,o.Lk)("tr",null,[a[1]||(a[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=Sunricher"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)("Sunricher")]))),_:1})])]),a[3]||(a[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Smart combustible gas sensor")],-1)),a[4]||(a[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"gas_alarm_1, gas_alarm_2, tamper, battery_low, warning")],-1)),a[5]||(a[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9060A-GS.png",alt:"Sunricher SR-ZG9060A-GS"})])],-1))])]),a[8]||(a[8]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="gas-alarm-1-binary" tabindex="-1"><a class="header-anchor" href="#gas-alarm-1-binary"><span>Gas alarm 1 (binary)</span></a></h3><p>Indicates whether the device detected gas (alarm_1). Value can be found in the published state on the <code>gas_alarm_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas alarm 1 is ON, if <code>false</code> OFF.</p><h3 id="gas-alarm-2-binary" tabindex="-1"><a class="header-anchor" href="#gas-alarm-2-binary"><span>Gas alarm 2 (binary)</span></a></h3><p>Indicates whether the device detected gas (alarm_2). Value can be found in the published state on the <code>gas_alarm_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas alarm 2 is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul>',12))])}]]),d=JSON.parse('{"path":"/devices/SR-ZG9060A-GS.html","title":"Sunricher SR-ZG9060A-GS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9060A-GS control via MQTT","description":"Integrate your Sunricher SR-ZG9060A-GS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:02:57.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas alarm 1 (binary)","slug":"gas-alarm-1-binary","link":"#gas-alarm-1-binary","children":[]},{"level":3,"title":"Gas alarm 2 (binary)","slug":"gas-alarm-2-binary","link":"#gas-alarm-2-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]}]}],"git":{"updatedTime":1706703678000},"filePathRelative":"devices/SR-ZG9060A-GS.md"}')}}]);