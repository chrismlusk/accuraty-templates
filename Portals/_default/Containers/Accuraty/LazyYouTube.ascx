<%@ Control AutoEventWireup="false" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<dnn:DnnJsInclude
  FilePath="public/js/LazyYouTube.bundle.js"
  PathNameAlias="SkinPath"
  ForceProvider="DnnFormBottomProvider"
  Priority="106"
  runat="server"
/>

<div class="asl__notes asl__admin--edit-state">
  <div class="alert alert-info">
    <h4 class="alert-heading"><dnn:Title runat="server" id="dnnTitle" /></h4>
    <div id="ContentPane" runat="server"></div>
    <hr>
    <p class="small">This module is only visible to admins while in edit mode.</p>
  </div>
</div>
