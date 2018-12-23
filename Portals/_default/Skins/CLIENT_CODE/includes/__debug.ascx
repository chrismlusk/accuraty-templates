<% If GetIpAddress() = "192.241.63.162" Or GetIpAddress() = "76.29.39.150" Then %>
<div class="alert alert-warning  m-0" role="alert">
  <h4 class="alert-heading">Debug info</h4>
  <p>DNN <%=DotNetNuke.Application.DotNetNukeContext.Current.Application.Version.ToString(3) %> / <%=System.Environment.Version.ToString() %> / <%=System.Net.Dns.GetHostName() %></p>
  <p>Tab ID = <%=PortalSettings.ActiveTab.TabID %></p>
  <p>Now = <%=DateTime.Now.ToString("F") %></p>
  <p>WAN IP = <%=GetIpAddress() %></p>
  <hr>
  <p class="small">Debug info only visible from ASL WAN IP address and being output from <code>includes/_footer.ascx</code> in Skin.</p>
</div>
<% End If %>

<script runat="server">
Public Function GetIpAddress() As String
  Dim stringIpAddress As String
  stringIpAddress = Request.ServerVariables("HTTP_X_FORWARDED_FOR")
  if String.IsNullOrEmpty(stringIpAddress) then
    stringIpAddress = Request.ServerVariables("REMOTE_ADDR")
  end if
  Return stringIpAddress
End Function
</script>
