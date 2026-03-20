import{D as e,E as t,O as n,P as r,V as i,c as a,g as o,h as s,it as c,l,m as u,r as d,s as f,u as p,w as m,x as h}from"./runtime-core.esm-bundler-BqnNe3jF.js";import{i as g}from"./basedirective-BtgFAgxi.js";import{o as _,t as v}from"./button-v8-Cfo-i.js";import{c as y}from"./index-BGWw4qDw.js";var b={name:`Card`,extends:{name:`BaseCard`,extends:_,style:g.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function x(t,n,r,i,a,o){return m(),p(`div`,h({class:t.cx(`root`)},t.ptmi(`root`)),[t.$slots.header?(m(),p(`div`,h({key:0,class:t.cx(`header`)},t.ptm(`header`)),[e(t.$slots,`header`)],16)):l(``,!0),f(`div`,h({class:t.cx(`body`)},t.ptm(`body`)),[t.$slots.title||t.$slots.subtitle?(m(),p(`div`,h({key:0,class:t.cx(`caption`)},t.ptm(`caption`)),[t.$slots.title?(m(),p(`div`,h({key:0,class:t.cx(`title`)},t.ptm(`title`)),[e(t.$slots,`title`)],16)):l(``,!0),t.$slots.subtitle?(m(),p(`div`,h({key:1,class:t.cx(`subtitle`)},t.ptm(`subtitle`)),[e(t.$slots,`subtitle`)],16)):l(``,!0)],16)):l(``,!0),f(`div`,h({class:t.cx(`content`)},t.ptm(`content`)),[e(t.$slots,`content`)],16),t.$slots.footer?(m(),p(`div`,h({key:1,class:t.cx(`footer`)},t.ptm(`footer`)),[e(t.$slots,`footer`)],16)):l(``,!0)],16)],16)}b.render=x;var S={class:`text-xs text-blue-500 font-bold uppercase tracking-wider mb-2`},C={class:`text-xl font-bold text-gray-900 leading-tight m-0 group-hover:text-blue-700 transition-colors`},w={class:`flex items-end mt-4`},T={class:`text-3xl font-extrabold text-slate-800`},E={class:`flex gap-3 mt-5`},D=o({__name:`ProductCard`,props:{product:{type:Object,required:!0}},emits:[`add-to-cart`],setup(e,{emit:t}){let o=e,l=t,d=()=>{l(`add-to-cart`,o.product)};return(t,o)=>{let l=n(`router-link`);return m(),a(i(b),{class:`hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group border-0 bg-white shadow-sm ring-1 ring-gray-100`},{title:r(()=>[f(`div`,S,c(e.product.category.name),1),f(`h3`,C,c(e.product.name),1)]),content:r(()=>[f(`div`,w,[f(`span`,T,[o[0]||=f(`span`,{class:`text-lg font-medium text-slate-500 mr-1`},`R$`,-1),u(c(e.product.price.toFixed(2)),1)])])]),footer:r(()=>[f(`div`,E,[s(l,{to:`/product/${e.product.id}`,class:`flex-1`},{default:r(()=>[s(i(v),{label:`Detalhes`,icon:`pi pi-search`,class:`w-full`,severity:`secondary`,outlined:``})]),_:1},8,[`to`]),s(i(v),{label:`Adicionar`,icon:`pi pi-cart-plus`,class:`flex-1 w-full font-bold`,severity:`info`,onClick:d})])]),_:1})}}}),O={class:`bg-white p-6 rounded-lg shadow-sm border border-gray-100`},k={class:`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr`},A=o({__name:`HomeView`,setup(e){return(e,n)=>(m(),p(`div`,O,[n[0]||=f(`div`,{class:`flex justify-between items-end mb-6 border-b pb-4`},[f(`div`,null,[f(`h2`,{class:`text-3xl font-extrabold text-gray-800`},`Produtos em Destaque`),f(`p`,{class:`text-gray-500 mt-1`},`Bem-vindo à TIC-HUB. Aproveite nossas ofertas!`)])],-1),f(`div`,k,[(m(!0),p(d,null,t(i(y).products,e=>(m(),a(D,{key:e.id,product:e,onAddToCart:i(y).addToCart},null,8,[`product`,`onAddToCart`]))),128))])]))}});export{A as default};