<header class="header  fixed-to-top">
  <nav class="navbar navbar-expand-md navbar-light">
    <a
      class="navbar-brand"
      href="<%= DotNetNuke.Common.Globals.NavigateURL(PortalSettings.HomeTabId) %>"
      aria-label="_xx___CLIENT_NAME___xx_"
    >
      <!--#include file="_logo.ascx"-->
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <dnn:MENU
        MenuStyle="menus/nav-primary"
        IncludeNodes=""
        ExcludeNodes=""
        runat="server"
      ></dnn:MENU>
      <div class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>
  </nav>
</header>
