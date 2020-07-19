(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gJDI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));n("PN9k"),n("LnO1"),n("3eMz"),n("dtAy"),n("DB+v"),n("6lxD"),n("ERkP");var a=n("ZVZ0"),b=n("9Rvw"),r=n("BVnp"),c=n("NyXJ"),i=n.n(c);n("l1C2");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/UI/menu.mdx"}});var p={_frontmatter:m},o=b.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,["components"]);return Object(a.b)(o,l({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"menu"},"Menu"),Object(a.b)("p",null,"Improved and redesigned menu:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Menu search"),Object(a.b)("li",{parentName:"ul"},"Right side headings menu with scroll detection"),Object(a.b)("li",{parentName:"ul"},"Menu groups"),Object(a.b)("li",{parentName:"ul"},"Sub menus"),Object(a.b)("li",{parentName:"ul"},"Menu display names")),Object(a.b)("h2",{id:"config"},"Config"),Object(a.b)("h3",{id:"search"},"Search"),Object(a.b)("p",null,"Inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file there is a ",Object(a.b)("inlineCode",{parentName:"p"},"themeConfig.menu.search")," option to enable or disable search."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  themeConfig: {\n    menu: {\n      search: true,\n    },\n  },\n};\n")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"search"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Specify if the menu search should be shown.")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"headings"},"Headings"),Object(a.b)("p",null,"Inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file there is a ",Object(a.b)("inlineCode",{parentName:"p"},"themeConfig.menu.headings")," option."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  themeConfig: {\n    menu: {\n      headings: {\n        rightSide: true,\n        scrollspy: true,\n        depth: 3,\n      },\n    },\n  },\n};\n")),Object(a.b)("h4",{id:"options-1"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"rightSide"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Specify if the headings menu on the right should be shown.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"scrollspy"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Specify if the headings menu should have scrollspy enabled.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"depth"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"number")),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"3")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Specify the depth of headings to be shown. (1 - 6)")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"groups"},"Groups"),Object(a.b)("p",null,"Menu items can now be grouped into labeled sections. Inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file there is a ",Object(a.b)("inlineCode",{parentName:"p"},"groups")," option.\nThe option receives an object where the key is the section name and the value is an array of menu items.\nThe order of items is reflected in the menu."),Object(a.b)(r.a,{type:"info",mdxType:"Hint"},"An empty key ('') represents ungrouped values."),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"Only top level menu items or menu groups can be grouped into sections."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  groups: {\n    '': [],\n    API: ['Components', 'UI'],\n  },\n};\n")),Object(a.b)("h4",{id:"options-2"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"groups"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"object")),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Specify menu groups where object key is the group name and the value is an array of documents / pages")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sub-menus"},"Sub menus"),Object(a.b)("p",null,"Menu items can now have one level of submenus.\nInside each document there is a ",Object(a.b)("inlineCode",{parentName:"p"},"submenu")," option."),Object(a.b)("img",{src:i.a,alt:"Submenus"}),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-mdx"}),"---\nname: Footer\nroute: /ui/footer\nmenu: UI\nsubmenu: Bottom\ntags: ui, footer, footer config, theme, user interface, submenu, sub menu\n---\n\n# My mdx file\n")),Object(a.b)("h4",{id:"options-3"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"submenu"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Name of submenu")))),Object(a.b)("h4",{id:"sorting"},"Sorting"),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"Sub menus do not have any custom sorting option. For this the docz"," ",Object(a.b)(r.b,{mdxType:"InlineCode"},"menu")," option inside ",Object(a.b)(r.b,{mdxType:"InlineCode"},"doczrc.js")," ","file can be used. Check example bellow."),Object(a.b)("p",null,"Menu:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{}),"Item 1\nItem 2\nItem 3\n  > Item 3.1\n  > Item 3.2\nItem 4\nItem 5\n  > Item 5.1\n  > Sub-menu 5.2\n    > Item 5.2.1\n    > Item 5.2.2\n    > Item 5.2.3\n  > Item 5.3\n  > Sub-menu 5.4\n    > Item 5.4.1\n  > Item 5.5\nItem 6\n")),Object(a.b)("p",null,"Code:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  menu: [\n    'Item 1',\n    'Item 2',\n    { name: 'Item 3', menu: ['Item 3.1', 'Item 3.2'] },\n    'Item 4',\n    {\n      name: 'Item 5',\n      menu: [\n        'Item 5.1',\n        'Item 5.2.1', // 1st item from Sub-menu 5.2\n        'Item 5.2.2', // 2nd item from Sub-menu 5.2\n        'Item 5.2.3', // 3rd item from Sub-menu 5.2\n        'Item 5.3',\n        'Item 5.4.1', // 1st item from Sub-menu 5.4\n        'Item 5.5',\n      ],\n    },\n    'Item 6',\n  ],\n};\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"menu-display-name"},"Menu display name"),Object(a.b)("p",null,"To allow having menus with the same name a ",Object(a.b)("inlineCode",{parentName:"p"},"menuDisplayName")," option can be set inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file.\nThe option receives an object where the key represents the document ",Object(a.b)("inlineCode",{parentName:"p"},"name")," and the value is a string to be displayed in the menu."),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"This also applies to ",Object(a.b)(r.b,{mdxType:"InlineCode"},"menu")," names."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  menuDisplayName: {\n    UI: 'User Interface',\n    Main: 'Main Container',\n  },\n};\n")),Object(a.b)("h4",{id:"options-4"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"menuDisplayName"),Object(a.b)("td",l({parentName:"tr"},{align:"center"}),Object(a.b)("inlineCode",{parentName:"td"},"object")),Object(a.b)("td",l({parentName:"tr"},{align:"center"})),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Specify menu display name where object key is the document name and the value is the display name")))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/UI/menu.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-ui-menu-mdx-f0450b6d01eb1aa29a6a.js.map