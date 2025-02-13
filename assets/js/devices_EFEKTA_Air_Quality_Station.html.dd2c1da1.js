"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82646],{48631:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>c});var a=i(6254);const o={},n=(0,i(32991).A)(o,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"efekta-efekta-air-quality-station",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-air-quality-station"},[(0,a.Lk)("span",null,"EFEKTA EFEKTA_Air_Quality_Station")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EFEKTA_Air_Quality_Station")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=EFEKTA"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Air quality station")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"co2, pm1, pm25, pm4, pm10, pm_size, aqi_25_index, voc_index, temperature, humidity, illuminance, report_delay, auto_brightness, night_onoff_backlight, night_on_backlight, night_off_backlight, temperature_offset, humidity_offset, auto_clean_interval, manual_clean, set_altitude, forced_recalibration, manual_forced_recalibration, automatic_self_calibration, factory_reset_co2")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_Air_Quality_Station.png",alt:"EFEKTA EFEKTA_Air_Quality_Station"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pm25_calibration</code>: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="pm1-numeric" tabindex="-1"><a class="header-anchor" href="#pm1-numeric"><span>Pm1 (numeric)</span></a></h3><p>Measured PM1.0 (particulate matter) concentration. Value can be found in the published state on the <code>pm1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="pm25-numeric" tabindex="-1"><a class="header-anchor" href="#pm25-numeric"><span>Pm25 (numeric)</span></a></h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="pm4-numeric" tabindex="-1"><a class="header-anchor" href="#pm4-numeric"><span>Pm4 (numeric)</span></a></h3><p>Measured PM4.0 (particulate matter) concentration. Value can be found in the published state on the <code>pm4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="pm10-numeric" tabindex="-1"><a class="header-anchor" href="#pm10-numeric"><span>Pm10 (numeric)</span></a></h3><p>Measured PM10.0 (particulate matter) concentration. Value can be found in the published state on the <code>pm10</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="pm-size-numeric" tabindex="-1"><a class="header-anchor" href="#pm-size-numeric"><span>Pm size (numeric)</span></a></h3><p>Typical Particle Size. Value can be found in the published state on the <code>pm_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µm</code>.</p><h3 id="aqi-25-index-numeric" tabindex="-1"><a class="header-anchor" href="#aqi-25-index-numeric"><span>Aqi 25 index (numeric)</span></a></h3><p>PM 2.5 INDEX. Value can be found in the published state on the <code>aqi_25_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>PM2.5 Index</code>.</p><h3 id="voc-index-numeric" tabindex="-1"><a class="header-anchor" href="#voc-index-numeric"><span>Voc index (numeric)</span></a></h3><p>VOC index. Value can be found in the published state on the <code>voc_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VOC Index points</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured value of the built-in temperature sensor. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured value of the built-in humidity sensor. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="report-delay-numeric" tabindex="-1"><a class="header-anchor" href="#report-delay-numeric"><span>Report delay (numeric)</span></a></h3><p>Setting the sensor report delay. Setting the time in seconds (6-600), by default 15 seconds. Value can be found in the published state on the <code>report_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>6</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="auto-brightness-binary" tabindex="-1"><a class="header-anchor" href="#auto-brightness-binary"><span>Auto brightness (binary)</span></a></h3><p>Enable or Disable Auto Brightness of the Display. Value can be found in the published state on the <code>auto_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_brightness&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto brightness is ON, if <code>OFF</code> OFF.</p><h3 id="night-onoff-backlight-binary" tabindex="-1"><a class="header-anchor" href="#night-onoff-backlight-binary"><span>Night onoff backlight (binary)</span></a></h3><p>Complete shutdown of the backlight at night mode. Value can be found in the published state on the <code>night_onoff_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_onoff_backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night onoff backlight is ON, if <code>OFF</code> OFF.</p><h3 id="night-on-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-on-backlight-numeric"><span>Night on backlight (numeric)</span></a></h3><p>Night mode activation time. Value can be found in the published state on the <code>night_on_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_on_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="night-off-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-off-backlight-numeric"><span>Night off backlight (numeric)</span></a></h3><p>Night mode activation time. Value can be found in the published state on the <code>night_off_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_off_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="auto-clean-interval-numeric" tabindex="-1"><a class="header-anchor" href="#auto-clean-interval-numeric"><span>Auto clean interval (numeric)</span></a></h3><p>Auto clean interval PM2.5 sensor. Value can be found in the published state on the <code>auto_clean_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_clean_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>day</code>.</p><h3 id="manual-clean-binary" tabindex="-1"><a class="header-anchor" href="#manual-clean-binary"><span>Manual clean (binary)</span></a></h3><p>Manual clean PM2.5 sensor. Value can be found in the published state on the <code>manual_clean</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_clean&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> manual clean is ON, if <code>OFF</code> OFF.</p><h3 id="set-altitude-numeric" tabindex="-1"><a class="header-anchor" href="#set-altitude-numeric"><span>Set altitude (numeric)</span></a></h3><p>Setting the altitude above sea level (for high accuracy of the CO2 sensor). Value can be found in the published state on the <code>set_altitude</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_altitude&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3000</code>. The unit of this value is <code>meters</code>.</p><h3 id="forced-recalibration-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-binary"><span>Forced recalibration (binary)</span></a></h3><p>Start FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced recalibration is ON, if <code>OFF</code> OFF.</p><h3 id="manual-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#manual-forced-recalibration-numeric"><span>Manual forced recalibration (numeric)</span></a></h3><p>Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>manual_forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="automatic-self-calibration-binary" tabindex="-1"><a class="header-anchor" href="#automatic-self-calibration-binary"><span>Automatic self calibration (binary)</span></a></h3><p>Automatic self calibration. Value can be found in the published state on the <code>automatic_self_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;automatic_self_calibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> automatic self calibration is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-co2-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-co2-binary"><span>Factory reset co2 (binary)</span></a></h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>factory_reset_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset co2 is ON, if <code>OFF</code> OFF.</p>',52))])}]]),c=JSON.parse('{"path":"/devices/EFEKTA_Air_Quality_Station.html","title":"EFEKTA EFEKTA_Air_Quality_Station control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_Air_Quality_Station control via MQTT","description":"Integrate your EFEKTA EFEKTA_Air_Quality_Station via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-06T19:24:12.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Pm1 (numeric)","slug":"pm1-numeric","link":"#pm1-numeric","children":[]},{"level":3,"title":"Pm25 (numeric)","slug":"pm25-numeric","link":"#pm25-numeric","children":[]},{"level":3,"title":"Pm4 (numeric)","slug":"pm4-numeric","link":"#pm4-numeric","children":[]},{"level":3,"title":"Pm10 (numeric)","slug":"pm10-numeric","link":"#pm10-numeric","children":[]},{"level":3,"title":"Pm size (numeric)","slug":"pm-size-numeric","link":"#pm-size-numeric","children":[]},{"level":3,"title":"Aqi 25 index (numeric)","slug":"aqi-25-index-numeric","link":"#aqi-25-index-numeric","children":[]},{"level":3,"title":"Voc index (numeric)","slug":"voc-index-numeric","link":"#voc-index-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Report delay (numeric)","slug":"report-delay-numeric","link":"#report-delay-numeric","children":[]},{"level":3,"title":"Auto brightness (binary)","slug":"auto-brightness-binary","link":"#auto-brightness-binary","children":[]},{"level":3,"title":"Night onoff backlight (binary)","slug":"night-onoff-backlight-binary","link":"#night-onoff-backlight-binary","children":[]},{"level":3,"title":"Night on backlight (numeric)","slug":"night-on-backlight-numeric","link":"#night-on-backlight-numeric","children":[]},{"level":3,"title":"Night off backlight (numeric)","slug":"night-off-backlight-numeric","link":"#night-off-backlight-numeric","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity offset (numeric)","slug":"humidity-offset-numeric","link":"#humidity-offset-numeric","children":[]},{"level":3,"title":"Auto clean interval (numeric)","slug":"auto-clean-interval-numeric","link":"#auto-clean-interval-numeric","children":[]},{"level":3,"title":"Manual clean (binary)","slug":"manual-clean-binary","link":"#manual-clean-binary","children":[]},{"level":3,"title":"Set altitude (numeric)","slug":"set-altitude-numeric","link":"#set-altitude-numeric","children":[]},{"level":3,"title":"Forced recalibration (binary)","slug":"forced-recalibration-binary","link":"#forced-recalibration-binary","children":[]},{"level":3,"title":"Manual forced recalibration (numeric)","slug":"manual-forced-recalibration-numeric","link":"#manual-forced-recalibration-numeric","children":[]},{"level":3,"title":"Automatic self calibration (binary)","slug":"automatic-self-calibration-binary","link":"#automatic-self-calibration-binary","children":[]},{"level":3,"title":"Factory reset co2 (binary)","slug":"factory-reset-co2-binary","link":"#factory-reset-co2-binary","children":[]}]}],"git":{"updatedTime":1706703678000},"filePathRelative":"devices/EFEKTA_Air_Quality_Station.md"}')}}]);