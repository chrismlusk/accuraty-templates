<footer class="footer">
  <div class="container-fluid">
    <section class="footer-upper">
      <div class="row">
        <div class="col-sm-6">

          <a class="footer-brand" href="/">LOGO</a>

          <address class="footer-address" itemscope itemtype="http://schema.org/PostalAddress">
            <span itemprop="name" class="sr-only">CLIENT NAME</span><br>
            <span itemprop="streetAddress">STREET ADDRESS</span><br>
            <span itemprop="addressLocality">CITY</span>,
            <span itemprop="addressRegion">STATE</span>
            <span itemprop="postalCode">ZIP CODE</span>
            <span itemprop="addressCountry" class="sr-only">United States</span>
          </address>
        </div>
        <div class="col-sm-6">
          <nav class="nav flex-column" itemscope itemtype="http://schema.org/Organization">
            <link itemprop="url" href="<%=PortalSettings.PortalAlias.HTTPAlias%>">
            <a class="nav-link" href="#" target="_blank" itemprop="sameAs">Facebook</a>
            <a class="nav-link" href="#" target="_blank" itemprop="sameAs">Twitter</a>
            <a class="nav-link" href="#" target="_blank" itemprop="sameAs">YouTube</a>
          </nav>
        </div>
      </div>
    </section>
    <section class="footer-lower">
      <div class="row">
        <div class="col-sm-6">
          <p class="text-center text-md-left">
            <span><dnn:COPYRIGHT runat="server" id="dnnCopyright" /></span>
          </p>
        </div>
        <div class="col-sm-6">
          <p class="text-center text-md-right">
            Design, development, and hosting by <a class="footer-link" href="http://accuraty.com" target="_blank">Accuraty Solutions</a>.
          </p>
        </div>
      </div>
    </section>
  </div>
</footer>
