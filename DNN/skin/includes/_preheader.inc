<%@ Control Language="vb" AutoEventWireup="true" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CURRENTDATE" Src="~/Admin/Skins/CurrentDate.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>



<%-- add meta tags --%>
<dnn:META runat="server" Name="viewport" Content="width=device-width,initial-scale=1,shrink-to-fit=no" />



<%-- add stylesheets --%>
<dnn:DnnCssInclude runat="server" FilePath="assets/css/main.css" PathNameAlias="SkinPath" />



<%-- add scripts --%>
<%-- jQuery first, then Popper.js, then Bootstrap, then custom JS --%>
<dnn:JQUERY runat="server" Priority="100" />
<dnn:DnnJsInclude runat="server" FilePath="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" ForceProvider="DnnFormBottomProvider" Priority="110" />
<dnn:DnnJsInclude runat="server" FilePath="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" ForceProvider="DnnFormBottomProvider" Priority="120" />
<dnn:DnnJsInclude runat="server" FilePath="assets/js/scripts.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" Priority="130" />
<%-- IE10 viewport hack for Surface/desktop Windows 8 bug --%>
<dnn:DnnJsInclude runat="server" FilePath="assets/js/ie10-viewport-bug-workaround.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" Priority="999" />
