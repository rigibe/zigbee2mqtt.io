"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14842],{41446:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>i,data:()=>c});var o=a(6254);const r={},i=(0,a(32991).A)(r,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[9]||(t[9]=(0,o.Lk)("h1",{id:"suton-stb3l-125-zj",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#suton-stb3l-125-zj"},[(0,o.Lk)("span",null,"SUTON STB3L-125-ZJ")])],-1)),(0,o.Lk)("table",null,[t[7]||(t[7]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"STB3L-125-ZJ")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=SUTON"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("SUTON")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Zigbee DIN RCBO energy meter")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"switch (state), energy, fault, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, temperature, leakage_test, over_current_breaker, over_current_threshold, over_voltage_breaker, over_voltage_threshold, under_voltage_breaker, under_voltage_threshold, insufficient_balance_breaker, insufficient_balance_threshold, overload_breaker, overload_threshold, leakage_breaker, leakage_threshold, high_temperature_breaker, high_temperature_threshold")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/STB3L-125-ZJ.png",alt:"SUTON STB3L-125-ZJ"})])],-1)),t[6]||(t[6]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"White-label"),(0,o.Lk)("td",null,"SUTON STB3L-125/ZJ")],-1))])]),t[10]||(t[10]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[8]||(t[8]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,o.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="fault-enum" tabindex="-1"><a class="header-anchor" href="#fault-enum"><span>Fault (enum)</span></a></h3><p>Fault status of the device (clear = nothing). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>clear</code>, <code>short_circuit_alarm</code>, <code>surge_alarm</code>, <code>overload_alarm</code>, <code>leakagecurr_alarm</code>, <code>temp_dif_fault</code>, <code>fire_alarm</code>, <code>high_power_alarm</code>, <code>self_test_alarm</code>, <code>ov_cr</code>, <code>unbalance_alarm</code>, <code>ov_vol</code>, <code>undervoltage_alarm</code>, <code>miss_phase_alarm</code>, <code>outage_alarm</code>, <code>magnetism_alarm</code>, <code>credit_alarm</code>, <code>no_balance_alarm</code>.</p><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric"><span>Voltage a (numeric)</span></a></h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-b-numeric"><span>Voltage b (numeric)</span></a></h3><p>Measured electrical potential value (phase B). Value can be found in the published state on the <code>voltage_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-c-numeric"><span>Voltage c (numeric)</span></a></h3><p>Measured electrical potential value (phase C). Value can be found in the published state on the <code>voltage_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric"><span>Power a (numeric)</span></a></h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric"><span>Power b (numeric)</span></a></h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-c-numeric"><span>Power c (numeric)</span></a></h3><p>Instantaneous measured power (phase C). Value can be found in the published state on the <code>power_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric"><span>Current a (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric"><span>Current b (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-c-numeric"><span>Current c (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase C). Value can be found in the published state on the <code>current_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="leakage-test-binary" tabindex="-1"><a class="header-anchor" href="#leakage-test-binary"><span>Leakage test (binary)</span></a></h3><p>Turn ON to perform a leagage test. Value can be found in the published state on the <code>leakage_test</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leakage_test&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> leakage test is ON, if <code>OFF</code> OFF.</p><h3 id="over-current-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-current-breaker-binary"><span>Over current breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>over_current_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over current breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-current-threshold-numeric"><span>Over current threshold (numeric)</span></a></h3><p>Setup the value on the device. Value can be found in the published state on the <code>over_current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>63</code>. The unit of this value is <code>A</code>.</p><h3 id="over-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-voltage-breaker-binary"><span>Over voltage breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>over_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric"><span>Over voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>250</code> and the maximum value is <code>300</code>. The unit of this value is <code>V</code>.</p><h3 id="under-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#under-voltage-breaker-binary"><span>Under voltage breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>under_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> under voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric"><span>Under voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>150</code> and the maximum value is <code>200</code>. The unit of this value is <code>V</code>.</p><h3 id="insufficient-balance-breaker-binary" tabindex="-1"><a class="header-anchor" href="#insufficient-balance-breaker-binary"><span>Insufficient balance breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>insufficient_balance_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;insufficient_balance_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> insufficient balance breaker is ON, if <code>OFF</code> OFF.</p><h3 id="insufficient-balance-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#insufficient-balance-threshold-numeric"><span>Insufficient balance threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>insufficient_balance_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;insufficient_balance_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>65535</code>. The unit of this value is <code>kWh</code>.</p><h3 id="overload-breaker-binary" tabindex="-1"><a class="header-anchor" href="#overload-breaker-binary"><span>Overload breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>overload_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;overload_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> overload breaker is ON, if <code>OFF</code> OFF.</p><h3 id="overload-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#overload-threshold-numeric"><span>Overload threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>overload_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;overload_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>25</code>. The unit of this value is <code>kW</code>.</p><h3 id="leakage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#leakage-breaker-binary"><span>Leakage breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>leakage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leakage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> leakage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="leakage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#leakage-threshold-numeric"><span>Leakage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>leakage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leakage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>90</code>. The unit of this value is <code>mA</code>.</p><h3 id="high-temperature-breaker-binary" tabindex="-1"><a class="header-anchor" href="#high-temperature-breaker-binary"><span>High temperature breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>high_temperature_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> high temperature breaker is ON, if <code>OFF</code> OFF.</p><h3 id="high-temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-threshold-numeric"><span>High temperature threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>high_temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>40</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p>',58))])}]]),c=JSON.parse('{"path":"/devices/STB3L-125-ZJ.html","title":"SUTON STB3L-125-ZJ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SUTON STB3L-125-ZJ control via MQTT","description":"Integrate your SUTON STB3L-125-ZJ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:39:25.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Fault (enum)","slug":"fault-enum","link":"#fault-enum","children":[]},{"level":3,"title":"Voltage a (numeric)","slug":"voltage-a-numeric","link":"#voltage-a-numeric","children":[]},{"level":3,"title":"Voltage b (numeric)","slug":"voltage-b-numeric","link":"#voltage-b-numeric","children":[]},{"level":3,"title":"Voltage c (numeric)","slug":"voltage-c-numeric","link":"#voltage-c-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Power c (numeric)","slug":"power-c-numeric","link":"#power-c-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Current c (numeric)","slug":"current-c-numeric","link":"#current-c-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Leakage test (binary)","slug":"leakage-test-binary","link":"#leakage-test-binary","children":[]},{"level":3,"title":"Over current breaker (binary)","slug":"over-current-breaker-binary","link":"#over-current-breaker-binary","children":[]},{"level":3,"title":"Over current threshold (numeric)","slug":"over-current-threshold-numeric","link":"#over-current-threshold-numeric","children":[]},{"level":3,"title":"Over voltage breaker (binary)","slug":"over-voltage-breaker-binary","link":"#over-voltage-breaker-binary","children":[]},{"level":3,"title":"Over voltage threshold (numeric)","slug":"over-voltage-threshold-numeric","link":"#over-voltage-threshold-numeric","children":[]},{"level":3,"title":"Under voltage breaker (binary)","slug":"under-voltage-breaker-binary","link":"#under-voltage-breaker-binary","children":[]},{"level":3,"title":"Under voltage threshold (numeric)","slug":"under-voltage-threshold-numeric","link":"#under-voltage-threshold-numeric","children":[]},{"level":3,"title":"Insufficient balance breaker (binary)","slug":"insufficient-balance-breaker-binary","link":"#insufficient-balance-breaker-binary","children":[]},{"level":3,"title":"Insufficient balance threshold (numeric)","slug":"insufficient-balance-threshold-numeric","link":"#insufficient-balance-threshold-numeric","children":[]},{"level":3,"title":"Overload breaker (binary)","slug":"overload-breaker-binary","link":"#overload-breaker-binary","children":[]},{"level":3,"title":"Overload threshold (numeric)","slug":"overload-threshold-numeric","link":"#overload-threshold-numeric","children":[]},{"level":3,"title":"Leakage breaker (binary)","slug":"leakage-breaker-binary","link":"#leakage-breaker-binary","children":[]},{"level":3,"title":"Leakage threshold (numeric)","slug":"leakage-threshold-numeric","link":"#leakage-threshold-numeric","children":[]},{"level":3,"title":"High temperature breaker (binary)","slug":"high-temperature-breaker-binary","link":"#high-temperature-breaker-binary","children":[]},{"level":3,"title":"High temperature threshold (numeric)","slug":"high-temperature-threshold-numeric","link":"#high-temperature-threshold-numeric","children":[]}]}],"git":{"updatedTime":1706703678000},"filePathRelative":"devices/STB3L-125-ZJ.md"}')}}]);