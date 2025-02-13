"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94146],{81915:(a,e,n)=>{n.r(e),n.d(e,{comp:()=>l,data:()=>t});var s=n(6254);const i={},l=(0,n(32991).A)(i,[["render",function(a,e){return(0,s.uX)(),(0,s.CE)("div",null,e[0]||(e[0]=[(0,s.Fv)('<h1 id="device-availability" tabindex="-1"><a class="header-anchor" href="#device-availability"><span>Device-Availability</span></a></h1><p>The availability feature checks whether your devices are online. The availability state of a device is published to <code>zigbee2mqtt/[FRIENDLY_NAME]/availability</code> with payload <code>{&quot;state&quot;:&quot;online&quot;}</code> or <code>{&quot;state&quot;:&quot;offline&quot;}</code> (this message is a retained MQTT message).</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Optional: Availability feature</span></span>\n<span class="line"><span class="token key atrule">availability</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Enable the feature (default: false)</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The availability feature works differently for active and passive devices.</p><ul><li>Active devices (routers or mains powered end devices): by default they have to check-in every 10 minutes. If they don&#39;t, they will be pinged, if that fails the device will be marked as <code>offline</code>.</li><li>Passive devices (everything that is not an active device, mostly battery powered devices): these devices need to check-in every 25 hours, they cannot be pinged so if they don&#39;t they will be marked as <code>offline</code>.</li></ul><p>Note that this timeout is persisted between Zigbee2MQTT restarts. So if you for example stop Zigbee2MQTT for longer than 10 minutes, all your active devices will be marked as <code>offline</code> initially.</p><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Note: all options are optional</span></span>\n<span class="line"><span class="token key atrule">availability</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token key atrule">active</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token comment"># Time after which an active device will be marked as offline in</span></span>\n<span class="line">        <span class="token comment"># minutes (default = 10 minutes)</span></span>\n<span class="line">        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">10</span></span>\n<span class="line">    <span class="token key atrule">passive</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token comment"># Time after which a passive device will be marked as offline in</span></span>\n<span class="line">        <span class="token comment"># minutes (default = 1500 minutes aka 25 hours)</span></span>\n<span class="line">        <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">1500</span></span>\n<span class="line"></span>\n<span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_bulb&#39;</span></span>\n<span class="line">        <span class="token comment"># Set availability: false to disable the availability feature for a specific device</span></span>\n<span class="line">        <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span></span>\n<span class="line">        <span class="token comment"># Change availability timeout to 3 minutes for this device only</span></span>\n<span class="line">        <span class="token key atrule">availability</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">3</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to enable the availability feature for only certain devices, don&#39;t add <code>availability: enabled: true</code> in your <code>configuration.yaml</code> but specify it for that device only, e.g.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">&#39;0x87654321&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> <span class="token string">&#39;my_switch&#39;</span></span>\n<span class="line">        <span class="token comment"># Enable availability for just &#39;my_switch&#39;</span></span>\n<span class="line">        <span class="token key atrule">availability</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-retrieval" tabindex="-1"><a class="header-anchor" href="#state-retrieval"><span>State retrieval</span></a></h2><p>When the availability feature is enabled and a device reconnects or announces itself on the network, Zigbee2MQTT will retrieve the state of the device. This is e.g. handy when a bulb turns itself on after being reconnected to mains power. The following attributes will be read: <code>state</code>, <code>brightness</code>, <code>color_temp</code> and <code>color</code>.</p><h2 id="performance-considerations" tabindex="-1"><a class="header-anchor" href="#performance-considerations"><span>Performance considerations</span></a></h2><ul><li>The pinging can be heavy on the coordinator, especially if you are using a CC2530 or CC2531 adapter.</li><li>Higher <code>timeout</code> for active devices results in less pinging so less stress on the coordinator.</li></ul><h2 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>Groups</span></a></h2><p>When enabling device availability, availability will also be enabled for groups. A group is marked as available when at least one device in it is available.</p>',16)]))}]]),t=JSON.parse('{"path":"/guide/configuration/device-availability.html","title":"Device-Availability","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Advanced configuration","slug":"advanced-configuration","link":"#advanced-configuration","children":[]},{"level":2,"title":"State retrieval","slug":"state-retrieval","link":"#state-retrieval","children":[]},{"level":2,"title":"Performance considerations","slug":"performance-considerations","link":"#performance-considerations","children":[]},{"level":2,"title":"Groups","slug":"groups","link":"#groups","children":[]}],"git":{"updatedTime":1706703678000},"filePathRelative":"guide/configuration/device-availability.md"}')}}]);