<%@ Control AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<h3><dnn:Title runat="server" id="dnnTitle" class="DnnModule__title" /></h3>
<div runat="server" id="ContentPane" class="DnnModule__content"></div>
