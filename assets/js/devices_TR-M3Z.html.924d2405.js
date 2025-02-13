"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11045],{69150:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>i});var a=o(6254);const d={},c=(0,o(32991).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"tuya-tr-m3z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-tr-m3z"},[(0,a.Lk)("span",null,"Tuya TR-M3Z")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TR-M3Z")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Thermostatic radiator valve actuator")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"child_lock, battery, battery_low, climate (current_heating_setpoint, local_temperature, preset, system_mode, running_state, local_temperature_calibration), schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, eco_temperature, comfort_temperature, holiday_temperature, window_detection, window_open, scale_protection, frost_protection, frost_protection_temperature, temperature_accuracy, error")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TR-M3Z.png",alt:"Tuya TR-M3Z"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>preset</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>schedule</code>, <code>eco</code>, <code>comfort</code>, <code>frost_protection</code>, <code>holiday</code>, <code>off</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9.5</code> and the maximum value is <code>9.5</code> with a step size of <code>0.5</code>.</li></ul><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text"><span>Schedule monday (text)</span></a></h3><p>Schedule for monday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text"><span>Schedule tuesday (text)</span></a></h3><p>Schedule for tuesday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text"><span>Schedule wednesday (text)</span></a></h3><p>Schedule for wednesday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text"><span>Schedule thursday (text)</span></a></h3><p>Schedule for thursday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text"><span>Schedule friday (text)</span></a></h3><p>Schedule for friday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text"><span>Schedule saturday (text)</span></a></h3><p>Schedule for saturday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text"><span>Schedule sunday (text)</span></a></h3><p>Schedule for sunday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric"><span>Comfort temperature (numeric)</span></a></h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="holiday-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-temperature-numeric"><span>Holiday temperature (numeric)</span></a></h3><p>Holiday temperature. Value can be found in the published state on the <code>holiday_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="window-detection-binary" tabindex="-1"><a class="header-anchor" href="#window-detection-binary"><span>Window detection (binary)</span></a></h3><p>Startup: when room temperature decreases by 3°C within 5 minutes, stop heating. Close: when room temperature rises by 3 degrees / 48 minutes later / manual (three ways). After the window opening mode is turned on, one of these three conditions can trigger to exit the window opening mode.. Value can be found in the published state on the <code>window_detection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> window detection is ON, if <code>OFF</code> OFF.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary"><span>Window open (binary)</span></a></h3><p>Window status CLOSE or OPEN . Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>OPEN</code> window open is ON, if <code>CLOSE</code> OFF.</p><h3 id="scale-protection-binary" tabindex="-1"><a class="header-anchor" href="#scale-protection-binary"><span>Scale protection (binary)</span></a></h3><p>If the heat sink is not fully opened within two weeks or is not used for a long time, the valve will be blocked due to silting up and the heat sink will not be able to be used. To ensure normal use of the heat sink, the controller will automatically open the valve fully every two weeks. It will run for 30 seconds per time with the screen displaying &quot;Ad&quot;, then return to its normal working state again.. Value can be found in the published state on the <code>scale_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;scale_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> scale protection is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>When the room temperature is lower than 5 °C, the valve opens; when the temperature rises to 8 °C, the valve closes.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#frost-protection-temperature-numeric"><span>Frost protection temperature (numeric)</span></a></h3><p>Value can be found in the published state on the <code>frost_protection_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-accuracy-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-accuracy-numeric"><span>Temperature accuracy (numeric)</span></a></h3><p>The difference required between local temperature and set point to trigger the valve.. Value can be found in the published state on the <code>temperature_accuracy</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_accuracy&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="error-numeric" tabindex="-1"><a class="header-anchor" href="#error-numeric"><span>Error (numeric)</span></a></h3><p>If NTC is damaged, &quot;Er&quot; will be on the TRV display.. Value can be found in the published state on the <code>error</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',44))])}]]),i=JSON.parse('{"path":"/devices/TR-M3Z.html","title":"Tuya TR-M3Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TR-M3Z control via MQTT","description":"Integrate your Tuya TR-M3Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:47.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Comfort temperature (numeric)","slug":"comfort-temperature-numeric","link":"#comfort-temperature-numeric","children":[]},{"level":3,"title":"Holiday temperature (numeric)","slug":"holiday-temperature-numeric","link":"#holiday-temperature-numeric","children":[]},{"level":3,"title":"Window detection (binary)","slug":"window-detection-binary","link":"#window-detection-binary","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Scale protection (binary)","slug":"scale-protection-binary","link":"#scale-protection-binary","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Frost protection temperature (numeric)","slug":"frost-protection-temperature-numeric","link":"#frost-protection-temperature-numeric","children":[]},{"level":3,"title":"Temperature accuracy (numeric)","slug":"temperature-accuracy-numeric","link":"#temperature-accuracy-numeric","children":[]},{"level":3,"title":"Error (numeric)","slug":"error-numeric","link":"#error-numeric","children":[]}]}],"git":{"updatedTime":1706703678000},"filePathRelative":"devices/TR-M3Z.md"}')}}]);