(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(t,e,a){t.exports={overlay:"Modal_overlay__4IY3T",content:"Modal_content__c3Np8"}},14:function(t,e,a){t.exports={item:"ImageGalleryItem_item__3osXE",image:"ImageGalleryItem_image__3BCEo"}},25:function(t,e,a){t.exports={imageGallery:"ImageGallery_imageGallery__1nR06"}},26:function(t,e,a){t.exports={button:"Button_button__pfvfQ"}},28:function(t,e,a){t.exports={loader:"Loader_loader__1pGRW"}},76:function(t,e,a){},77:function(t,e,a){},78:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(0),r=a.n(o),c=a(4),s=a.n(c),i=a(15),l=a(5),u=a(6),h=a(8),d=a(7),p=a(11),b=a.n(p),m=a(13),g=a.n(m),f=document.querySelector("#modal-root"),j=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(n.jsx)("div",{className:g.a.overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:g.a.content,children:this.props.children})}),f)}}]),a}(o.Component),y=a(9),v=a.n(y),_=a(29),O=a(10),S=(a(54),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={searchQuery:""},t.handleSearchChange=function(e){t.setState({searchQuery:e.currentTarget.value.trim()})},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.searchQuery?(t.props.onSubmit(t.state.searchQuery),t.setState({searchQuery:""})):O.b.error("Empty request")},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:v.a.searchbar,children:Object(n.jsxs)("form",{className:v.a.searchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:v.a.button,children:Object(n.jsx)("span",{className:v.a.label,"aria-label":"Search",children:Object(n.jsx)(_.a,{})})}),Object(n.jsx)("input",{type:"text",name:"searchbar",autoComplete:"off",autoFocus:!0,onChange:this.handleSearchChange,value:this.state.searchQuery,className:v.a.input,placeholder:"Search images and photos"})]})})}}]),a}(o.Component)),k=a(25),x=a.n(k);function w(t){var e=t.children;return Object(n.jsx)("ul",{className:x.a.imageGallery,children:e})}w.defaultProps={children:""};var C=w,Q=a(14),N=a.n(Q);function L(t){var e=t.photos,a=t.onClick;return e.map((function(t){var e=t.largeImageURL,o=t.webformatURL,r=t.tags,c=t.id;return Object(n.jsx)("li",{className:N.a.item,onClick:function(){return a(e)},children:Object(n.jsx)("img",{className:N.a.image,src:o,"data-source":e,alt:r})},c)}))}L.defaultProps={largeImageURL:"",webformatURL:"",tags:"",id:""};var M=L,I=a(16),D=a(30),E=a(26),T=a.n(E),G=function(t){var e=t.children,a=t.onClick,o=Object(D.a)(t,["children","onClick"]);return Object(n.jsxs)("button",Object(I.a)(Object(I.a)({type:"button",className:T.a.button,onClick:a},o),{},{children:["Load more",e]}))};G.defaultProps={onClick:function(){return null},children:null};var B=G,R=a(27),U=a.n(R),q=a(28),F=a.n(q);var K=function(){return Object(n.jsx)(U.a,{className:F.a.loader,type:"ThreeDots",color:"#3f51b5",height:45,width:45,timeout:6e3})},P=(a(76),a(77),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={photos:[],searchQuery:"",page:1,showModal:!1,loading:!1,key:"19150755-18ebc4fb910ab3d1add5e1d5a",url:"https://pixabay.com/api/"},t.toggleModal=function(e){t.setState((function(t){return{showModal:!t.showModal}})),t.setState({largeImage:e})},t.onButtonClick=function(e){e.preventDefault(),t.setState({page:t.state.page+1})},t.handleSearchSubmit=function(e){var a=e.toLowerCase().trim();t.setState({searchQuery:a})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),setTimeout((function(){b.a.get("".concat(t.state.url,"?q=").concat(t.state.searchQuery,"&page=").concat(t.state.page,"&key=").concat(t.state.key,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return t.setState({photos:e.data.hits})})).finally((function(){return t.setState({loading:!1})}))}),1e3)}},{key:"componentDidUpdate",value:function(t,e){var a=this,n=this.state.searchQuery,o=e.searchQuery,r=this.state.page,c=e.page;n!==o&&(this.setState({loading:!0}),this.setState({photos:[]}),setTimeout((function(){b.a.get("".concat(a.state.url,"?q=").concat(a.state.searchQuery,"&page=").concat(a.state.page,"&key=").concat(a.state.key,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return a.setState({photos:t.data.hits})})).finally((function(){return a.setState({loading:!1})}))}),1e3)),r!==c&&(this.setState({loading:!0}),setTimeout((function(){b.a.get("".concat(a.state.url,"?q=").concat(a.state.searchQuery,"&page=").concat(a.state.page,"&key=").concat(a.state.key,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return a.setState({photos:[].concat(Object(i.a)(e.photos),Object(i.a)(t.data.hits))})})).finally((function(){a.setState({loading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}),1e3))}},{key:"render",value:function(){var t=this.state,e=t.photos,a=t.showModal,o=t.largeImage,r=t.tags;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{onSubmit:this.handleSearchSubmit}),e.length>0?Object(n.jsx)(C,{children:Object(n.jsx)(M,{photos:e,onClick:this.toggleModal})}):null,a&&Object(n.jsx)(j,{onClose:this.toggleModal,children:Object(n.jsx)("img",{src:o,alt:r})}),this.state.loading&&Object(n.jsx)(K,{type:"ThreeDots",color:"#3f51b5",height:45,width:45,timeout:6e3}),e.length>=11?Object(n.jsx)(B,{"aria-label":"Load more",onClick:this.onButtonClick}):null,Object(n.jsx)(O.a,{autoClose:2e3})]})}}]),a}(o.Component));s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))},9:function(t,e,a){t.exports={searchbar:"Searchbar_searchbar__CtEfK",searchForm:"Searchbar_searchForm__2mrG_",button:"Searchbar_button__3EobS",buttonLabel:"Searchbar_buttonLabel__6imVt",input:"Searchbar_input__3kspo"}}},[[78,1,2]]]);
//# sourceMappingURL=main.68a41b28.chunk.js.map