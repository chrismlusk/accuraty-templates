<% if (UserCanViewDebug()) { %>
  <div class="alert alert-warning m-0 text-monospace" role="alert">
    <%-- DNN / HOST --%>
    <div class="mb-2">
      <p>DNN <%=DotNetNuke.Application.DotNetNukeContext.Current.Application.Version.ToString(3) %> / <%=System.Environment.Version.ToString() %> / Host=<%=System.Net.Dns.GetHostName() %></p>
    </div>

    <%-- THEME --%>
    <div class="mb-2">
      <p>Theme: Skin=<strong><%=PortalSettings.DefaultPortalSkin.Split('/')[1].ToUpper() %></strong>, Layout/Container=<span title="<%=PortalSettings.ActiveTab.SkinSrc %>"><%=System.IO.Path.GetFileNameWithoutExtension(PortalSettings.ActiveTab.SkinSrc) %></span>/<span title="<%=PortalSettings.ActiveTab.ContainerSrc %>"><%=System.IO.Path.GetFileNameWithoutExtension(PortalSettings.ActiveTab.ContainerSrc) %></span></p>
    </div>

    <%-- PAGE --%>
    <div class="">
      <p>Page: TabID=<%=PortalSettings.ActiveTab.TabID %>, Name=<%=PortalSettings.ActiveTab.TabName %>, Title=<%=PortalSettings.ActiveTab.Title %></p>
      <div class="px-3">
        <p>Status: <span title="Display in Menu/Nav">IsVisible=<%=PortalSettings.ActiveTab.IsVisible %></span>, Published=<%=PortalSettings.ActiveTab.HasBeenPublished %></p>
        <p>Nav: Level=<%=PortalSettings.ActiveTab.Level %>, Path=<%=PortalSettings.ActiveTab.TabPath %>, <span title="Disabled in Menu/Nav (e.g. not a link)">DisableLink=<%=PortalSettings.ActiveTab.DisableLink %></span></p>
        <p>QueryString: Params=<%=Request.QueryString.ToJson() %></p>
      </div>
    </div>
    <hr />
    <div class="small">
      <p class="mb-1">WAN IP=<%=GetIpAddress() %> / <%=DateTime.Now.ToString("F") %></p>
      <p>Debug info only visible from ASL WAN IP addresses and being output from <code>includes/_footer.ascx</code> in Skin.</p>
    </div>
  </div>
<% } %>


<script runat="server">
  public bool UserCanViewDebug()
  {
    var list = new List<string> {
      "127.0.0.1",        // localhost
      "192.241.63.162",   // 309SN
      "108.220.164.129",  // 712WV (JRF)
      "67.167.3.4",       // CML
    };
    return list.Contains(GetIpAddress()) || UrlOverride();
  }
  public bool UrlOverride(string urlParamName = "debug", string urlParamValue = "on")
  {
    return Request.QueryString[urlParamName] == urlParamValue;
  }
  public string GetIpAddress()
  {
    string stringIpAddress;
    stringIpAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
    if (stringIpAddress == null)
    {
      stringIpAddress = Request.ServerVariables["REMOTE_ADDR"];
    }
    return stringIpAddress;
  }
</script>
