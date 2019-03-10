<!--#include file="includes/_preheader.ascx"-->
<!--#include file="includes/_header.ascx"-->

<main class="main" role="main" id="manage">
  <section class="section">
    <div class="container">
      <!--#include file="includes/_breadcrumb.ascx"-->
      <div class="row">
        <div
          id="ContentPane"
          data-name="ContentPane"
          class="col-md-8  mb-5 mb-md-0  pane pane-content"
          visible="false"
          runat="server"
        ></div>
        <div
          id="AsidePane"
          data-name="AsidePane"
          class="col-md-4 col-xl-3 offset-xl-1  pane pane-sidebar"
          visible="false"
          runat="server"
        ></div>
      </div>
    </div>
    <% if (FullWidthPane.Visible == true) { %>
      <div class="container-fluid">
        <div class="row">
          <div
            id="FullWidthPane"
            data-name="FullWidthPane"
            class="col-12  pane pane-full-width"
            visible="false"
            runat="server"
          ></div>
        </div>
      </div>
    <% } %>
  </section>
</main>

<!--#include file="includes/_footer.ascx"-->
