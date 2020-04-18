(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={listItem:"ListItem_listItem__2KRmq",button:"ListItem_button__3eHig"}},17:function(e,t,n){e.exports={container:"Filter_container__VE-pk",input:"Filter_input__QAhIr"}},20:function(e,t,n){e.exports={contactList:"ContactList_contactList__3TRpB"}},22:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(3),i=n(8),u=n(9),m=n(4),s=n(11),b=n(10),h={light:{fontColor:"black",bodybg:"white",changeTo:"dark"},dark:{fontColor:"white",bodybg:"black",changeTo:"light"}},d=r.a.createContext(h.light),f=n(5),g=n(2),p=n(13),v={addContact:Object(g.b)("contacts/add",(function(e,t){return{payload:{contact:{name:e,number:t,id:p()}}}})),removeContact:Object(g.b)("contacts/remove"),changeFilter:Object(g.b)("contacts/changeFilter")},C=n(6),E=n.n(C),j=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.onSubmit=function(t){var n=e.state,a=n.name,r=n.number;t.preventDefault(),e.props.onSubmit(a,r),e.setState({name:"",number:""})},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{id:"form",className:E.a.form,onSubmit:this.onSubmit},r.a.createElement("label",null," Name",r.a.createElement("input",{type:"text",name:"name",value:t,className:E.a.input,onChange:this.handleChange,required:!0})),r.a.createElement("label",null," Number",r.a.createElement("input",{type:"tel",name:"number",value:n,className:E.a.input,onChange:this.handleChange,required:!0})),r.a.createElement("button",{form:"form",type:"submit",className:E.a.button},"Add contact"))}}]),n}(a.Component),y={onSubmit:v.addContact},O=Object(l.b)(null,y)(j),_=n(20),k=n.n(_),N=n(16),F=n.n(N);function T(e){var t=e.id,n=e.name,a=e.number,c=e.onRemove;return r.a.createElement("li",{className:F.a.listItem,key:t},n," : ",a,r.a.createElement("button",{type:"button",className:F.a.button,onClick:function(){return c(t)}},"Delete"))}var w={onRemove:v.removeContact},x=Object(l.b)((function(e){var t=e.contacts,n=e.filter;return{contacts:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}}),w)((function(e){var t=e.contacts,n=e.onRemove;return r.a.createElement("ul",{className:k.a.contactList},t.map((function(e){return r.a.createElement(T,{key:e.id,id:e.id,name:e.name,number:e.number,onRemove:n})})))})),I=n(17),L=n.n(I),S=n(13),R=n.n(S),q={onChangeFilter:v.changeFilter},A=Object(l.b)((function(e){return{value:e.filter}}),q)((function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",{className:L.a.container},r.a.createElement("label",{htmlFor:"filter"},"Find contacts by name"),r.a.createElement("input",{id:R()(),type:"text",name:"filter",value:t,className:L.a.input,onChange:function(e){return n(e.target.value)}}))}));function D(e){var t=e.toggleTheme;return r.a.createElement(d.Consumer,null,(function(e){return r.a.createElement("div",{className:"body",style:{background:e.bodybg,color:e.fontColor}},r.a.createElement("div",{className:"theme-selector"},r.a.createElement("label",{htmlFor:"theme",className:"switch"},r.a.createElement("input",{type:"checkbox",id:"theme",checked:"light"===e.type,onChange:function(e){return t(e.currentTarget.value)}}),r.a.createElement("span",{className:"slider round"},"Change to ",e.changeTo," theme"))),r.a.createElement("h1",null,"Phonebook"),r.a.createElement(O,null),r.a.createElement("h2",null,"Contacts"),r.a.createElement(A,null),r.a.createElement(x,null))}))}var B,J=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={theme:"light"},e.toggleTheme=e.toggleTheme.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"toggleTheme",value:function(e){var t=this.state.theme;this.setState((function(){return{theme:"dark"===t?"light":"dark"}}))}},{key:"render",value:function(){var e=this.state.theme;return r.a.createElement(d.Provider,{value:h[e]},r.a.createElement(D,{toggleTheme:this.toggleTheme}))}}]),n}(a.Component),K=n(21),P={contacts:Object(g.c)([],(B={},Object(f.a)(B,v.addContact,(function(e,t){return[].concat(Object(K.a)(e),[t.payload.contact])})),Object(f.a)(B,v.removeContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),B)),filter:Object(g.c)("",Object(f.a)({},v.changeFilter,(function(e,t){return t.payload})))},Q=Object(g.a)({reducer:{contacts:P.contacts,filter:P.filter}});o.a.render(r.a.createElement(l.a,{store:Q},r.a.createElement(J,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__30sDI",input:"ContactForm_input__21VKQ",button:"ContactForm_button__15jbv"}}},[[22,1,2]]]);
//# sourceMappingURL=main.4acc562a.chunk.js.map