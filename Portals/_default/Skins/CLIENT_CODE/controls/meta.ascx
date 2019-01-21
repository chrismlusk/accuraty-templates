<%@ Control language="C#" Inherits="System.Web.UI.UserControl" %>
<%@ Import Namespace="DotNetNuke.Entities.Portals" %>

<script runat="server">
  protected override void OnLoad(EventArgs e)
  {
    base.OnLoad(e);
    AddMetaTags();
  }

  private void AddMetaTags()
  {
      HtmlMeta Charset = new HtmlMeta();
      Charset.Attributes.Add("charset", "utf-8");
      Page.Header.Controls.Add(Charset);

      HtmlMeta HttpEquiv = new HtmlMeta();
      HttpEquiv.Attributes.Add("http-equiv", "x-ua-compatible");
      HttpEquiv.Content = "ie=edge";
      Page.Header.Controls.Add(HttpEquiv);

      HtmlMeta Viewport = new HtmlMeta();
      Viewport.Attributes.Add("name", "viewport");
      Viewport.Content = "width=device-width,initial-scale=1,shrink-to-fit=no";
      Page.Header.Controls.Add(Viewport);
  }

  private void AddOpenGraph()
  {
      // TODO!!!!

      // Page.Header.Controls.Add(new LiteralControl("<meta property='og:url' content=" + PortalSettings.ActiveTab.FullUrl + ">"));
  }

</script>
