(this["webpackJsonpreact-d3js-example"]=this["webpackJsonpreact-d3js-example"]||[]).push([[0],{124:function(e,t,a){e.exports=a(137)},129:function(e,t,a){},132:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(65),o=a.n(i),s=(a(129),a(6)),c=a(7),l=a(9),u=a(8),h=a(10),m=a(2),p=a(5),d=a.n(p),f=a(67),y=a.n(f),b=function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("h1",null,"The average H1B in tech pays $86,164/year"),r.a.createElement("p",{className:"lead"},"Since 2012 the US tech industry has sponsored \udbff\udc00\u2192 176,075 H1B work visas. Most of them paid ",r.a.createElement("b",null,"$60,660 to \udbff\udc00\u2192 $111,668")," per year (1 standard deviation)."," ",r.a.createElement("span",null,"The best city for an H1B is ",r.a.createElement("b",null,"Kirkland, WA")," with an average individual salary ",r.a.createElement("b",null,"$39,465 above local household median"),". Median household salary is a good proxy for cost of living in an area.")),r.a.createElement("img",{src:y.a,style:{width:"100%"},alt:"Loading preview"}),r.a.createElement("h2",{className:"text-center"},"Loading data ..."))},g=a(34),v=function(e){return{countyName:e.Name,USstate:e.State,medianIncome:Number(e["Median Household Income"]),lowerBound:Number(e["90% CI Lower Bound"]),upperBound:Number(e["90% CI Upper Bound"])}},j=m.r("%m/%d/%Y"),O=function(e){return!e["base salary"]||Number(e["base salary"])>3e5?null:{employer:e.employer,submit_date:j(e["submit date"]),start_date:j(e["start date"]),case_status:e["case status"],job_title:e["job title"],clean_job_title:e["job title"],base_salary:Number(e["base salary"]),city:e.city,USstate:e.state,county:e.county,countyID:e.countyID}},S=function(e){return{code:e.code,id:Number(e.id),name:e.name}},k=function(e){return{id:Number(e.id),name:e.name}},F=a(33),w=a(35),U=d.a.reverse(["rgb(247,251,255)","rgb(222,235,247)","rgb(198,219,239)","rgb(158,202,225)","rgb(107,174,214)","rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)"]),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props,n=a.zoom,r=a.value;return n!==e.zoom||r!==e.value}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.geoPath,n=e.feature,i=e.quantize,o="rgb(240,240,240)";return t&&(o=U[i(t)]),r.a.createElement("path",{d:a(n),style:{fill:o},title:n.id})}}]),t}(n.Component);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var n=m.d().scale(1280);return a.state={geoPath:m.e().projection(n),quantize:m.p().range(m.n(9)),projection:n},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.usTopoJson,a=e.values,n=e.zoom,i=this.state,o=i.geoPath,s=i.quantize;if(t){var c=t,l=w.b(c,c.objects.states,(function(e,t){return e!==t})),u=w.a(c,c.objects.counties).features,h=d.a.fromPairs(a.map((function(e){return[e.countyID,e.value]})));return r.a.createElement("g",null,u.map((function(e){return r.a.createElement(E,{geoPath:o,feature:e,zoom:n,key:e.id,quantize:s,value:h[e.id]})})),r.a.createElement("path",{d:o(l),style:{fill:"none",stroke:"#fff",strokeLineJoin:"round"}}))}return null}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.projection,n=t.quantize,r=t.geoPath;if(a.translate([e.width/2,e.height/2]).scale(1.3*e.width),e.zoom&&e.usTopoJson){var i=e.usTopoJson,o=w.a(i,i.objects.states).features,s=d.a.find(e.USstateNames,{code:e.zoom}).id;a.scale(4.5*e.width);var c=r.centroid(d.a.find(o,{id:s})),l=a.translate();a.translate([l[0]-c[0]+e.width/2,l[1]-c[1]+e.height/2])}return e.values&&n.domain([m.m(e.values,.15,(function(e){return e.value})),m.m(e.values,.85,(function(e){return e.value}))]),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{projection:a,quantize:n})}}]),t}(r.a.Component),I=(a(132),function(e){var t=e.percent,a=e.x,n=e.y,i=e.width,o=e.height,s="translate(".concat(a,", ").concat(n,")"),c=t.toFixed(0)+"%";return t<1&&(c=t.toFixed(2)+"%"),i<20&&(c=c.replace("%","")),i<10&&(c=""),r.a.createElement("g",{transform:s,className:"bar"},r.a.createElement("rect",{width:i,height:o-2,transform:"translate(0, 1)"}),r.a.createElement("text",{textAnchor:"end",x:i-5,y:o/2+3},c))});var B,T=(B=function(){var e=m.a().tickFormat((function(e){return"".concat(m.c(".2s")(e))})).scale(this.props.scale).ticks(this.props.data.length);m.q(this.anchorRef.current).call(e)},function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).anchorRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){B.call(this)}},{key:"componentDidUpdate",value:function(){B.call(this)}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y;return r.a.createElement("g",{transform:"translate(".concat(t,", ").concat(a,")"),ref:this.anchorRef})}}]),t}(r.a.Component));function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={histogram:m.f(),widthScale:m.o(),yScale:m.o()},a.makeBar=function(e){var t=a.state,n=t.yScale,i=t.widthScale,o={percent:e.length/a.props.data.length*100,x:a.props.axisMargin,y:n(e.x1),width:i(e.length),height:n(e.x0)-n(e.x1),key:"histogram-bar-"+e.x0};return r.a.createElement(I,o)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.histogram,a=e.yScale,n=this.props,i=n.x,o=n.y,s=n.data,c=n.axisMargin,l=t(s);return r.a.createElement("g",{className:"histogram",transform:"translate(".concat(i,", ").concat(o,")")},r.a.createElement("g",{className:"bars"},l.map(this.makeBar)),r.a.createElement(T,{x:c-3,y:0,data:l,scale:a}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.histogram,n=t.widthScale,r=t.yScale;a.thresholds(e.bins).value(e.value);var i=a(e.data),o=i.map((function(e){return e.length}));return n.domain([m.l(o),m.i(o)]).range([0,e.width-e.axisMargin]),r.domain([0,m.i(i,(function(e){return e.x1}))]).range([e.height-e.y-e.bottomMargin,0]),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{histogram:a,widthScale:n,yScale:r})}}]),t}(r.a.Component),C=a(20),P=a(1),A={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.format(Object(P.h)(this.props.data,(function(e){return e.base_salary})));return this.yearsFragment&&this.USstateFragment?r.a.createElement("h2",null,"In ",this.USstateFragment,", ",this.jobTitleFragment,"$",e,"/year ",this.yearsFragment):r.a.createElement("h2",null,this.jobTitleFragment," $",e,"/year",this.USstateFragment?"in ".concat(this.stateFragment):"",this.yearsFragment)}},{key:"yearsFragment",get:function(){var e=this.props.filteredBy.year;return"*"===e?"":"in ".concat(e)}},{key:"USstateFragment",get:function(){var e=this.props.filteredBy.USstate;return"*"===e?"":A[e.toUpperCase()]}},{key:"jobTitleFragment",get:function(){var e=this.props.filteredBy,t=e.jobTitle,a=e.year,n="";return"*"===t?n="*"===a?"The average H1B in tech pays":"The average tech H1B paid":(n="Software ".concat(t,"s on an H1B"),n+="*"===a?" make":" made"),n}},{key:"format",get:function(){return Object(C.a)().domain(Object(P.e)(this.props.data,(function(e){return e.base_salary}))).tickFormat()}}]),t}(n.Component),H=a(68),z=a.n(H),J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"allDataForYear",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.allData;return t.filter((function(t){return t.submit_date.getFullYear()===e}))}},{key:"allDataForJobTitle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.allData;return t.filter((function(t){return t.clean_job_title===e}))}},{key:"allDataForUSstate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.allData;return t.filter((function(t){return t.USstate===e}))}},{key:"render",value:function(){var e=this.format,t=Object(P.h)(this.props.data,(function(e){return e.base_salary})),a=Object(P.d)(this.props.data,(function(e){return e.base_salary}));return r.a.createElement("p",{className:"lead"},this.yearsFragment?this.yearsFragment:"Since 2012"," the"," ",this.UStateFragment," tech industry"," ",this.yearsFragment?"sponsored":"has sponsored"," ",r.a.createElement("b",null,e(this.props.data.length)," ",this.jobTitleFragment),this.previousYearFragment,". Most of them paid"," ",r.a.createElement("b",null,"$",e(t-a)," to $",e(t+a))," ","per year. ",this.countyFragment)}},{key:"yearsFragment",get:function(){var e=this.props.filteredBy.year;return"*"===e?"":"In ".concat(e)}},{key:"USstateFragment",get:function(){var e=this.props.filteredBy.USstate;return"*"===e?"":A[e.toUpperCase()]}},{key:"previousYearFragment",get:function(){var e,t=this.props.filteredBy.year;if("*"===t)e="";else if(2012===t)e="";else{var a=this.props.filteredBy,n=a.USstate,r=a.jobTitle,i=this.allDataForYear(t-1);if("*"!==r&&(i=this.allDataForJobTitle(r,i)),"*"!==n&&(i=this.allDataForUSstate(n,i)),this.props.data.length/i.length>2)e=", "+(this.props.data.length/i.length).toFixed()+" times more than the year before";else{var o=(100*(1-i.length/this.props.data.length)).toFixed();e=", "+Math.abs(o)+"% "+(o>0?"more":"less")+" than the year before"}}return e}},{key:"jobTitleFragment",get:function(){var e=this.props.filteredBy.jobTitle;return"*"===e?"H1B work visas":"other"===e?"H1B work visas":"H1B work visas for software ".concat(e,"s")}},{key:"countyFragment",get:function(){var e=this,t=d.a.groupBy(this.props.data,"countyID"),a=this.props.medianIncomesByCounty,n=d.a.sortBy(d.a.keys(t).map((function(e){return t[e]})).filter((function(t){return t.length/e.props.data.length>.01})),(function(e){return Object(P.h)(e,(function(e){return e.base_salary}))-a[e[0].countyID][0].medianIncome})),i=n[n.length-1],o=a[i[0].countyID][0].medianIncome,s=d.a.groupBy(i,"city");n=d.a.sortBy(d.a.keys(s).map((function(e){return s[e]})).filter((function(e){return e.length/i.length>.01})),(function(e){return Object(P.h)(e,(function(e){return e.base_salary}))-o})),i=n[n.length-1];var c=z()(i[0].city).titleCase().s+", ".concat(i[0].USstate),l=Object(P.h)(i,(function(e){return e.base_salary})),u=this.jobTitleFragment.replace("H1B work visas for","").replace("H1B work visas","");return r.a.createElement("span",null,"The best city"," ",u.length?"for ".concat(u," on an H1B"):"for an H1B"," ",this.yearFragment?"was":"is"," ",r.a.createElement("b",null,c)," with an average salary $",this.format(l-o)," above the local household median. Median household income is a good proxy for cost of living in an area."," ",r.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Household_income"},"[1]"),".")}},{key:"format",get:function(){return Object(C.a)().domain(Object(P.e)(this.props.data,(function(e){return e.base_salary}))).tickFormat()}}]),t}(r.a.Component),Y=function(e){var t=e.data,a=e.value,n=e.width,i=e.height,o=e.x,s=e.y,c=e.bottomMargin,l=e.median,u=m.o().domain([0,m.i(t,a)]).range([i-s-c,0]),h=m.h()([[0,5],[n,5]]),p=l||m.k(t,a),d="translate(".concat(o,", ").concat(u(p),")"),f="Median Household: $".concat(u.tickFormat()(l));return r.a.createElement("g",{className:"mean",transform:d},r.a.createElement("text",{x:n-5,y:"0",textAnchor:"end",style:{background:"purple"}},f),r.a.createElement("path",{style:{paddingLeft:"40px"},d:h}))},W=function(e){var t=e.label,a=e.name,n=e.value,i=e.onClick,o="btn btn-default";return n&&(o+=" btn-primary"),r.a.createElement("button",{className:o,onClick:function(){return i(a,!n)}},t)},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).makePick=function(e,t){a.props.updateDataFilter(e,!t)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"_addToggle",value:function(e){var t="toggle-".concat(e),a=e;return this.props.capitalize&&(a=a.toUpperCase()),r.a.createElement(W,{label:a,name:e,key:t,value:this.props.picked===e,onClick:this.makePick})}},{key:"render",value:function(){var e=this,t=this.props.toggleNames;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},t.map((function(t){return e._addToggle(t)}))))}}]),t}(r.a.Component),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={yearFilter:function(){return!0},jobTitleFilter:function(){return!0},USstateFilter:function(){return!0},year:"*",jobTitle:"*",USstate:"*"},a.updateYearFilter=function(e,t){var n=function(t){return t.submit_date.getFullYear()===e};!t&&e||(n=function(){return!0},e="*"),a.setState({yearFilter:n,year:e},(function(){return a.reportUpdateUpTheChain()}))},a.updateJobTitleFilter=function(e,t){var n=function(t){return t.clean_job_title===e};!t&&e||(n=function(){return!0},e="*"),a.setState({jobTitleFilter:n,jobTitle:e},(function(){return a.reportUpdateUpTheChain()}))},a.updateUSstateFilter=function(e,t){var n=function(t){return t.USstate===e};!t&&e||(n=function(){return!0},e="*"),a.setState({USstateFilter:n,USstate:e},(function(){return a.reportUpdateUpTheChain()}))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.hash.replace("#","").split("-"),t=Object(g.a)(e,3),a=t[0],n=t[1],r=t[2];"*"!==a&&a&&this.updateYearFilter(Number(a)),"*"!==n&&n&&this.updateUSstateFilter(n),"*"!==r&&r&&this.updateJobTitleFilter(r)}},{key:"reportUpdateUpTheChain",value:function(){var e;window.location.hash=[this.state.year||"*",this.state.USstate||"*",this.state.jobTitle||"*"].join("-"),this.props.updateDataFilter((e=this.state,function(t){return e.yearFilter(t)&&e.jobTitleFilter(t)&&e.USstateFilter(t)}),{year:this.state.year,jobTitle:this.state.jobTitle,USstate:this.state.USstate})}},{key:"render",value:function(){var e=this.props.data,t=new Set(e.map((function(e){return e.submit_date.getFullYear()}))),a=new Set(e.map((function(e){return e.clean_job_title}))),n=new Set(e.map((function(e){return e.USstate})));return r.a.createElement("div",null,r.a.createElement(V,{data:e,toggleNames:Array.from(t.values()),picked:this.state.year,updateDataFilter:this.updateYearFilter}),r.a.createElement(V,{data:e,toggleNames:Array.from(a.values()),picked:this.state.jobTitle,updateDataFilter:this.updateJobTitleFilter}),r.a.createElement(V,{data:e,toggleNames:Array.from(n.values()),picked:this.state.USstate,updateDataFilter:this.updateUSstateFilter,capitalize:!0}))}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={techSalaries:[],salariesFilter:function(){return!0},medianIncomes:[],countyNames:[],filteredTechSalaries:[],page:0,filteredBy:{USstate:"*",year:"*",jobTitle:"*"}},a.startData=function(e){a.state.page;setInterval((function(){return a.setState({page:parseInt(a.state.page+1)})}),100)},a.updateDataFilter=function(e,t){a.setState({salariesFilter:e,filteredBy:t})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a.noop;Promise.all([m.g("data/us.json"),m.b("data/us-county-names-normalized.csv",k),m.b("data/county-median-incomes.csv",v),m.b("data/h1bs-2012-2016.csv",O),m.s("data/us-state-names.tsv",S)]).then((function(t){var a=Object(g.a)(t,5),n=a[0],r=a[1],i=a[2],o=a[3],s=a[4],c={};i.filter((function(e){return d.a.find(r,{name:e.countyName})})).forEach((function(e){e.countyID=d.a.find(r,{name:e.countyName}).id,c[e.countyID]=e})),o=o.filter((function(e){return!d.a.isNull(e)})),e({usTopoJson:n,countyNames:r,medianIncomes:c,medianIncomesByCounty:d.a.groupBy(i,"countyName"),medianIncomesByUSState:d.a.groupBy(i,"USstate"),techSalaries:o,USstateNames:s})}))}((function(t){e.setState(t)}))}},{key:"loopData",value:function(e){for(var t in e)e[t][0].USstate}},{key:"componentDidUpdate",value:function(e){this.state.medianIncomesByUSState,e.medianIncomesByUSState}},{key:"countyValue",value:function(e,t){var a=this.state.medianIncomes[e.id],n=t[e.name];if(!a||!n)return null;var r=m.k(n,(function(e){return e.base_salary}));return{countyID:e.id,value:r-a.medianIncome}}},{key:"render",value:function(){var e=this,t=this.state,a=t.techSalaries,n=t.countyNames,i=t.usTopoJson,o=t.USstateNames,s=(t.page,t.filteredBy);t.medianIncomesByUSState;if(a.length<1)return r.a.createElement(b,null);var c=null,l=this.state.medianIncomesByUSState.US[0].medianIncome;"*"!==s.USstate&&(c=this.state.filteredBy.USstate,l=m.j(this.state.medianIncomesByUSState[c],(function(e){return e.medianIncome})));var u=a.filter(this.state.salariesFilter),h=d.a.groupBy(u,"countyID"),p=n.map((function(t){return e.countyValue(t,h)})).filter((function(e){return!d.a.isNull(e)}));return r.a.createElement("div",{className:"App container"},r.a.createElement(_,{data:u,filteredBy:s}),r.a.createElement(J,{data:u,allData:a,filteredBy:s,medianIncomesByCounty:this.state.medianIncomesByCounty}),r.a.createElement("svg",{width:"1100",height:"500"},r.a.createElement(D,{usTopoJson:i,USstateNames:o,values:p,x:0,y:0,width:500,height:500,zoom:c}),r.a.createElement("rect",{x:"500",y:"0",width:"500",height:"500",style:{fill:"white"}}),r.a.createElement(x,{bins:10,width:500,height:500,x:500,y:10,data:u,axisMargin:82,bottomMargin:5,value:function(e){return e.base_salary}}),r.a.createElement(Y,{data:u,x:500,y:10,width:600,height:500,bottomMargin:5,median:l,value:function(e){return e.base_salary}})),r.a.createElement($,{data:a,updateDataFilter:this.updateDataFilter}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(136);o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a.p+"static/media/preloading.0e87f8f1.png"}},[[124,1,2]]]);
//# sourceMappingURL=main.dace3687.chunk.js.map