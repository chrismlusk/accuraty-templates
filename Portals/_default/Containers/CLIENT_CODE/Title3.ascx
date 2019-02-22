<%@ Control AutoEventWireup="false" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<h3 class="DnnModule__title"><dnn:Title runat="server" id="dnnTitle" /></h3>
<div runat="server" id="ContentPane" class="DnnModule__content"></div>
