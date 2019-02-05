<footer class="footer" role="contentinfo">
  <div class="footer-upper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">

          <a
            class="footer-brand"
            href="<%= DotNetNuke.Common.Globals.NavigateURL(PortalSettings.HomeTabId) %>"
            aria-label="_xx___WEBSITE_NAME___xx_"
          >
            <!--#include file="_logo.ascx"-->
          </a>

          <div class="footer-contact-info" itemscope itemtype="http://schema.org/Organization">
            <link itemprop="url" href="<%=PortalSettings.PortalAlias.HTTPAlias%>">
            <span itemprop="name" class="sr-only">_xx__CLIENT_NAME__xx_</span>
            <address itemscope itemtype="http://schema.org/PostalAddress">
              <span itemprop="streetAddress">_xx___STREET_ADDRESS___xx_</span><br>
              <span itemprop="addressLocality">_xx___CITY___xx_</span>,
              <span itemprop="addressRegion">_xx___STATE___xx_</span>
              <span itemprop="postalCode">_xx___ZIP_CODE___xx_</span>
              <span itemprop="addressCountry" class="sr-only">United States</span>
            </address>
            <p><span itemprop="telephone">_xx___PHONE___xx_</span></p>
            <p><span itemprop="email"><a href="#">_xx___EMAIL___xx_</a></span></p>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav flex-column" itemscope itemtype="http://schema.org/Organization">
            <li class="nav-item">
              <a class="nav-link is-facebook" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">Facebook</a>
            </li>
            <li class="nav-item">
              <a class="nav-link is-twitter" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">Twitter</a>
            </li>
            <li class="nav-item">
              <a class="nav-link is-youtube" target="_blank" rel="nofollow noopener noreferrer" itemprop="sameAs" href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-lower">
    <div class="container-fluid">
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
    </div>
  </div>
</footer>

<%--  <!--#include file="__debug.ascx"-->  --%>
