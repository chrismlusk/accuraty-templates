<!--#include file="includes/_preheader.ascx"-->
<!--#include file="includes/_header.ascx"-->

<dnn:DnnJsInclude
  FilePath="public/js/home.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="106"
  runat="server"
/>

<main class="main" role="main" id="home">

  <%-- Don't render any HTML unless the pane has content. --%>
  <% if (ContentPane.Visible == true) { %>
    <section class="section">
      <div class="container">
        <div class="row">
          <div
            id="ContentPane"
            data-name="ContentPane"
            class="col-12  pane pane-content"
            visible="false"
            runat="server"
          ></div>
        </div>
      </div>
    </section>
  <% } %>
</main>

<!--#include file="includes/_footer.ascx"-->
