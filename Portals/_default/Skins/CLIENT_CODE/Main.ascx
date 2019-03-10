<!--#include file="includes/_preheader.ascx"-->
<!--#include file="includes/_header.ascx"-->

<main class="main" role="main">
  <section class="section">
    <div class="container">
      <!--#include file="includes/_breadcrumb.ascx"-->

      <%-- Don't render any HTML unless the pane has content. --%>
      <% if (ContentPane.Visible == true) { %>
        <div class="row">
          <div
            id="ContentPane"
            data-name="ContentPane"
            class="col-12  pane pane-content"
            visible="false"
            runat="server"
          ></div>
        </div>
      <% } %>

      <%-- Don't render any HTML unless at least one pane has content. --%>
      <% if (LeftPane.Visible == true || RightPane.Visible == true) { %>
        <div class="row">
          <div
            id="LeftPane"
            data-name="LeftPane"
            class="col-md-8  mb-5 mb-md-0  pane pane-content"
            visible="false"
            runat="server"
          ></div>
          <div
            id="RightPane"
            data-name="RightPane"
            class="col-md-4 col-xl-3 offset-xl-1  pane pane-sidebar"
            visible="false"
            runat="server"
          ></div>
        </div>
      <% } %>

    </div>
  </section>
</main>

<!--#include file="includes/_footer.ascx"-->
