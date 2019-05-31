<%@ Control AutoEventWireup="false" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<dnn:DnnJsInclude
  FilePath="public/js/Aside_Menu.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="106"
  runat="server"
/>

<div class="aside">
  <div runat="server" id="ContentPane" class="menu"></div>
</div>
