import{A as e,D as t,E as n,F as r,O as i,P as a,V as o,c as s,g as c,h as l,it as u,k as d,l as f,m as p,o as m,r as h,s as g,tt as _,u as v,w as y,x as b}from"./runtime-core.esm-bundler-BqnNe3jF.js";import{D as x,F as S,J as C,P as w,X as T,f as ee,i as E,pt as te,z as D}from"./basedirective-BtgFAgxi.js";import{a as O,o as k,s as A,t as ne}from"./button-v8-Cfo-i.js";import{f as re,l as ie,s as j,t as ae,u as M}from"./index-BGWw4qDw.js";import{n as N,r as P,t as F}from"./chevronright-DoWY7gZ7.js";var I=E.extend({name:`menu`,style:`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,classes:{root:function(e){var t=e.props;return[`p-menu p-component`,{"p-menu-overlay":t.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`}}),L={name:`BaseMenu`,extends:k,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:I,provide:function(){return{$pcMenu:this,$parentInstance:this}}},R={name:`Menuitem`,hostName:`Menu`,extends:k,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?te(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,`command`);t&&t({originalEvent:e,item:this.item.item}),this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:b({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:b({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`)),label:b({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}}},computed:{dataP:function(){return A({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:O}},z=[`id`,`aria-label`,`aria-disabled`,`data-p-focused`,`data-p-disabled`,`data-p`],B=[`data-p`],V=[`href`,`target`],H=[`data-p`],U=[`data-p`];function W(t,n,i,a,o,c){var l=d(`ripple`);return c.visible()?(y(),v(`li`,b({key:0,id:i.id,class:[t.cx(`item`),i.item.class],role:`menuitem`,style:i.item.style,"aria-label":c.label(),"aria-disabled":c.disabled(),"data-p-focused":c.isItemFocused(),"data-p-disabled":c.disabled()||!1,"data-p":c.dataP},c.getPTOptions(`item`)),[g(`div`,b({class:t.cx(`itemContent`),onClick:n[0]||=function(e){return c.onItemClick(e)},onMousemove:n[1]||=function(e){return c.onItemMouseMove(e)},"data-p":c.dataP},c.getPTOptions(`itemContent`)),[i.templates.item?i.templates.item?(y(),s(e(i.templates.item),{key:1,item:i.item,label:c.label(),props:c.getMenuItemProps(i.item)},null,8,[`item`,`label`,`props`])):f(``,!0):r((y(),v(`a`,b({key:0,href:i.item.url,class:t.cx(`itemLink`),target:i.item.target,tabindex:`-1`},c.getPTOptions(`itemLink`)),[i.templates.itemicon?(y(),s(e(i.templates.itemicon),{key:0,item:i.item,class:_(t.cx(`itemIcon`))},null,8,[`item`,`class`])):i.item.icon?(y(),v(`span`,b({key:1,class:[t.cx(`itemIcon`),i.item.icon],"data-p":c.dataP},c.getPTOptions(`itemIcon`)),null,16,H)):f(``,!0),g(`span`,b({class:t.cx(`itemLabel`),"data-p":c.dataP},c.getPTOptions(`itemLabel`)),u(c.label()),17,U)],16,V)),[[l]])],16,B)],16,z)):f(``,!0)}R.render=W;function G(e){return oe(e)||J(e)||q(e)||K()}function K(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(e,t){if(e){if(typeof e==`string`)return Y(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function J(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function oe(e){if(Array.isArray(e))return Y(e)}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var X={name:`Menu`,extends:L,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&j.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.popup&&(D(this.target),this.hide());case`Tab`:this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)D(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(w(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1),e.preventDefault()},onEnterKey:function(e){var t=T(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&T(t,`a[data-pc-section="itemlink"]`);this.popup&&D(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=G(w(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=G(w(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=w(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){x(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&j.set(`menu`,e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&D(this.list),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(e){this.autoZIndex&&j.clear(e)},alignOverlay:function(){ee(this.container,this.target),C(this.target)>C(this.container)&&(this.container.style.minWidth=C(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&(e.focusedOptionIndex=-1)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new ae(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!S()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e.visible==`function`?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},label:function(e){return typeof e.label==`function`?e.label():e.label},onOverlayClick:function(e){P.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},dataP:function(){return A({popup:this.popup})}},components:{PVMenuitem:R,Portal:N}},se=[`id`,`data-p`],ce=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`],le=[`id`];function ue(e,r,o,c,d,m){var _=i(`PVMenuitem`),x=i(`Portal`);return y(),s(x,{appendTo:e.appendTo,disabled:!e.popup},{default:a(function(){return[l(re,b({name:`p-anchored-overlay`,onEnter:m.onEnter,onLeave:m.onLeave,onAfterLeave:m.onAfterLeave},e.ptm(`transition`)),{default:a(function(){return[!e.popup||d.overlayVisible?(y(),v(`div`,b({key:0,ref:m.containerRef,id:e.$id,class:e.cx(`root`),onClick:r[3]||=function(){return m.onOverlayClick&&m.onOverlayClick.apply(m,arguments)},"data-p":m.dataP},e.ptmi(`root`)),[e.$slots.start?(y(),v(`div`,b({key:0,class:e.cx(`start`)},e.ptm(`start`)),[t(e.$slots,`start`)],16)):f(``,!0),g(`ul`,b({ref:m.listRef,id:e.$id+`_list`,class:e.cx(`list`),role:`menu`,tabindex:e.tabindex,"aria-activedescendant":d.focused?m.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:r[0]||=function(){return m.onListFocus&&m.onListFocus.apply(m,arguments)},onBlur:r[1]||=function(){return m.onListBlur&&m.onListBlur.apply(m,arguments)},onKeydown:r[2]||=function(){return m.onListKeyDown&&m.onListKeyDown.apply(m,arguments)}},e.ptm(`list`)),[(y(!0),v(h,null,n(e.model,function(r,i){return y(),v(h,{key:m.label(r)+i.toString()},[r.items&&m.visible(r)&&!r.separator?(y(),v(h,{key:0},[r.items?(y(),v(`li`,b({key:0,id:e.$id+`_`+i,class:[e.cx(`submenuLabel`),r.class],role:`none`},{ref_for:!0},e.ptm(`submenuLabel`)),[t(e.$slots,e.$slots.submenulabel?`submenulabel`:`submenuheader`,{item:r},function(){return[p(u(m.label(r)),1)]})],16,le)):f(``,!0),(y(!0),v(h,null,n(r.items,function(t,n){return y(),v(h,{key:t.label+i+`_`+n},[m.visible(t)&&!t.separator?(y(),s(_,{key:0,id:e.$id+`_`+i+`_`+n,item:t,templates:e.$slots,focusedOptionId:m.focusedOptionId,unstyled:e.unstyled,onItemClick:m.itemClick,onItemMousemove:m.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])):m.visible(t)&&t.separator?(y(),v(`li`,b({key:`separator`+i+n,class:[e.cx(`separator`),r.class],style:t.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):f(``,!0)],64)}),128))],64)):m.visible(r)&&r.separator?(y(),v(`li`,b({key:`separator`+i.toString(),class:[e.cx(`separator`),r.class],style:r.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):(y(),s(_,{key:m.label(r)+i.toString(),id:e.$id+`_`+i,item:r,index:i,templates:e.$slots,focusedOptionId:m.focusedOptionId,unstyled:e.unstyled,onItemClick:m.itemClick,onItemMousemove:m.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`]))],64)}),128))],16,ce),e.$slots.end?(y(),v(`div`,b({key:1,class:e.cx(`end`)},e.ptm(`end`)),[t(e.$slots,`end`)],16)):f(``,!0)],16,se)):f(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}X.render=ue;var de=E.extend({name:`breadcrumb`,style:`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,classes:{root:`p-breadcrumb p-component`,list:`p-breadcrumb-list`,homeItem:`p-breadcrumb-home-item`,separator:`p-breadcrumb-separator`,separatorIcon:`p-breadcrumb-separator-icon`,item:function(e){var t=e.instance;return[`p-breadcrumb-item`,{"p-disabled":t.disabled()}]},itemLink:`p-breadcrumb-item-link`,itemIcon:`p-breadcrumb-item-icon`,itemLabel:`p-breadcrumb-item-label`}}),fe={name:`BaseBreadcrumb`,extends:k,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:de,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Z={name:`BreadcrumbItem`,hostName:`Breadcrumb`,extends:k,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,n=e.url,r=typeof window<`u`?window.location.pathname:``;return t===r||n===r?`page`:void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:b({class:this.cx(`itemLink`),"aria-current":this.isCurrentUrl(),onClick:function(t){return e.onClick(t)}},this.ptm(`itemLink`,this.ptmOptions)),icon:b({class:[this.cx(`icon`),this.item.icon]},this.ptm(`icon`,this.ptmOptions)),label:b({class:this.cx(`label`)},this.ptm(`label`,this.ptmOptions))}}}},pe=[`href`,`target`,`aria-current`];function me(t,n,r,i,a,o){return o.visible()?(y(),v(`li`,b({key:0,class:[t.cx(`item`),r.item.class]},t.ptm(`item`,o.ptmOptions)),[r.templates.item?(y(),s(e(r.templates.item),{key:1,item:r.item,label:o.label(),props:o.getMenuItemProps},null,8,[`item`,`label`,`props`])):(y(),v(`a`,b({key:0,href:r.item.url||`#`,class:t.cx(`itemLink`),target:r.item.target,"aria-current":o.isCurrentUrl(),onClick:n[0]||=function(){return o.onClick&&o.onClick.apply(o,arguments)}},t.ptm(`itemLink`,o.ptmOptions)),[r.templates&&r.templates.itemicon?(y(),s(e(r.templates.itemicon),{key:0,item:r.item,class:_(t.cx(`itemIcon`,o.ptmOptions))},null,8,[`item`,`class`])):r.item.icon?(y(),v(`span`,b({key:1,class:[t.cx(`itemIcon`),r.item.icon]},t.ptm(`itemIcon`,o.ptmOptions)),null,16)):f(``,!0),r.item.label?(y(),v(`span`,b({key:2,class:t.cx(`itemLabel`)},t.ptm(`itemLabel`,o.ptmOptions)),u(o.label()),17)):f(``,!0)],16,pe))],16)):f(``,!0)}Z.render=me;var Q={name:`Breadcrumb`,extends:fe,inheritAttrs:!1,components:{BreadcrumbItem:Z,ChevronRightIcon:F}};function he(e,r,a,o,c,u){var d=i(`BreadcrumbItem`),p=i(`ChevronRightIcon`);return y(),v(`nav`,b({class:e.cx(`root`)},e.ptmi(`root`)),[g(`ol`,b({class:e.cx(`list`)},e.ptm(`list`)),[e.home?(y(),s(d,b({key:0,item:e.home,class:e.cx(`homeItem`),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm(`homeItem`)),null,16,[`item`,`class`,`templates`,`pt`,`unstyled`])):f(``,!0),(y(!0),v(h,null,n(e.model,function(n,r){return y(),v(h,{key:n.label+`_`+r},[e.home||r!==0?(y(),v(`li`,b({key:0,class:e.cx(`separator`)},{ref_for:!0},e.ptm(`separator`)),[t(e.$slots,`separator`,{},function(){return[l(p,b({"aria-hidden":`true`,class:e.cx(`separatorIcon`)},{ref_for:!0},e.ptm(`separatorIcon`)),null,16,[`class`])]})],16)):f(``,!0),l(d,{item:n,index:r,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,[`item`,`index`,`templates`,`pt`,`unstyled`])],64)}),128))],16)],16)}Q.render=he;var ge={class:`flex min-h-screen bg-slate-100`},$={class:`w-64 bg-slate-900 text-white flex flex-col shadow-xl z-20`},_e={class:`flex-1 p-4`},ve={class:`p-4 border-t border-slate-800`},ye={class:`flex-1 flex flex-col`},be={class:`bg-white px-8 py-4 shadow-sm flex items-center justify-between z-10 sticky top-0`},xe={class:`flex items-center gap-4`},Se={class:`p-8 pb-12 overflow-y-auto`},Ce=c({__name:`AdminLayout`,setup(e){let t=M(),n=ie(),r=[{label:`Gestão de Produtos`,icon:`pi pi-box`,command:()=>t.push(`/admin`)},{label:`Relatórios de Vendas`,icon:`pi pi-chart-bar`,command:()=>t.push(`/admin/reports`)}],a={icon:`pi pi-home`,command:()=>t.push(`/admin`)},s=m(()=>n.meta.breadcrumb||[{label:`Painel Geral`}]),c=()=>t.push(`/`);return(e,t)=>{let n=i(`RouterView`);return y(),v(`div`,ge,[g(`aside`,$,[t[0]||=g(`div`,{class:`p-6 border-b border-slate-800 bg-slate-950 flex flex-col items-center`},[g(`i`,{class:`pi pi-shop text-4xl mb-3 text-blue-400`}),g(`h2`,{class:`text-xl font-bold tracking-wider uppercase`},`Admin Store`)],-1),g(`div`,_e,[l(o(X),{model:r,class:`w-full bg-transparent border-none text-white text-sm`})]),g(`div`,ve,[l(o(ne),{label:`Voltar à Vitrine`,icon:`pi pi-arrow-left`,severity:`secondary`,outlined:``,class:`w-full text-white`,onClick:c})])]),g(`main`,ye,[g(`header`,be,[g(`div`,xe,[l(o(Q),{home:a,model:s.value,class:`border-none bg-transparent p-0 text-sm`},null,8,[`model`])]),t[1]||=g(`div`,{class:`flex items-center gap-4`},[g(`span`,{class:`bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold shadow-inner`},[g(`i`,{class:`pi pi-user mr-1`}),p(` ADMIN LOGGED `)])],-1)]),g(`section`,Se,[l(n)])])])}}});export{Ce as default};