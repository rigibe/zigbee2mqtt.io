"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[99470],{98906:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>r});var a=i(6254);const n={},o=(0,i(32991).A)(n,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"namron-4512765",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#namron-4512765"},[(0,a.Lk)("span",null,"Namron 4512765")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"4512765")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Namron"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Namron")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee humidity and temperature Sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, temperature, humidity")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4512765.png",alt:"Namron 4512765"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="to-add-device-to-zigbee-network" tabindex="-1"><a class="header-anchor" href="#to-add-device-to-zigbee-network"><span>To add device to zigbee network:</span></a></h3><p>Short press button 3 times;</p><p>• if the device is not in a network, the light will slowly blink orange, then it will start searching network and adding.</p><p>• if the device is in a network, the light will blink slowly green for 5s. If so, you need to factory reset the device, and then pair.</p><h3 id="how-to-factory-reset-device" tabindex="-1"><a class="header-anchor" href="#how-to-factory-reset-device"><span>How to factory reset device:</span></a></h3><p>Long Press button for 10s, the light will blink red quickly. after 10s, release button and light will stay solid for 3s to reset.</p><h3 id="manufacturers-explanation-of-indicator-light-a" tabindex="-1"><a class="header-anchor" href="#manufacturers-explanation-of-indicator-light-a"><span>Manufacturers explanation of indicator light A:</span></a></h3><p>A blink slowly in green for 7 times: Device powered on</p><p>A blink slowly in orange:Network pairing(timeout 2mins)</p><p>A stay in solid green:Network pairing successful.</p><p>A stay in solid orange for 3s:Network pairing failed.</p><p>A blinking in orange once per minute:battery power empty soon</p><p>A blinking quickly in orange for 3s:Lost connection with hub</p><h3 id="manufacturer-website" tabindex="-1"><a class="header-anchor" href="#manufacturer-website"><span>Manufacturer website:</span></a></h3><p>https://www.namron.com/products/namron-zigbee-fuktighet-og-temperatursensor/</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',17)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>',8))])}]]),r=JSON.parse('{"path":"/devices/4512765.html","title":"Namron 4512765 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Namron 4512765 control via MQTT","description":"Integrate your Namron 4512765 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"To add device to zigbee network:","slug":"to-add-device-to-zigbee-network","link":"#to-add-device-to-zigbee-network","children":[]},{"level":3,"title":"How to factory reset device:","slug":"how-to-factory-reset-device","link":"#how-to-factory-reset-device","children":[]},{"level":3,"title":"Manufacturers explanation of indicator light A:","slug":"manufacturers-explanation-of-indicator-light-a","link":"#manufacturers-explanation-of-indicator-light-a","children":[]},{"level":3,"title":"Manufacturer website:","slug":"manufacturer-website","link":"#manufacturer-website","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]}]}],"git":{"updatedTime":1706703678000},"filePathRelative":"devices/4512765.md"}')}}]);