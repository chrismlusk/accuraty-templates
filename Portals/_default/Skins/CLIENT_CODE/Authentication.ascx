<!--#include file="includes/_preheader.ascx"-->
<!--#include file="includes/_header.ascx"-->

<dnn:DnnJsInclude
  FilePath="public/js/authentication.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="106"
  runat="server"
/>

<div id="authentication" class="is-loading">
  <main class="main" role="main">
    <section class="section">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="auth-form">
              <div
                id="HeaderPane"
                data-name="HeaderPane"
                class="auth-form-header"
                visible="false"
                runat="server"
              ></div>
              <div
                id="ContentPane"
                data-name="ContentPane"
                class="auth-form-body"
                visible="false"
                runat="server"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

<!--#include file="includes/_footer.ascx"-->
