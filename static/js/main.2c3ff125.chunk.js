(this.webpackJsonpaktiekungen=this.webpackJsonpaktiekungen||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(3),a=n.n(c),r=(n(12),n(4)),u=n(5),l=n(7),d=n(6),j=(n(13),n(0)),h=function(e){return Object(i.useEffect)((function(){for(var t=[],n=0;n<e.input_info.input_year;n++)t.push(n+1);e.onLineChanged(t)}),[e.input_info.input_year]),Object(j.jsx)("div",{className:"input_container",children:Object(j.jsxs)("div",{className:"input_grid",children:[Object(j.jsxs)("div",{className:"input_container",children:[Object(j.jsx)("p",{className:"simple-text",children:"Tidsperiod(\xe5r)"}),Object(j.jsxs)("div",{className:"input_combo",children:[Object(j.jsx)("input",{className:"input_number",type:"number",onChange:function(t){e.onYearChanged(t.target.value)}}),Object(j.jsx)("h3",{className:"side-text",children:"\xe5r"})]})]}),Object(j.jsxs)("div",{className:"input_container",children:[Object(j.jsx)("p",{className:"simple-text",children:"Startkapital(SEK)"}),Object(j.jsxs)("div",{className:"input_combo",children:[Object(j.jsx)("input",{className:"input_kronor",type:"number",onChange:function(t){e.onPreMoneyChanged(t.target.value)}}),Object(j.jsx)("h3",{className:"side-text",children:"kr"})]})]}),Object(j.jsxs)("div",{className:"input_container",children:[Object(j.jsx)("p",{className:"simple-text",children:"Sparande(SEK/m\xe5n)"}),Object(j.jsxs)("div",{className:"input_combo",children:[Object(j.jsx)("input",{className:"input_kronor",type:"number",onChange:function(t){e.onSavingChanged(t.target.value)}}),Object(j.jsx)("h3",{className:"side-text",children:"kr"})]})]}),Object(j.jsxs)("div",{className:"input_container",children:[Object(j.jsx)("p",{className:"simple-text",children:"Avkastning(%)"}),Object(j.jsxs)("div",{className:"input_combo",children:[Object(j.jsx)("input",{className:"input_number",type:"number",onChange:function(t){e.onReturnChanged(t.target.value/100+1)}}),Object(j.jsx)("h3",{className:"side-text",children:"%"})]})]}),Object(j.jsxs)("div",{className:"input_container",children:[Object(j.jsx)("p",{className:"simple-text",children:"ev. Utdelning(%)"}),Object(j.jsxs)("div",{className:"input_combo",children:[Object(j.jsx)("input",{className:"input_number",type:"number",onChange:function(t){e.onDividendChanged(t.target.value/100+1)}}),Object(j.jsx)("h3",{className:"side-text",children:"%"})]})]})]})})},o=(n(15),n(16),function(e){var t=parseInt(e.inputData.input_premoney),n=e.inputData.input_saving,i=0,s=2021,c=e.inputData.input_return,a=0,r=0,u=e.inputData.input_dividend,l=0,d=0,h=0,o=0;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("table",{className:"content-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\xc5r"}),Object(j.jsx)("th",{children:"Ins\xe4ttning totalt(SEK)"}),Object(j.jsx)("th",{children:"Aktietillv\xe4xt(SEK)"}),Object(j.jsx)("th",{children:"Utdelning(SEK)"}),Object(j.jsx)("th",{children:"Resultat(SEK)"})]})}),Object(j.jsx)("tbody",{children:e.inputData.input_lines.map((function(e,p){return o=p,s+=1,p<1?i=t+i+12*n:i+=12*n,console.log(i),c>0&&(a=r+i*c-i,r=i*c-i),u>0&&(l=d+a*u-a,d=a*u-a,console.log(d)),h=(i=i+l+a)+a+l,Object(j.jsxs)("tr",{className:"line-class",children:[Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:Math.round(i)}),Object(j.jsx)("td",{children:Math.round(a)}),Object(j.jsx)("td",{children:Math.round(l)}),Object(j.jsx)("td",{children:Math.round(h)})]})}))})]}),Object(j.jsxs)("div",{className:"result_container",children:[Object(j.jsx)("h2",{className:"result_h2",children:"Grattis din portf\xf6lj \xe4r v\xe4rderad \xa0"})," ",Object(j.jsxs)("h1",{className:"result_h1",children:[Math.round(h)," kr\xa0"]})," ",Object(j.jsx)("h2",{className:"result_h2",children:" \xa0om\xa0 "}),Object(j.jsx)("h1",{className:"result_h1",children:o+1}),Object(j.jsx)("h2",{className:"result_h2",children:"\xa0\xe5r! "})]})]})}),p=(n(17),n(18),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={input_lines:[],input_premoney:0,input_year:0,input_saving:0,input_return:0,input_dividend:0},i}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{onPreMoneyChanged:function(t){return e.setState({input_premoney:t})},onLineChanged:function(t){return e.setState({input_lines:t})},onYearChanged:function(t){return e.setState({input_year:t})},onSavingChanged:function(t){return e.setState({input_saving:t})},onReturnChanged:function(t){return e.setState({input_return:t})},onDividendChanged:function(t){return e.setState({input_dividend:t})},input_info:this.state}),Object(j.jsx)(o,{inputData:this.state})]})}}]),n}(s.a.Component));a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.2c3ff125.chunk.js.map