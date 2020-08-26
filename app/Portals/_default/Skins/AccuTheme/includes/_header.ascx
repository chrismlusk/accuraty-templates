<%-- <!--#include file="../dist/media/svg/all.svg"--> --%>

<header class="header bg-light" role="banner" data-component="Header">
  <nav class="navbar navbar-expand-lg navbar-light" role="navigation">
    <div class="container">
      <a
        class="navbar-brand"
        href="/"
        aria-label="_xx___CLIENT_NAME___xx_"
      >
        <!--#include file="_logo.ascx"-->
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent" data-component="NavMenu">
        <dnn:MENU
          MenuStyle="menus/NavPrimary"
          NodeSelector=""
          IncludeNodes=""
          ExcludeNodes=""
          runat="server"
        ></dnn:MENU>
      </div>
    </div>
  </nav>
</header>

<%-- Site Menu --%>
<%-- <dnn:MENU
  MenuStyle="menus/SiteMenu"
  IncludeNodes=""
  runat="server"
></dnn:MENU> --%>
