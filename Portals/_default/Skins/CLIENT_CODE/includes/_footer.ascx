<footer class="footer">
  <section class="footer-upper  container-fluid">
    <div class="row">
      <div class="col-md-6">

        <a
          class="footer-brand"
          href="<%= NavigateUrl(PortalSettings.HomeTabId) %>"
          aria-label="_xx___WEBSITE_NAME___xx_"
        >
          <!--#include file="_logo.ascx"-->
        </a>

        <address class="footer-address" itemscope itemtype="http://schema.org/PostalAddress">
          <span itemprop="name" class="sr-only">_xx__CLIENT_NAME__xx_</span>
          <span itemprop="streetAddress">_xx___STREET_ADDRESS___xx_</span><br>
          <span itemprop="addressLocality">_xx___CITY___xx_</span>,
          <span itemprop="addressRegion">_xx___STATE___xx_</span>
          <span itemprop="postalCode">_xx___ZIP_CODE___xx_</span>
          <span itemprop="addressCountry" class="sr-only">United States</span>
        </address>
      </div>
      <div class="col-md-6">
        <nav class="nav flex-column" itemscope itemtype="http://schema.org/Organization">
          <link itemprop="url" href="<%=PortalSettings.PortalAlias.HTTPAlias%>">
          <a class="nav-link" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">Facebook</a>
          <a class="nav-link" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">Twitter</a>
          <a class="nav-link" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">YouTube</a>
        </nav>
      </div>
    </div>
  </section>
  <section class="footer-lower  container-fluid">
    <div class="row">
      <div class="col-md-6">
        <p class="footer-credits  text-center text-md-left">
          <span><dnn:COPYRIGHT id="dnnCopyright" runat="server" /></span>
          <span><dnn:TERMS id="dnnTerms" runat="server" /></span>
          <span><dnn:PRIVACY id="dnnPrivacy" runat="server" /></span>
        </p>
      </div>
      <div class="col-md-6">
        <p class="footer-credits  text-center text-md-right">
          Design, development, and hosting by <a href="http://accuraty.com" target="_blank" rel="nofollow noopener noreferrer">Accuraty Solutions</a>.
        </p>
      </div>
    </div>
  </section>
</footer>

<%--  <!--#include file="__debug.ascx"-->  --%>
