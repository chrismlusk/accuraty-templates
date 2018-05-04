<footer class="footer">
  <section class="footer-upper  container-fluid">
    <div class="row">
      <div class="col-md-6">

        <a class="footer-brand" href="<%= NavigateUrl(PortalSettings.HomeTabId) %>">{SITE_BRAND}</a>

        <address class="footer-address" itemscope itemtype="http://schema.org/PostalAddress">
          <span itemprop="name" class="sr-only">{CLIENT_NAME}</span><br>
          <span itemprop="streetAddress">{STREET_ADDRESS}</span><br>
          <span itemprop="addressLocality">{CITY}</span>,
          <span itemprop="addressRegion">{STATE}</span>
          <span itemprop="postalCode">{ZIP_CODE}</span>
          <span itemprop="addressCountry" class="sr-only">United States</span>
        </address>
      </div>
      <div class="col-md-6">
        <nav class="nav flex-column" itemscope itemtype="http://schema.org/Organization">
          <link itemprop="url" href="<%=PortalSettings.PortalAlias.HTTPAlias%>">
          <a class="nav-link" href="#" target="_blank" itemprop="sameAs">Facebook</a>
          <a class="nav-link" href="#" target="_blank" itemprop="sameAs">Twitter</a>
          <a class="nav-link" href="#" target="_blank" itemprop="sameAs">YouTube</a>
        </nav>
      </div>
    </div>
  </section>
  <section class="footer-lower  container-fluid">
    <div class="row">
      <div class="col-md-6">
        <p class="footer-credits  text-center text-md-left">
          <span><dnn:COPYRIGHT runat="server" id="dnnCopyright" /></span>
        </p>
      </div>
      <div class="col-md-6">
        <p class="footer-credits  text-center text-md-right">
          Design, development, and hosting by <a class="footer-link" href="http://accuraty.com" target="_blank">Accuraty Solutions</a>.
        </p>
      </div>
    </div>
  </section>
</footer>
