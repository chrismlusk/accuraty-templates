<!--#include file="_registers.ascx"-->




<%-- Meta tags
================================================== --%>

<%@ Register TagPrefix="asl" TagName="MetaTags" src="../controls/meta.ascx" %>
<asl:MetaTags runat="server" />




<%-- Stylesheets

CSS priorities and suggested order (note that * denotes a core DNN file):

  1.    Font API links (e.g., Google Fonts, Typekit)
  5.    Default CSS*
  6-9.  Vendor CSS (e.g., Bootstrap)
  10.   Module CSS*
  15.   Skin CSS*
  16.   Custom CSS: `public/css/YOUR_FILE_HERE`
  20.   Specific Skin CSS
  25.   Container CSS*
  30.   Specific Container CSS*
  35.   Portal CSS*

Reference: http://www.dnnsoftware.com/wiki/client-resource-management-api
========================================================================== --%>

<%-- YOU CAN DELETE THIS FROM A NEW PROJECT

  I'd love to remove the `default.css` stylesheet, but many of the styles are
  used for DNN edit controls. Probably going to leave it as is (and continue
  overriding these styles) instead of writing them from scratch. But keeping
  this tag here for reference just in case.

  <dnn:DnnCssExclude Name="dnndefault" runat="server" />
--%>

<%-- STYLESHEET FROM A CDN
<dnn:DnnCssInclude
  FilePath="URL_TO_YOUR_FILE_HERE"
  Priority="1"
  runat="server"
/>
--%>

<%-- STYLESHEET FROM THE SKIN DIRECTORY
<dnn:DnnCssInclude
  FilePath="public/css/YOUR_FILE_HERE"
  PathNameAlias="SkinPath"
  Priority="16"
  runat="server"
/>
--%>




<%-- Scripts

JS priorities and suggested order (note that * denotes a core DNN file):

  5.    jQuery*
  10.   jQuery UI*
  100.  Default*
  101.  Vendor JS: Popper.js (for Bootstrap v4)
  102.  Vendor JS: Bootstrap
  105.  Custom JS: `scripts.js`

Reference: http://www.dnnsoftware.com/wiki/client-resource-management-api

--

For Bootstrap v4: jQuery first, then Popper.js, then Bootstrap.

Other vendor scripts and custom JS come next.
========================================================================== --%>

<dnn:JQUERY
  ForceProvider="DnnFormBottomProvider"
  runat="server"
/>

<dnn:DnnJsInclude
  FilePath="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  ForceProvider="DnnFormBottomProvider"
  Priority="101"
  runat="server"
/>

<dnn:DnnJsInclude
  FilePath="public/js/bootstrap.bundle.min.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="102"
  runat="server"
/>

<dnn:DnnJsInclude
  FilePath="public/js/main.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="105"
  runat="server"
/>
