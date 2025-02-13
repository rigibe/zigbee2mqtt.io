"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58085],{7417:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>s});var a=o(6254);const d={},c=(0,o(32991).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"electsmart-pro-900z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#electsmart-pro-900z"},[(0,a.Lk)("span",null,"ElectSmart PRO-900Z")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"PRO-900Z")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=ElectSmart"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("ElectSmart")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Thermostat for electric floor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"child_lock, eco_mode, eco_temperature, climate (system_mode, preset, current_heating_setpoint, local_temperature, local_temperature_calibration, running_state), deadzone_temperature, min_temperature, max_temperature, min_temperature_limit, max_temperature_limit, sensor, external_temperature_input, brightness, display_brightness, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, factory_reset")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PRO-900Z.png",alt:"ElectSmart PRO-900Z"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h2><p>With the device in the &#39;on&#39; state, press and hold the control knob to turn the unit off. While the knob is pressed, press and hold the &#39;clock&#39; button for 8 seconds. The device will now enter the pairing mode, and the zigbee signal indicator will start flashing on the display.</p><hr><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> child lock is ON, if <code>OFF</code> OFF.</p><h3 id="eco-mode-binary" tabindex="-1"><a class="header-anchor" href="#eco-mode-binary"><span>ECO mode (binary)</span></a></h3><p>Default: Off. Value can be found in the published state on the <code>eco_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_mode&quot;: NEW_VALUE}</code>. If value equals <code>OFF</code> eCO mode is ON, if <code>ON</code> OFF.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Max temperature in ECO mode. Default: 20. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>preset</code>, <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>1</code>.</li></ul><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>Hysteresis. Default: 1. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric"><span>Min temperature (numeric)</span></a></h3><p>Default: 5. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric"><span>Max temperature (numeric)</span></a></h3><p>Default: 35. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>45</code>. The unit of this value is <code>°C</code>.</p><h3 id="low-temperature-protection-numeric" tabindex="-1"><a class="header-anchor" href="#low-temperature-protection-numeric"><span>Low temperature protection (numeric)</span></a></h3><p>Default: 0. Value can be found in the published state on the <code>min_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="high-temperature-protection-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-protection-numeric"><span>High temperature protection (numeric)</span></a></h3><p>Default: 45. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>25</code> and the maximum value is <code>70</code>. The unit of this value is <code>°C</code>.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>Choose which sensor to use. Default: AL. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>IN</code>, <code>OU</code>, <code>AL</code>.</p><h3 id="floor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#floor-temperature-numeric"><span>Floor temperature (numeric)</span></a></h3><p>Temperature from floor sensor. Value can be found in the published state on the <code>external_temperature_input</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="screen-brightness-06-00-22-00-numeric" tabindex="-1"><a class="header-anchor" href="#screen-brightness-06-00-22-00-numeric"><span>Screen brightness 06:00 - 22:00 (numeric)</span></a></h3><p>0 - on for 10 seconds. Default: 6. Value can be found in the published state on the <code>brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>.</p><h3 id="screen-brightness-22-00-06-00-numeric" tabindex="-1"><a class="header-anchor" href="#screen-brightness-22-00-06-00-numeric"><span>Screen brightness 22:00 - 06:00 (numeric)</span></a></h3><p>0 - on for 10 seconds. Default: 3. Value can be found in the published state on the <code>display_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>.</p><h3 id="schedule-for-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-monday-text"><span>Schedule for monday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-for-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-tuesday-text"><span>Schedule for tuesday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-for-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-wednesday-text"><span>Schedule for wednesday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-for-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-thursday-text"><span>Schedule for thursday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-for-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-friday-text"><span>Schedule for friday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-for-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-saturday-text"><span>Schedule for saturday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-for-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-for-sunday-text"><span>Schedule for sunday (text)</span></a></h3><p>Default: 06:00/20.0 11:30/20.0 13:30/20.0 17:30/20.0. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p><h3 id="factory-reset-enum" tabindex="-1"><a class="header-anchor" href="#factory-reset-enum"><span>Factory reset (enum)</span></a></h3><p>Reset all settings to factory ones. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. The possible values are: <code>factory reset</code>.</p>',47))])}]]),s=JSON.parse('{"path":"/devices/PRO-900Z.html","title":"ElectSmart PRO-900Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ElectSmart PRO-900Z control via MQTT","description":"Integrate your ElectSmart PRO-900Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:36:44.000Z"},"headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"ECO mode (binary)","slug":"eco-mode-binary","link":"#eco-mode-binary","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Min temperature (numeric)","slug":"min-temperature-numeric","link":"#min-temperature-numeric","children":[]},{"level":3,"title":"Max temperature (numeric)","slug":"max-temperature-numeric","link":"#max-temperature-numeric","children":[]},{"level":3,"title":"Low temperature protection (numeric)","slug":"low-temperature-protection-numeric","link":"#low-temperature-protection-numeric","children":[]},{"level":3,"title":"High temperature protection (numeric)","slug":"high-temperature-protection-numeric","link":"#high-temperature-protection-numeric","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Floor temperature (numeric)","slug":"floor-temperature-numeric","link":"#floor-temperature-numeric","children":[]},{"level":3,"title":"Screen brightness 06:00 - 22:00 (numeric)","slug":"screen-brightness-06-00-22-00-numeric","link":"#screen-brightness-06-00-22-00-numeric","children":[]},{"level":3,"title":"Screen brightness 22:00 - 06:00 (numeric)","slug":"screen-brightness-22-00-06-00-numeric","link":"#screen-brightness-22-00-06-00-numeric","children":[]},{"level":3,"title":"Schedule for monday (text)","slug":"schedule-for-monday-text","link":"#schedule-for-monday-text","children":[]},{"level":3,"title":"Schedule for tuesday (text)","slug":"schedule-for-tuesday-text","link":"#schedule-for-tuesday-text","children":[]},{"level":3,"title":"Schedule for wednesday (text)","slug":"schedule-for-wednesday-text","link":"#schedule-for-wednesday-text","children":[]},{"level":3,"title":"Schedule for thursday (text)","slug":"schedule-for-thursday-text","link":"#schedule-for-thursday-text","children":[]},{"level":3,"title":"Schedule for friday (text)","slug":"schedule-for-friday-text","link":"#schedule-for-friday-text","children":[]},{"level":3,"title":"Schedule for saturday (text)","slug":"schedule-for-saturday-text","link":"#schedule-for-saturday-text","children":[]},{"level":3,"title":"Schedule for sunday (text)","slug":"schedule-for-sunday-text","link":"#schedule-for-sunday-text","children":[]},{"level":3,"title":"Factory reset (enum)","slug":"factory-reset-enum","link":"#factory-reset-enum","children":[]}]}],"git":{"updatedTime":1706703678000},"filePathRelative":"devices/PRO-900Z.md"}')}}]);