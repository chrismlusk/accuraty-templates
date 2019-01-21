<%@ Control AutoEventWireup="false" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<h4 class="DnnModule__title"><dnn:Title runat="server" id="dnnTitle" /></h4>
<div runat="server" id="ContentPane" class="DnnModule__content"></div>
