<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<div class="asl__notes asl__admin">
  <div class="alert alert-info">
    <h4 class="alert-heading">Page notes</h4>
    <h5><dnn:Title runat="server" id="dnnTitle" /></h5>
    <div id="ContentPane" runat="server"></div>
    <hr>
    <p class="small">This module is only visible to admins and site managers.</p>
  </div>
</div>
