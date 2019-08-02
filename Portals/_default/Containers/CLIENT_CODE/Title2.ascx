<%@ Control AutoEventWireup="false" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<h2 class="DnnModule__title"><dnn:Title runat="server" id="dnnTitle" /></h2>
<div runat="server" id="ContentPane" class="DnnModule__content rich-text"></div>
