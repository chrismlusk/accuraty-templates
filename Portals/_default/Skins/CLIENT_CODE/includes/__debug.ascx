<% if (UserCanViewDebug()) { %>
  <div class="alert alert-warning m-0" role="alert">
    <p>DNN <%=DotNetNuke.Application.DotNetNukeContext.Current.Application.Version.ToString(3) %> / <%=System.Environment.Version.ToString() %> / <%=System.Net.Dns.GetHostName() %></p>
    <p>Page: TabID=<%=PortalSettings.ActiveTab.TabID %>, Name=<%=PortalSettings.ActiveTab.TabName %>,Title=<%=PortalSettings.ActiveTab.Title %></p>
    <p>Nav: Level=<%=PortalSettings.ActiveTab.Level %>, Path=<%=PortalSettings.ActiveTab.TabPath %></p>
    <p>QueryString Params = <%=Request.QueryString.ToJson() %></p>
    <p>WAN IP = <%=GetIpAddress() %></p>
    <p>Datetime = <%=DateTime.Now.ToString("F") %></p>
    <hr />
    <p class="small font-weight-bold">Debug info only visible from ASL WAN IP address and being output from <code>includes/_footer.ascx</code> in Skin.</p>
  </div>
<% } %>


<script runat="server">
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
  public bool UserCanViewDebug()
  {
    var list = new List<string> {
      "192.241.63.162",   // 309SN
      "108.220.164.129",  // 712WV (JRF)
      "67.167.3.4",       // CML
    };
    return list.Contains(GetIpAddress());
  }
</script>
